import { z } from "zod";
import { countries } from "@/data/countries";

const countryNames = new Set(countries.map((c) => c.name));

const optionalPhone = z
    .string()
    .trim()
    .max(40)
    .refine((val) => {
        if (!val) {
            return true;
        }

        return /^\+[1-9]\d{6,14}$/.test(val.replace(/\s/g, ""));
    }, { message: "Enter a valid phone number" })
    .transform((val) => val.replace(/\s/g, ""));

const partnershipCountry = z
    .string()
    .trim()
    .min(1, "Select a country")
    .max(80)
    .refine((name) => countryNames.has(name), { message: "Select a country" });
const nonEmpty = (label: string, max = 120) => z.string().trim().min(2, `${label} is required`).max(max);
const optionalText = (max = 200) => z
    .string()
    .trim()
    .max(max)
    .optional()
    .or(z.literal("").transform(() => undefined));
export const donateIntentSchema = z.object({
    name: nonEmpty("Name"),
    email: z.string().trim().email("Enter a valid email"),
    phone: optionalText(40),
    message: z
        .string()
        .trim()
        .min(10, "Please add a short message (10+ characters)")
        .max(5000),
    pledgeAmount: optionalText(40),
    consent: z
        .boolean()
        .refine((v) => v === true, { message: "Consent is required to submit" }),
});
export const partnershipPillarValues = [
    "skills",
    "education",
    "humanitarian",
    "all",
] as const;
export type PartnershipPillar = (typeof partnershipPillarValues)[number];
export const partnershipSchema = z.object({
    firstName: nonEmpty("First name"),
    lastName: nonEmpty("Last name"),
    email: z.string().trim().email("Enter a valid email"),
    phone: optionalPhone,
    organisation: nonEmpty("Organisation", 200),
    country: partnershipCountry,
    pillars: z
        .array(z.enum(partnershipPillarValues))
        .min(1, "Select at least one pillar"),
    message: z
        .string()
        .trim()
        .min(10, "Tell us a little about the partnership (10+ characters)")
        .max(5000),
});
export const volunteerAreaValues = [
    "joint-trainer",
    "mentor",
    "communications",
    "medical-outreach",
    "fieldwork-ssu",
    "administrative",
] as const;
export type VolunteerArea = (typeof volunteerAreaValues)[number];
export const idTypeValues = [
    "nin",
    "passport",
    "drivers-license",
    "voters-card",
] as const;
export const leadershipOpennessValues = ["yes", "maybe", "no"] as const;
export const yesNoValues = ["yes", "no"] as const;
export const volunteerSchema = z
    .object({
    firstName: nonEmpty("First name"),
    lastName: nonEmpty("Last name"),
    email: z.string().trim().email("Enter a valid email"),
    phone: optionalText(40),
    city: nonEmpty("City", 120),
    country: nonEmpty("Country", 80),
    volunteerArea: z.enum(volunteerAreaValues, {
        message: "Select an area",
    }),
    priorExperience: z.enum(yesNoValues, {
        message: "Please answer this question",
    }),
    priorOrganisation: optionalText(200),
    leadershipOpenness: z.enum(leadershipOpennessValues, {
        message: "Please answer this question",
    }),
    idType: z.enum(idTypeValues, { message: "Select an ID type" }),
})
    .refine((v) => v.priorExperience !== "yes" ||
    (v.priorOrganisation && v.priorOrganisation.length >= 2), {
    message: "Please tell us which organisation",
    path: ["priorOrganisation"],
});
export const careersNewsletterSchema = z.object({
    email: z.string().trim().email("Enter a valid email"),
});
export const newsletterSchema = z.object({
    name: nonEmpty("Name"),
    email: z.string().trim().email("Enter a valid email"),
});
export const contactSchema = z.object({
    name: nonEmpty("Name"),
    email: z.string().trim().email("Enter a valid email"),
    phone: nonEmpty("Phone", 40),
    subject: nonEmpty("Subject", 200),
    message: z
        .string()
        .trim()
        .min(10, "Please enter your message (10+ characters)")
        .max(5000),
});
export const careersExpertiseValues = [
    "programme-management",
    "operations",
    "finance",
    "communications",
    "design",
    "engineering",
    "data",
    "fundraising",
    "other",
] as const;
export const careersProfileSchema = z.object({
    firstName: nonEmpty("First name"),
    lastName: nonEmpty("Last name"),
    email: z.string().trim().email("Enter a valid email"),
    areaOfExpertise: z.enum(careersExpertiseValues, {
        message: "Select an area of expertise",
    }),
    briefIntroduction: z
        .string()
        .trim()
        .min(10, "Please tell us a little about yourself (10+ characters)")
        .max(2000),
});
export type DonateIntentInput = z.infer<typeof donateIntentSchema>;
export type PartnershipInput = z.infer<typeof partnershipSchema>;
export type VolunteerInput = z.infer<typeof volunteerSchema>;
export type CareersNewsletterInput = z.infer<typeof careersNewsletterSchema>;
export type CareersProfileInput = z.infer<typeof careersProfileSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export function emptyToUndefined(body: Record<string, unknown>, keys: string[]): Record<string, unknown> {
    const out = { ...body };
    for (const key of keys) {
        const v = out[key];
        if (typeof v === "string" && v.trim() === "") {
            delete out[key];
        }
    }
    return out;
}
