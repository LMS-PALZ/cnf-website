export type SocialPlatform = {
    id: "instagram" | "youtube" | "x-twitter" | "linkedin";
    label: string;
    href: string;
    accent: "instagram" | "youtube" | "x-twitter" | "linkedin";
};
export const socials: SocialPlatform[] = [
    {
        id: "instagram",
        label: "Instagram",
        href: "#",
        accent: "instagram",
    },
    {
        id: "youtube",
        label: "YouTube",
        href: "#",
        accent: "youtube",
    },
    {
        id: "x-twitter",
        label: "X (Twitter)",
        href: "#",
        accent: "x-twitter",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "#",
        accent: "linkedin",
    },
];
