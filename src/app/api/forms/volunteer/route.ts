import { NextRequest } from "next/server";
import { notifyInbox } from "@/lib/email";
import { jsonFieldErrors, jsonError, jsonOk } from "@/lib/forms/api-response";
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

  const summary = `Volunteer enquiry\nName: ${parsed.data.name}\nEmail: ${parsed.data.email}\nCity: ${parsed.data.city}\nSkills:\n${parsed.data.skills}\nAvailability:\n${parsed.data.availability}\nMessage:\n${parsed.data.message}`;
  await notifyInbox("New volunteer enquiry (CNF website)", summary).catch(() => {});

  return jsonOk();
}
