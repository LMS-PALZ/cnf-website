import { NextRequest } from "next/server";
import { buildFormNotificationEmail } from "@/lib/email/form-notification-template";
import { jsonError, jsonFieldErrors, jsonOk } from "@/lib/forms/api-response";
import { deliverInboxNotification } from "@/lib/forms/deliver-inbox-notification";
import { appendSubmission } from "@/lib/forms/persist";
import { contactSchema } from "@/lib/forms/schemas";

export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return jsonError("Invalid JSON body");
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return jsonFieldErrors(parsed.error);
    }

    try {
        await appendSubmission("contact", parsed.data as unknown as Record<string, unknown>);
    } catch (e) {
        console.error("[forms/contact] persist", e);
        return jsonError("Could not save submission. Please try again later.", 500);
    }

    const { name, email, phone, subject, message } = parsed.data;
    const payload = buildFormNotificationEmail({
        title: "New contact form message",
        intro: "A visitor sent a message from the Contact page.",
        fields: [
            { label: "Name", value: name },
            { label: "Email", value: email },
            { label: "Phone", value: phone },
            { label: "Subject", value: subject },
        ],
        messageBody: message,
    });

    const emailError = await deliverInboxNotification(
        "programmes",
        `Contact: ${subject}`,
        payload,
        { replyTo: email },
    );
    if (emailError) return emailError;

    return jsonOk();
}
