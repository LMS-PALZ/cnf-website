export type ResendFormTemplateKey =
    | "partnership"
    | "contact"
    | "volunteer"
    | "careers-profile"
    | "donate-intent"
    | "newsletter"
    | "careers-newsletter";

const TEMPLATE_ENV_KEYS: Record<ResendFormTemplateKey, string> = {
    partnership: "RESEND_TEMPLATE_PARTNERSHIP",
    contact: "RESEND_TEMPLATE_CONTACT",
    volunteer: "RESEND_TEMPLATE_VOLUNTEER",
    "careers-profile": "RESEND_TEMPLATE_CAREERS_PROFILE",
    "donate-intent": "RESEND_TEMPLATE_DONATE_INTENT",
    newsletter: "RESEND_TEMPLATE_NEWSLETTER",
    "careers-newsletter": "RESEND_TEMPLATE_CAREERS_NEWSLETTER",
};

export function getResendTemplateId(key: ResendFormTemplateKey): string | undefined {
    return process.env[TEMPLATE_ENV_KEYS[key]]?.trim() || undefined;
}
