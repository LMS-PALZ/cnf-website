import { NextRequest } from "next/server";
import { jsonError, jsonFieldErrors, jsonOk } from "@/lib/forms/api-response";
import { deliverInboxNotification } from "@/lib/forms/deliver-inbox-notification";
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
    const emailError = await deliverInboxNotification(
        "programmes",
        "Careers newsletter signup (CNF website)",
        `New careers interest signup: ${parsed.data.email}`,
    );
    if (emailError) return emailError;

    return jsonOk();
}
