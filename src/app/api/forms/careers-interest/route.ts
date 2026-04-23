import { NextRequest } from "next/server";
import { notifyInbox } from "@/lib/email";
import { jsonFieldErrors, jsonError, jsonOk } from "@/lib/forms/api-response";
import { appendSubmission } from "@/lib/forms/persist";
import { careersInterestSchema, emptyToUndefined } from "@/lib/forms/schemas";

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

  const normalised = emptyToUndefined(body as Record<string, unknown>, ["message"]);
  const parsed = careersInterestSchema.safeParse(normalised);
  if (!parsed.success) {
    return jsonFieldErrors(parsed.error);
  }

  try {
    await appendSubmission(
      "careers-interest",
      parsed.data as unknown as Record<string, unknown>,
    );
  } catch (e) {
    console.error("[forms/careers-interest] persist", e);
    return jsonError("Could not save submission. Please try again later.", 500);
  }

  const summary = `Careers interest\nRole / area: ${parsed.data.roleInterest}\nEmail: ${parsed.data.email}\nMessage:\n${parsed.data.message ?? "—"}`;
  await notifyInbox("New careers interest (CNF website)", summary).catch(() => {});

  return jsonOk();
}
