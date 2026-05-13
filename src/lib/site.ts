export const site = {
    name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Chiggy Nsofor Foundation",
    shortName: "CNF",
    tagline: "Skills, Education & Humanitarian Aid",
    description: "A Nigerian nonprofit advancing skills, education, and humanitarian aid in communities across Nigeria.",
    footerTagline: "Providing Opportunities, Impacting Lives.\nA Nigerian NGO building a future where no underserved person is left behind.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@chiggynsoforfoundation.org",
    partnershipsEmail: "partnerships@chiggynsoforfoundation.org",
    phone: "+234 903 459 9227",
    address: "16b Vaal Street, Maitama, Abuja",
    registrationLine: "CAC No. 7511818",
} as const;
export const donateConfig = {
    korapayUrl: process.env.NEXT_PUBLIC_KORAPAY_URL ?? "#",
    bank: {
        accountName: process.env.NEXT_PUBLIC_DONATE_ACCOUNT_NAME ?? "Chiggy Nsofor Foundation",
        accountNumber: process.env.NEXT_PUBLIC_DONATE_ACCOUNT_NUMBER ?? "Add Account No.",
        bankName: process.env.NEXT_PUBLIC_DONATE_BANK_NAME ?? "Add Bank Name",
    },
} as const;
export type NavItem = {
    href: string;
    label: string;
};
export const mainNav: NavItem[] = [
    { href: "/about", label: "About Us" },
    { href: "/our-work", label: "Our Work" },
    { href: "/programmes/skill-scale-up", label: "SSU Programme" },
    { href: "/projects", label: "Projects" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/news", label: "News" },
];
