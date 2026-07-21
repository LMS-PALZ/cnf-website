export type SocialLinkId =
    | "instagram"
    | "facebook"
    | "linkedin"
    | "x"
    | "tiktok"
    | "youtube";

export type SiteSocialLink = {
    id: SocialLinkId;
    label: string;
    href: string;
};

/** Canonical social URLs (footer, projects page, etc.). */
export const siteSocialLinks: readonly SiteSocialLink[] = [
    {
        id: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/chiggyfoundation?igsh=M3k0dXJyb3BhYzQ5&utm_source=qr",
    },
    {
        id: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/share/1Ea3uvaM3Q/?mibextid=wwXIfr",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/chiggyfoundationforopportunity/",
    },
    {
        id: "x",
        label: "X",
        href: "https://x.com/chiggyfndn?s=11",
    },
    {
        id: "tiktok",
        label: "TikTok",
        href: "https://www.tiktok.com/@chiggy_foundation?_r=1&_t=ZS-986YPMHI6CK",
    },
    {
        id: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/@ChiggyFoundation",
    },
];
