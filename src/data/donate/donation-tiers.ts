export type DonationTierVariant = "soft-green" | "soft-gold" | "solid-green" | "solid-dark";
export type DonationTier = {
    id: string;
    variant: DonationTierVariant;
    amount: string;
    /** Whole naira for Korapay; omit for custom amount tiers */
    amountNaira?: number;
    amountSubtitle?: string;
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
        amount: "\u20A650,000",
        amountNaira: 50_000,
        title: "The Starter",
        description: "Help one student or family take a real step forward.",
        bullets: [
            "Covers a student\u2019s exam registration fee",
            "Provides essential food items for a family in need",
            "Funds basic medications for a health outreach",
        ],
        ctaLabel: "Give \u20A650,000",
    },
    {
        id: "builder",
        variant: "soft-gold",
        amount: "\u20A6150,000",
        amountNaira: 150_000,
        title: "The Builder",
        description: "Strengthens a classroom or community\u2019s foundation.",
        bullets: [
            "Subsidises a term\u2019s tuition for a STAR in training",
            "Equips a class with basic training resources",
            "Supports a family\u2019s essential needs for weeks at a time",
            "Extends care to more families during a health outreach",
        ],
        ctaLabel: "Give \u20A6150,000",
        badge: "Most popular",
    },
    {
        id: "changemaker",
        variant: "solid-green",
        amount: "\u20A6200,000",
        amountNaira: 200_000,
        title: "The Changemaker",
        description: "Carry an entire journey or community forward.",
        bullets: [
            "Significantly subsidises a STAR\u2019s full SSU training programme",
            "Helps equip a full cohort with basic training resources",
            "Significantly supports a large-scale outreach reaching dozens of families",
            "Funds mentorship that shapes character, not just skill",
        ],
        ctaLabel: "Give \u20A6200,000",
    },
    {
        id: "custom",
        variant: "solid-dark",
        amount: "Custom",
        title: "Your Own Impact",
        description: "You decide the amount. We\u2019ll make sure it counts.",
        bullets: [
            "Every contribution goes directly into our programmes",
            "No minimum amount required",
            "Secure payment via Korapay",
        ],
        ctaLabel: "Choose My Amount",
    },
];
