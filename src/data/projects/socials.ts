import type { IconRegistryKey } from "@/components/ui/iconRegistry";
export type SocialPlatform = {
    id: "instagram" | "youtube" | "x-twitter" | "linkedin";
    label: string;
    href: string;
    iconKey: IconRegistryKey;
    accent: "instagram" | "youtube" | "x-twitter" | "linkedin";
};
export const socials: SocialPlatform[] = [
    {
        id: "instagram",
        label: "Instagram",
        href: "#",
        iconKey: "instagram",
        accent: "instagram",
    },
    {
        id: "youtube",
        label: "YouTube",
        href: "#",
        iconKey: "youtube",
        accent: "youtube",
    },
    {
        id: "x-twitter",
        label: "X (Twitter)",
        href: "#",
        iconKey: "x-twitter",
        accent: "x-twitter",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "#",
        iconKey: "linkedin",
        accent: "linkedin",
    },
];
