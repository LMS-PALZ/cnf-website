import type { PillarId } from "@/constants/pillars";

const PILLARS_ONE_MISSION_BASE = "/assets/3%20Pillars%20One%20Mission%20";

export type HomePillar = {
    id: PillarId;
    badge: string;
    badgeTone: "skills" | "education" | "humanitarian";
    title: string;
    description: string;
    href: string;
    /** Photo for the card header (optional; falls back to solid pillar colour). */
    heroImageSrc?: string;
};

export const homePillars: HomePillar[] = [
    {
        id: "skills",
        badge: "Skills development",
        badgeTone: "skills",
        title: "Skill Scale-Up & Mentorship",
        description: "Cohort-based training for Nigerian youth, paired with mentorship, internship placement, and alumni support to bridge training and real-world opportunity.",
        href: "/our-work#skills",
        heroImageSrc: `${PILLARS_ONE_MISSION_BASE}/skill%20scale%20up%20and%20community.jpeg`,
    },
    {
        id: "education",
        badge: "Education",
        badgeTone: "education",
        title: "Access, Equity & Civic Learning",
        description: "We re-enrol out-of-school children, cover exam fees, and build civic awareness, laying the groundwork for educated, engaged citizens.",
        href: "/our-work#education",
        heroImageSrc: `${PILLARS_ONE_MISSION_BASE}/education.jpg`,
    },
    {
        id: "humanitarian",
        badge: "Humanitarian aid",
        badgeTone: "humanitarian",
        title: "Relief, Health & Community Care",
        description: "Food, medical care, and emergency support, delivered directly to underserved families and communities when they need it most.",
        href: "/our-work#humanitarian",
        heroImageSrc: `${PILLARS_ONE_MISSION_BASE}/relief%20health%20and%20community.JPG`,
    },
];
