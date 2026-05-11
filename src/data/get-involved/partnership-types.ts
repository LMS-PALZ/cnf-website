export type PartnershipType = {
    id: string;
    title: string;
    description: string;
};
export const partnershipTypes: PartnershipType[] = [
    {
        id: "financial",
        title: "Financial Partnership",
        description: "Co-fund a specific programme, sponsor an SSU cohort, or provide grant support that directly scales our reach to more communities.",
    },
    {
        id: "csr",
        title: "Corporate Social Responsibility (CSR)",
        description: "Align your company's CSR mandate with proven, measurable impact. We provide full reporting, visibility, and outcome documentation.",
    },
    {
        id: "programme",
        title: "Programme Partnership",
        description: "Co-design and deliver a specific project, from mentorship sessions to medical missions, combining your expertise with our community access.",
    },
    {
        id: "in-kind",
        title: "In-Kind Support",
        description: "Donate equipment, training materials, food items, medications, or services that directly fuel our programme delivery on the ground.",
    },
];
