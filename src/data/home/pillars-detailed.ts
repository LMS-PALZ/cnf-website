import type { PillarId } from "@/constants/pillars";

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
        description: "Free, cohort-based training for Nigerian youth, paired with mentorship, internship placement, and alumni support to bridge training and real-world opportunity.",
        href: "/our-work#skills",
        heroImageSrc: "/assets/ourWorkImgs/skillaqc.jpeg",
    },
    {
        id: "education",
        badge: "Education",
        badgeTone: "education",
        title: "Access, Equity & Civic Learning",
        description: "We re-enrol out-of-school children, cover exam fees, and build civic awareness, laying the groundwork for educated, engaged citizens.",
        href: "/our-work#education",
        heroImageSrc: "/assets/ourWorkImgs/education%20outreach.jpg",
    },
    {
        id: "humanitarian",
        badge: "Humanitarian aid & healthcare",
        badgeTone: "humanitarian",
        title: "Relief, Health & Community Care",
        description: "Food, medical care, and emergency support, delivered directly to underserved families and communities when they need it most.",
        href: "/our-work#humanitarian",
        heroImageSrc: "/assets/ourWorkImgs/community%20aid.jpg",
    },
];
