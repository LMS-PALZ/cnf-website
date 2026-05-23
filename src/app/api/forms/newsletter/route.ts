import { NextRequest } from "next/server";
import { buildFormNotificationEmail } from "@/lib/email/form-notification-template";
import { newsletterTemplateVariables } from "@/lib/email/resend-template-variables";
import { jsonError, jsonFieldErrors, jsonOk } from "@/lib/forms/api-response";
import { deliverInboxNotification } from "@/lib/forms/deliver-inbox-notification";
import { appendSubmission } from "@/lib/forms/persist";
import { newsletterSchema } from "@/lib/forms/schemas";

export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return jsonError("Invalid JSON body");
    }
    const parsed = newsletterSchema.safeParse(body);
    if (!parsed.success) {
        return jsonFieldErrors(parsed.error);
    }
    try {
        await appendSubmission("newsletter", parsed.data as unknown as Record<string, unknown>);
    } catch (e) {
        console.error("[forms/newsletter] persist", e);
        return jsonError("Could not save your subscription. Please try again.", 500);
    }
    const notificationContent = {
        title: "Newsletter signup",
        intro: "A visitor joined the newsletter from the website.",
        fields: [
            { label: "Name", value: parsed.data.name },
            { label: "Email", value: parsed.data.email },
        ],
    };
    const payload = buildFormNotificationEmail(notificationContent);
    const emailError = await deliverInboxNotification(
        "media",
        "Newsletter signup (CNF website)",
        payload,
        {
            replyTo: parsed.data.email,
            templateKey: "newsletter",
            templateVariables: newsletterTemplateVariables(parsed.data),
            notificationContent,
        },
    );
    if (emailError) return emailError;

    return jsonOk();
}
