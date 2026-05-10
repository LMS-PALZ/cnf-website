import { NextRequest } from "next/server";
import { notifyInbox } from "@/lib/email";
import { jsonError, jsonFieldErrors, jsonOk } from "@/lib/forms/api-response";
import { appendSubmission } from "@/lib/forms/persist";
import { careersProfileSchema } from "@/lib/forms/schemas";
export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    }
    catch {
        return jsonError("Invalid JSON body");
    }
    const parsed = careersProfileSchema.safeParse(body);
    if (!parsed.success) {
        return jsonFieldErrors(parsed.error);
    }
    try {
        await appendSubmission("careers-profile", parsed.data as unknown as Record<string, unknown>);
    }
    catch (e) {
        console.error("[forms/careers-profile] persist", e);
        return jsonError("Could not save submission. Please try again later.", 500);
    }
    const { firstName, lastName, email, areaOfExpertise, briefIntroduction } = parsed.data;
    const summary = [
        "Careers profile submission",
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Area of expertise: ${areaOfExpertise}`,
        "",
        briefIntroduction,
    ].join("\n");
    await notifyInbox("New careers profile (CNF website)", summary).catch(() => { });
    return jsonOk();
}
