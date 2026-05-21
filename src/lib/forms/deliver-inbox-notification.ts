import type { NextResponse } from "next/server";
import { notifyInbox } from "@/lib/email";
import type { FormInbox } from "@/lib/email-inboxes";
import { jsonError } from "@/lib/forms/api-response";

const EMAIL_FAILURE_MESSAGE =
    "We could not send your message right now. Please try again in a moment or contact us directly.";

/** Sends form notification to the routed inbox; returns an error response when delivery fails. */
export async function deliverInboxNotification(
    inbox: FormInbox,
    subject: string,
    text: string,
): Promise<NextResponse | null> {
    try {
        await notifyInbox(inbox, subject, text);
        return null;
    } catch (error) {
        console.error("[forms] deliverInboxNotification", inbox, error);
        return jsonError(EMAIL_FAILURE_MESSAGE, 503);
    }
}
