import { NextRequest } from "next/server";
import { notifyInbox } from "@/lib/email";
import { jsonError, jsonFieldErrors, jsonOk } from "@/lib/forms/api-response";
import { appendSubmission } from "@/lib/forms/persist";
import { careersNewsletterSchema } from "@/lib/forms/schemas";
export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    }
    catch {
        return jsonError("Invalid JSON body");
    }
    const parsed = careersNewsletterSchema.safeParse(body);
    if (!parsed.success) {
        return jsonFieldErrors(parsed.error);
    }
    try {
        await appendSubmission("careers-newsletter", parsed.data as unknown as Record<string, unknown>);
    }
    catch (e) {
        console.error("[forms/careers-newsletter] persist", e);
        return jsonError("Could not save your interest. Please try again.", 500);
    }
    await notifyInbox("Careers newsletter signup (CNF website)", `New careers interest signup: ${parsed.data.email}`).catch(() => { });
    return jsonOk();
}
