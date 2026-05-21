export type JoinOption = {
    id: "donate" | "partner" | "volunteer";
    title: string;
    description: string;
    ctaLabel: string;
    href: string;
    opensPayment?: boolean;
};
export const joinOptions: JoinOption[] = [
    {
        id: "donate",
        title: "Donate",
        description: "Your financial contribution directly funds our programmes, from SSU training kits to food relief packages and medical outreaches.",
        ctaLabel: "Give now",
        href: "/donate",
        opensPayment: true,
    },
    {
        id: "partner",
        title: "Partner with us",
        description: "Whether you're a business, institution, or community leader, strategic partnerships help us scale our impact further and faster.",
        ctaLabel: "Become a partner",
        href: "/get-involved/partnership",
    },
    {
        id: "volunteer",
        title: "Volunteer",
        description: "Give your time and skills. From programme delivery to event support to communications, there's a role for every willing hand.",
        ctaLabel: "Volunteer",
        href: "/get-involved/volunteer",
    },
];
