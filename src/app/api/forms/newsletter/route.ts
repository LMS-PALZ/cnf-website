import { NextRequest } from "next/server";
import { notifyInbox } from "@/lib/email";
import { jsonError, jsonFieldErrors, jsonOk } from "@/lib/forms/api-response";
import { appendSubmission } from "@/lib/forms/persist";
import { newsletterSchema } from "@/lib/forms/schemas";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body");
  }

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return jsonFieldErrors(parsed.error);
  }

  try {
    await appendSubmission(
      "newsletter",
      parsed.data as unknown as Record<string, unknown>,
    );
  } catch (e) {
    console.error("[forms/newsletter] persist", e);
    return jsonError("Could not save your subscription. Please try again.", 500);
  }

  await notifyInbox(
    "Newsletter signup (CNF website)",
    `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}`,
  ).catch(() => {});

  return jsonOk();
}
