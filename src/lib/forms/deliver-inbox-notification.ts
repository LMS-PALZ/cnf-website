import type { NextResponse } from "next/server";
import { notifyInbox, type EmailPayload } from "@/lib/email";
import type { FormNotificationContent } from "@/lib/email/form-notification-template";
import { getResendTemplateId, type ResendFormTemplateKey } from "@/lib/email/resend-template-config";
import type { FormInbox } from "@/lib/email-inboxes";
import { jsonError } from "@/lib/forms/api-response";

const EMAIL_FAILURE_MESSAGE =
    "We could not send your message right now. Please try again in a moment or contact us directly.";

export type DeliverInboxOptions = {
    replyTo?: string;
    templateKey: ResendFormTemplateKey;
    templateVariables: Record<string, string>;
    /** Built-in HTML fallback when no Resend template ID is configured. */
    notificationContent: FormNotificationContent;
};

/** Sends form notification to the routed inbox; returns an error response when delivery fails. */
export async function deliverInboxNotification(
    inbox: FormInbox,
    subject: string,
    payload: EmailPayload,
    options: DeliverInboxOptions,
): Promise<NextResponse | null> {
    const templateId = getResendTemplateId(options.templateKey);

    const template = templateId
        ? { id: templateId, variables: options.templateVariables }
        : undefined;

    try {
        await notifyInbox(inbox, subject, payload, {
            replyTo: options.replyTo,
            template,
        });
        return null;
    } catch (error) {
        const detail =
            error instanceof Error && "detail" in error
                ? String((error as { detail?: string }).detail)
                : undefined;
        console.error("[forms] deliverInboxNotification", inbox, error, detail);
        return jsonError(EMAIL_FAILURE_MESSAGE, 503);
    }
}
