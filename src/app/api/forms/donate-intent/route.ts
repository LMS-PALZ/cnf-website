import { NextRequest } from "next/server";
import { jsonFieldErrors, jsonError, jsonOk } from "@/lib/forms/api-response";
import { deliverInboxNotification } from "@/lib/forms/deliver-inbox-notification";
import { appendSubmission } from "@/lib/forms/persist";
import { donateIntentSchema, emptyToUndefined } from "@/lib/forms/schemas";
export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    }
    catch {
        return jsonError("Invalid JSON body");
    }
    if (!body || typeof body !== "object") {
        return jsonError("Invalid payload");
    }
    const normalised = emptyToUndefined(body as Record<string, unknown>, [
        "phone",
        "pledgeAmount",
    ]);
    const parsed = donateIntentSchema.safeParse(normalised);
    if (!parsed.success) {
        return jsonFieldErrors(parsed.error);
    }
    try {
        await appendSubmission("donate-intent", parsed.data as unknown as Record<string, unknown>);
    }
    catch (e) {
        console.error("[forms/donate-intent] persist", e);
        return jsonError("Could not save submission. Please try again later.", 500);
    }
    const summary = `Donor interest\nName: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone ?? "-"}\nPledge: ${parsed.data.pledgeAmount ?? "-"}\nMessage:\n${parsed.data.message}`;
    const emailError = await deliverInboxNotification(
        "programmes",
        "New donor interest (CNF website)",
        summary,
    );
    if (emailError) return emailError;

    return jsonOk();
}
