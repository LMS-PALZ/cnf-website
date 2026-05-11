export type GiveActionKind = "primary" | "outline" | "bank-card";
export type GiveOption = {
    id: string;
    title: string;
    description: string;
    action: GiveActionKind;
    ctaLabel?: string;
    ctaHref?: string;
};
export const giveOptions: GiveOption[] = [
    {
        id: "online",
        title: "Give Online",
        description: "The fastest and easiest way. Click below to donate securely via Korapay, card, bank transfer, or USSD all accepted.",
        action: "primary",
        ctaLabel: "Donate via Korapay",
    },
    {
        id: "bank",
        title: "Bank Transfer",
        description: "Prefer to give directly? Use the account details below. Please send your name and \u201CDonation\u201D as the reference so we can acknowledge your gift.",
        action: "bank-card",
    },
    {
        id: "abroad",
        title: "Giving From Abroad",
        description: "Based outside Nigeria? You can still give directly to CNF. Reach out to us and we will provide the most convenient payment option for your location.",
        action: "outline",
        ctaLabel: "Contact Us to Give",
    },
];
