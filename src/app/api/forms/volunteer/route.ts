import { NextRequest } from "next/server";
import { jsonError, jsonFieldErrors, jsonOk } from "@/lib/forms/api-response";
import { deliverInboxNotification } from "@/lib/forms/deliver-inbox-notification";
import { appendSubmission } from "@/lib/forms/persist";
import { volunteerSchema } from "@/lib/forms/schemas";
export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    }
    catch {
        return jsonError("Invalid JSON body");
    }
    const parsed = volunteerSchema.safeParse(body);
    if (!parsed.success) {
        return jsonFieldErrors(parsed.error);
    }
    try {
        await appendSubmission("volunteer", parsed.data as unknown as Record<string, unknown>);
    }
    catch (e) {
        console.error("[forms/volunteer] persist", e);
        return jsonError("Could not save submission. Please try again later.", 500);
    }
    const { firstName, lastName, email, phone, city, country, volunteerArea, priorExperience, priorOrganisation, leadershipOpenness, idType, } = parsed.data;
    const summary = [
        "Volunteer application",
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `City: ${city}, ${country}`,
        `Area: ${volunteerArea}`,
        `Prior experience: ${priorExperience}`,
        priorOrganisation ? `Prior organisation: ${priorOrganisation}` : null,
        `Open to leadership: ${leadershipOpenness}`,
        `ID type: ${idType}`,
    ]
        .filter(Boolean)
        .join("\n");
    const emailError = await deliverInboxNotification(
        "programmes",
        "New volunteer application (CNF website)",
        summary,
    );
    if (emailError) return emailError;

    return jsonOk();
}
