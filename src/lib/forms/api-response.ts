import { ZodError } from "zod";
import { NextResponse } from "next/server";

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false as const, error: message }, { status });
}

export function jsonFieldErrors(zodError: ZodError) {
  const flat = zodError.flatten();
  return NextResponse.json(
    {
      ok: false as const,
      error: "Validation failed",
      fieldErrors: flat.fieldErrors as Record<string, string[] | undefined>,
    },
    { status: 400 },
  );
}

export function jsonOk() {
  return NextResponse.json({ ok: true as const });
}
