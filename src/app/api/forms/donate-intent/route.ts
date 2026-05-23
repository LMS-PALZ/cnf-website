import { NextRequest } from "next/server";
import { buildFormNotificationEmail } from "@/lib/email/form-notification-template";
import { jsonFieldErrors, jsonError, jsonOk } from "@/lib/forms/api-response";
import { deliverInboxNotification } from "@/lib/forms/deliver-inbox-notification";
import { appendSubmission } from "@/lib/forms/persist";
import { donateIntentSchema, emptyToUndefined } from "@/lib/forms/schemas";

export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return jsonError("Invalid JSON body");
    }
    if (!body || typeof body !== "object") {
        return jsonError("Invalid payload");
    }
    const normalised = emptyToUndefined(body as Record<string, unknown>, ["phone", "pledgeAmount"]);
    const parsed = donateIntentSchema.safeParse(normalised);
    if (!parsed.success) {
        return jsonFieldErrors(parsed.error);
    }
    try {
        await appendSubmission("donate-intent", parsed.data as unknown as Record<string, unknown>);
    } catch (e) {
        console.error("[forms/donate-intent] persist", e);
        return jsonError("Could not save submission. Please try again later.", 500);
    }
    const payload = buildFormNotificationEmail({
        title: "New donor interest",
        intro: "A visitor expressed interest in giving via the Donate page.",
        fields: [
            { label: "Name", value: parsed.data.name },
            { label: "Email", value: parsed.data.email },
            { label: "Phone", value: parsed.data.phone ?? "" },
            { label: "Pledge amount", value: parsed.data.pledgeAmount ?? "" },
        ],
        messageBody: parsed.data.message,
    });
    const emailError = await deliverInboxNotification(
        "programmes",
        "New donor interest (CNF website)",
        payload,
        { replyTo: parsed.data.email },
    );
    if (emailError) return emailError;

    return jsonOk();
}
