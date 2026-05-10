import type { PillarId } from "@/constants/pillars";
export type HomePillar = {
    id: PillarId;
    badge: string;
    badgeTone: "skills" | "education" | "humanitarian";
    title: string;
    description: string;
    programmes: string[];
    href: string;
    iconKey: "tools" | "book" | "heart";
};
export const homePillars: HomePillar[] = [
    {
        id: "skills",
        badge: "Skills development",
        badgeTone: "skills",
        title: "Skill Scale-Up & Mentorship",
        description: "Free, cohort-based training for Nigerian youth, paired with mentorship, internship placement, and alumni support to bridge training and real-world opportunity.",
        programmes: [
            "Skill Scale-Up (SSU) Programme",
            "Quarterly Mentorship Programme",
            "Alumni & Job Placement Support",
        ],
        href: "/projects#skills",
        iconKey: "tools",
    },
    {
        id: "education",
        badge: "Education",
        badgeTone: "education",
        title: "Access, Equity & Civic Learning",
        description: "We re-enrol out-of-school children, cover exam fees, and build civic awareness, laying the groundwork for educated, engaged citizens.",
        programmes: [
            "Out-of-School Re-enrolment",
            "School Fees & Exam Support",
            "Civic Education Workshops",
        ],
        href: "/projects#education",
        iconKey: "book",
    },
    {
        id: "humanitarian",
        badge: "Humanitarian aid & healthcare",
        badgeTone: "humanitarian",
        title: "Relief, Health & Community Care",
        description: "Food, medical care, and emergency support, delivered directly to underserved families and communities when they need it most.",
        programmes: [
            "Food Relief & Festive Outreaches",
            "Project HEEM, Medical Missions",
            "Hospital Bill Support",
        ],
        href: "/projects#humanitarian",
        iconKey: "heart",
    },
];
