import { NextRequest } from "next/server";
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
    const summary = [
        "Contact form message",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Subject: ${subject}`,
        "",
        message,
    ].join("\n");

    const emailError = await deliverInboxNotification(
        "programmes",
        "New contact form message (CNF website)",
        summary,
    );
    if (emailError) return emailError;

    return jsonOk();
}
