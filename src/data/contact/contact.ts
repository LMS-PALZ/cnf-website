import type { SocialLinkId } from "@/data/social-links";
import { site } from "@/lib/site";

/** Social platforms shown on the contact page (matches design). */
export const contactSocialIds: SocialLinkId[] = [
    "instagram",
    "x",
    "linkedin",
    "youtube",
];

export const contactInfo = {
    addressLine: "No. 16B, Vaal Street, Maitama, Abuja",
    phone: site.phone,
    email: site.contactEmail,
    officeHours: [
        { label: "Mon – Fri", value: "9 AM - 5 PM" },
        { label: "Sat – Sun", value: "Closed" },
    ],
} as const;

/** Google Maps embed for CNF office (16B Vaal St, Maitama, Abuja). */
export const contactMapEmbedUrl =
    "https://maps.google.com/maps?q=16B+Vaal+St,+Maitama,+Abuja,+904101,+Nigeria&hl=en&z=16&output=embed";
