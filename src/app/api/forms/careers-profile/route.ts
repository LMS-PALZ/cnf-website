import { NextRequest } from "next/server";
import { buildFormNotificationEmail } from "@/lib/email/form-notification-template";
import { jsonError, jsonFieldErrors, jsonOk } from "@/lib/forms/api-response";
import { deliverInboxNotification } from "@/lib/forms/deliver-inbox-notification";
import { appendSubmission } from "@/lib/forms/persist";
import { careersProfileSchema } from "@/lib/forms/schemas";

export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return jsonError("Invalid JSON body");
    }
    const parsed = careersProfileSchema.safeParse(body);
    if (!parsed.success) {
        return jsonFieldErrors(parsed.error);
    }
    try {
        await appendSubmission("careers-profile", parsed.data as unknown as Record<string, unknown>);
    } catch (e) {
        console.error("[forms/careers-profile] persist", e);
        return jsonError("Could not save submission. Please try again later.", 500);
    }
    const { firstName, lastName, email, areaOfExpertise, briefIntroduction } = parsed.data;
    const payload = buildFormNotificationEmail({
        title: "New careers profile",
        intro: "A visitor shared their profile on the Careers page.",
        fields: [
            { label: "Name", value: `${firstName} ${lastName}` },
            { label: "Email", value: email },
            { label: "Area of expertise", value: areaOfExpertise },
        ],
        messageBody: briefIntroduction,
        messageLabel: "Introduction",
    });
    const emailError = await deliverInboxNotification(
        "programmes",
        "New careers profile (CNF website)",
        payload,
        { replyTo: email },
    );
    if (emailError) return emailError;

    return jsonOk();
}
