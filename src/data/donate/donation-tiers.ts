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
        amountSubtitle: "\u2248$40",
        title: "The Starter",
        description: "Your gift could:",
        bullets: [
            "Cover transportation for 1 Skill Scale-Up student during training for 6 weeks",
            "Kit 1 child with school uniform, school bag, and learning materials",
            "Or provide emergency food support for 1 underserved family of 5 for 1 week",
        ],
        ctaLabel: "Give \u20A650,000",
    },
    {
        id: "builder",
        variant: "soft-gold",
        amount: "\u20A6100,000",
        amountNaira: 100_000,
        amountSubtitle: "\u2248$80",
        title: "The Builder",
        description: "Your gift could:",
        bullets: [
            "Cover 25% of the cost of training 1 Skill Scale-Up student",
            "Or cover 1 student's SSCE examination registration fee",
            "Or provide menstrual hygiene support for 6 underserved girls",
        ],
        ctaLabel: "Give \u20A6100,000",
        badge: "Most popular",
    },
    {
        id: "changemaker",
        variant: "solid-green",
        amount: "\u20A6400,000",
        amountNaira: 400_000,
        amountSubtitle: "\u2248$320",
        title: "The Changemaker",
        description: "Your gift could:",
        bullets: [
            "Fully sponsor 1 Skill Scale-Up student from training to graduation",
            "Or keep 10 underserved children in school for 1 academic year by covering their school fees",
            "Or support 4 safe deliveries by providing essential maternal and newborn care",
        ],
        ctaLabel: "Give \u20A6400,000",
    },
    {
        id: "custom",
        variant: "solid-dark",
        amount: "Custom",
        title: "Your Own Impact",
        description: "Give any amount. Change lives your way. Your gift could:",
        bullets: [
            "Fund a small, shared, or full Skill Scale-Up sponsorship",
            "Or support education at any level, from school supplies to scholarships",
            "Or strengthen health and humanitarian programmes serving underserved families and communities",
        ],
        ctaLabel: "Choose My Amount",
    },
];
