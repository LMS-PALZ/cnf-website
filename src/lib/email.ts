import { FORM_INBOX_ADDRESSES, type FormInbox } from "@/lib/email-inboxes";
import { site } from "@/lib/site";

const defaultFromAddress = `noreply@${site.emailSendingDomain}`;
const defaultFrom = `CNF Website <${defaultFromAddress}>`;

export type EmailPayload = {
    text: string;
    html: string;
};

export type ResendTemplateSend = {
    id: string;
    variables: Record<string, string | number>;
};

export type NotifyInboxOptions = {
    replyTo?: string;
    template?: ResendTemplateSend;
};

export class EmailDeliveryError extends Error {
    readonly statusCode?: number;
    readonly detail?: string;

    constructor(message = "Failed to send notification email", statusCode?: number, detail?: string) {
        super(message);
        this.name = "EmailDeliveryError";
        this.statusCode = statusCode;
        this.detail = detail;
    }
}

function resolveFromAddress(): string {
    const configured = process.env.RESEND_FROM?.trim();
    if (configured) {
        return configured;
    }
    return defaultFrom;
}

function parseResendError(body: string): string {
    try {
        const parsed = JSON.parse(body) as { message?: string };
        return parsed.message ?? body;
    } catch {
        return body;
    }
}

export async function notifyInbox(
    inbox: FormInbox,
    subject: string,
    payload: EmailPayload,
    options: NotifyInboxOptions = {},
): Promise<void> {
    const key = process.env.RESEND_API_KEY?.trim();
    if (!key) {
        const message = "RESEND_API_KEY is not configured";
        console.error(`[email] ${message}`);
        throw new EmailDeliveryError(message);
    }

    const to = FORM_INBOX_ADDRESSES[inbox];
    const from = resolveFromAddress();

    const body: Record<string, unknown> = {
        from,
        to: [to],
        subject,
    };

    if (options.template) {
        body.template = {
            id: options.template.id,
            variables: options.template.variables,
        };
    } else {
        body.text = payload.text;
        body.html = payload.html;
    }

    const replyTo = options.replyTo?.trim();
    if (replyTo) {
        body.reply_to = replyTo;
    }

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        const errText = await res.text().catch(() => "");
        const detail = parseResendError(errText);
        console.error("[email] Resend error", {
            status: res.status,
            inbox,
            to,
            from,
            templateId: options.template?.id,
            detail,
        });
        throw new EmailDeliveryError("Failed to send notification email", res.status, detail);
    }
}
