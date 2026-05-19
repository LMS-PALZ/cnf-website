export type DonationTierVariant = "soft-green" | "soft-gold" | "solid-green" | "solid-dark";
export type DonationTier = {
    id: string;
    variant: DonationTierVariant;
    amount: string;
    /** Whole naira for Korapay; omit for custom amount tiers */
    amountNaira?: number;
    amountSubtitle: string;
    title: string;
    description: string;
    bullets: string[];
    ctaLabel: string;
    badge?: string;
};
export const donationTiers: DonationTier[] = [
    {
        id: "starter",
        variant: "soft-green",
        amount: "\u20A610,000",
        amountNaira: 10_000,
        amountSubtitle: "One-time gift",
        title: "The Starter",
        description: "A meaningful contribution that directly reaches a family or student in need.",
        bullets: [
            "Covers a student\u2019s exam registration fees",
            "Provides essential food items for one family",
            "Funds basic medications for a health outreach",
        ],
        ctaLabel: "Give \u20A610,000",
    },
    {
        id: "builder",
        variant: "soft-gold",
        amount: "\u20A650,000",
        amountNaira: 50_000,
        amountSubtitle: "One-time gift",
        title: "The Builder",
        description: "A significant contribution that funds training materials and programme delivery.",
        bullets: [
            "Covers one SSU trainee\u2019s full programme kit",
            "Funds a full food relief package for 5 families",
            "Supports a child\u2019s school fees for one term",
        ],
        ctaLabel: "Give \u20A650,000",
        badge: "Most popular",
    },
    {
        id: "champion",
        variant: "solid-green",
        amount: "\u20A6150,000",
        amountNaira: 150_000,
        amountSubtitle: "One-time gift",
        title: "The Champion",
        description: "A transformative gift that helps scale our programmes to reach more communities.",
        bullets: [
            "Sponsors an SSU graduate\u2019s post-training support",
            "Funds a full community health outreach session",
            "Covers a full scholarship for one student",
        ],
        ctaLabel: "Give \u20A6150,000",
    },
    {
        id: "custom",
        variant: "solid-dark",
        amount: "Custom",
        amountSubtitle: "Any amount",
        title: "Your Own Amount",
        description: "Every gift \u2014 no matter the size \u2014 contributes to something real. Give what you can.",
        bullets: [
            "Any amount goes directly to our programmes",
            "No minimum required",
            "Secure payment via Korapay",
        ],
        ctaLabel: "Choose My Amount",
    },
];
