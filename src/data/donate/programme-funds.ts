import type { PillarTheme } from "@/data/our-work/pillars";
export type ProgrammeFundCard = {
    id: string;
    pillarLabel: string;
    theme: PillarTheme;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
};
export const programmeFunds: ProgrammeFundCard[] = [
    {
        id: "skills",
        pillarLabel: "Pillar one",
        theme: "skills",
        title: "Economic Empowerment",
        description: "Funds training materials, facilitator fees, internship placement support, and the Total Man Module for cohorts of young Nigerians aged 15 to 30.",
        imageSrc: "/assets/ourWorkImgs/skillaqc.jpeg",
        imageAlt: "Young people in a Skill Scale-Up training session",
    },
    {
        id: "education",
        pillarLabel: "Pillar two",
        theme: "education",
        title: "Education",
        description: "Covers school re-enrolment fees, WAEC and NECO exam costs, textbooks and learning materials, and civic education workshops in partner schools.",
        imageSrc: "/assets/ourWorkImgs/education%20outreach.jpg",
        imageAlt: "Education outreach with students in partner schools",
    },
    {
        id: "humanitarian",
        pillarLabel: "Pillar three",
        theme: "humanitarian",
        title: "Humanitarian Aid",
        description: "Funds food relief packages, community medical missions, hospital bill offsets, and maternal and child health support across nine communities.",
        imageSrc: "/assets/ourWorkImgs/community%20aid.jpg",
        imageAlt: "Community aid and humanitarian outreach",
    },
];
