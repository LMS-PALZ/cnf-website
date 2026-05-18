export type SocialLinkId = "tiktok" | "instagram" | "x" | "youtube" | "linkedin";

export type SiteSocialLink = {
    id: SocialLinkId;
    label: string;
    href: string;
};

/** Canonical social URLs (footer, projects page, etc.). */
export const siteSocialLinks: readonly SiteSocialLink[] = [
    {
        id: "tiktok",
        label: "TikTok",
        href: "https://www.tiktok.com/@chiggy_nsofor_foundation",
    },
    {
        id: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/chiggynsoforfoundation/",
    },
    {
        id: "x",
        label: "X",
        href: "https://x.com/ChiggyNsoforFdn",
    },
    {
        id: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/@chiggynsoforfoundation",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/chiggynsoforfoundation/",
    },
];
