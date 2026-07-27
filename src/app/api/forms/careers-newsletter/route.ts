import { NextRequest } from "next/server";
import { buildFormNotificationEmail } from "@/lib/email/form-notification-template";
import { careersNewsletterTemplateVariables } from "@/lib/email/resend-template-variables";
import { jsonError, jsonFieldErrors, jsonOk } from "@/lib/forms/api-response";
import { deliverInboxNotification } from "@/lib/forms/deliver-inbox-notification";
import { appendSubmission } from "@/lib/forms/persist";
import { careersNewsletterSchema } from "@/lib/forms/schemas";

export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return jsonError("Invalid JSON body");
    }
    const parsed = careersNewsletterSchema.safeParse(body);
    if (!parsed.success) {
        return jsonFieldErrors(parsed.error);
    }
    try {
        await appendSubmission("careers-newsletter", parsed.data as unknown as Record<string, unknown>);
    } catch (e) {
        console.error("[forms/careers-newsletter] persist", e);
        return jsonError("Could not save your interest. Please try again.", 500);
    }
    const notificationContent = {
        title: "Careers interest signup",
        intro: "A visitor asked to hear about careers opportunities.",
        fields: [{ label: "Email", value: parsed.data.email }],
    };
    const payload = buildFormNotificationEmail(notificationContent);
    const emailError = await deliverInboxNotification(
        "media",
        "Careers interest signup (CNF website)",
        payload,
        {
            replyTo: parsed.data.email,
            templateKey: "careers-newsletter",
            templateVariables: careersNewsletterTemplateVariables(parsed.data),
            notificationContent,
        },
    );
    if (emailError) return emailError;

    return jsonOk();
}
