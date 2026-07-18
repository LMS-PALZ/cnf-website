export type BankDetailRow = {
    label: string;
    value: string;
    copyable?: boolean;
};

export type GiveActionKind = "outline" | "bank-card";

export type GiveOption = {
    id: string;
    title: string;
    description: string;
    action: GiveActionKind;
    ctaLabel?: string;
    bankRows?: BankDetailRow[];
};

export const giveOptions: GiveOption[] = [
    {
        id: "bank-ngn",
        title: "Naira Bank Transfer",
        description:
            "Transfer in Nigerian naira using the details below. Thank you",
        action: "bank-card",
        bankRows: [
            { label: "Bank", value: "Zenith Bank" },
            { label: "Account Number", value: "1310103551", copyable: true },
            { label: "Account Name", value: "Chiggy Foundation for Opportunity" },
        ],
    },
    {
        id: "bank-usd",
        title: "USD Bank Transfer",
        description:
            "Transfer in US dollars using the details below. Thank you",
        action: "bank-card",
        bankRows: [
            { label: "Bank", value: "Providus Bank USD" },
            { label: "Account Number", value: "1305291764", copyable: true },
            { label: "Swift Code", value: "UMPLNGLA", copyable: true },
            { label: "Account Name", value: "Chiggy Foundation for Opportunity" },
        ],
    },
    {
        id: "abroad",
        title: "Giving From Abroad",
        description:
            "Based outside Nigeria? You can still give directly to CFO. Reach out to us and we will provide the most convenient payment option for your location.",
        action: "outline",
        ctaLabel: "Contact Us to Give",
    },
];
