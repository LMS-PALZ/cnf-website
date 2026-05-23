import { NextRequest } from "next/server";
import { buildFormNotificationEmail } from "@/lib/email/form-notification-template";
import { jsonError, jsonFieldErrors, jsonOk } from "@/lib/forms/api-response";
import { deliverInboxNotification } from "@/lib/forms/deliver-inbox-notification";
import { appendSubmission } from "@/lib/forms/persist";
import { volunteerSchema } from "@/lib/forms/schemas";

export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return jsonError("Invalid JSON body");
    }
    const parsed = volunteerSchema.safeParse(body);
    if (!parsed.success) {
        return jsonFieldErrors(parsed.error);
    }
    try {
        await appendSubmission("volunteer", parsed.data as unknown as Record<string, unknown>);
    } catch (e) {
        console.error("[forms/volunteer] persist", e);
        return jsonError("Could not save submission. Please try again later.", 500);
    }
    const {
        firstName,
        lastName,
        email,
        phone,
        city,
        country,
        volunteerArea,
        priorExperience,
        priorOrganisation,
        leadershipOpenness,
        idType,
    } = parsed.data;
    const payload = buildFormNotificationEmail({
        title: "New volunteer application",
        intro: "A visitor submitted the Volunteer form on the website.",
        fields: [
            { label: "Name", value: `${firstName} ${lastName}` },
            { label: "Email", value: email },
            { label: "Phone", value: phone ?? "" },
            { label: "Location", value: `${city}, ${country}` },
            { label: "Volunteer area", value: volunteerArea },
            { label: "Prior experience", value: priorExperience },
            { label: "Prior organisation", value: priorOrganisation ?? "" },
            { label: "Open to leadership", value: leadershipOpenness },
            { label: "ID type", value: idType },
        ],
    });
    const emailError = await deliverInboxNotification(
        "programmes",
        "New volunteer application (CNF website)",
        payload,
        { replyTo: email },
    );
    if (emailError) return emailError;

    return jsonOk();
}
