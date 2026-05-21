import { FORM_INBOX_ADDRESSES, type FormInbox } from "@/lib/email-inboxes";
import { site } from "@/lib/site";

const defaultFrom = `CNF Website <noreply@${site.emailSendingDomain}>`;

export class EmailDeliveryError extends Error {
    constructor(message = "Failed to send notification email") {
        super(message);
        this.name = "EmailDeliveryError";
    }
}

export async function notifyInbox(
    inbox: FormInbox,
    subject: string,
    text: string,
): Promise<void> {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
        console.info("[email] RESEND_API_KEY missing; skip send");
        return;
    }

    const to = FORM_INBOX_ADDRESSES[inbox];
    const from = process.env.RESEND_FROM ?? defaultFrom;
    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to, subject, text }),
    });

    if (!res.ok) {
        const errText = await res.text().catch(() => "");
        console.error("[email] Resend error", res.status, errText);
        throw new EmailDeliveryError();
    }
}
