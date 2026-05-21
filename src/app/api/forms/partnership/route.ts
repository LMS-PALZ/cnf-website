import { NextRequest } from "next/server";
import { jsonError, jsonFieldErrors, jsonOk } from "@/lib/forms/api-response";
import { deliverInboxNotification } from "@/lib/forms/deliver-inbox-notification";
import { appendSubmission } from "@/lib/forms/persist";
import { partnershipSchema } from "@/lib/forms/schemas";
export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    }
    catch {
        return jsonError("Invalid JSON body");
    }
    const parsed = partnershipSchema.safeParse(body);
    if (!parsed.success) {
        return jsonFieldErrors(parsed.error);
    }
    try {
        await appendSubmission("partnership", parsed.data as unknown as Record<string, unknown>);
    }
    catch (e) {
        console.error("[forms/partnership] persist", e);
        return jsonError("Could not save submission. Please try again later.", 500);
    }
    const { firstName, lastName, email, organisation, country, pillars, message, phone } = parsed.data;
    const summary = [
        "Partnership enquiry",
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Organisation: ${organisation}`,
        `Country: ${country}`,
        `Pillars: ${pillars.join(", ")}`,
        "",
        message,
    ]
        .filter(Boolean)
        .join("\n");
    const emailError = await deliverInboxNotification(
        "partnership",
        "New partnership enquiry (CNF website)",
        summary,
    );
    if (emailError) return emailError;

    return jsonOk();
}
