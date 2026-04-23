import { z } from "zod";

export const donateIntentSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(10, "Please add a short message (10+ characters)").max(5000),
  pledgeAmount: z.string().trim().max(40).optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, { message: "Consent is required to submit" }),
});

export const volunteerSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email"),
  city: z.string().trim().min(2, "City is required").max(120),
  skills: z.string().trim().min(2, "Tell us about your skills").max(2000),
  availability: z.string().trim().min(2, "Availability is required").max(2000),
  message: z.string().trim().min(10, "Please add a message (10+ characters)").max(5000),
});

export const careersInterestSchema = z.object({
  roleInterest: z.string().trim().min(2, "Role or area of interest is required").max(200),
  email: z.string().trim().email("Enter a valid email"),
  message: z.string().trim().max(4000).optional(),
});

export type DonateIntentInput = z.infer<typeof donateIntentSchema>;
export type VolunteerInput = z.infer<typeof volunteerSchema>;
export type CareersInterestInput = z.infer<typeof careersInterestSchema>;

/** Normalise optional string fields from JSON (empty string → undefined) */
export function emptyToUndefined(
  body: Record<string, unknown>,
  keys: string[],
): Record<string, unknown> {
  const out = { ...body };
  for (const key of keys) {
    const v = out[key];
    if (typeof v === "string" && v.trim() === "") {
      delete out[key];
    }
  }
  return out;
}
