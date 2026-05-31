import type { ProjectImage } from "./project-image-catalog";
import {
    aggsIwdOutreachProjectImages,
    civicAwarenessProjectImages,
    cohort1ProjectImages,
    cohort2GraduationProjectImages,
    cohort3ProjectImages,
    festiveFoodReliefProjectImages,
    jikwoyiDrugDonationProjectImages,
    kujeHealthOutreachProjectImages,
    kuchingoroOutreachProjectImages,
    manguOutreachProjectImages,
    projectWashKeffiProjectImages,
    projectImageCatalog as img,
    stPhillipsAcademyProjectImages,
} from "./project-image-catalog";

export type ProjectFilter = "all" | "skills" | "education" | "humanitarian" | "civic";
export type ProjectTheme = "skills" | "education" | "humanitarian" | "civic";
export type { ProjectImage } from "./project-image-catalog";

export type ProjectItem = {
    id: string;
    pillar: Exclude<ProjectFilter, "all">;
    theme: ProjectTheme;
    badge: string;
    title: string;
    description: string;
    mediaLabel: string;
    /** Up to 8 photos per project - edit this array when final event images are ready */
    images: ProjectImage[];
    href?: string;
};

export const filterTabs: {
    id: ProjectFilter;
    label: string;
}[] = [
    { id: "all", label: "All projects" },
    { id: "skills", label: "Skill Development" },
    { id: "education", label: "Education" },
    { id: "humanitarian", label: "Humanitarian Aid" },
    { id: "civic", label: "Civic Awareness" },
];

export const projects: ProjectItem[] = [
    {
        id: "ssu-cohort-3",
        pillar: "skills",
        theme: "skills",
        badge: "Skill Development",
        title: "Skill Scale-Up Cohort 3 Tech Batch Begins",
        description:
            "A new chapter of impact, CNF opens its third cohort of the SSU Programme, welcoming the next generation of digital and vocational trainees.",
        mediaLabel: "SSU Cohort 3 tech batch",
        images: cohort3ProjectImages,
        href: "/programmes/skill-scale-up",
    },
    {
        id: "ssu-cohort-2-graduation",
        pillar: "skills",
        theme: "skills",
        badge: "Skill Development",
        title: "Graduation of CNF's Second Skill Scale-Up Cohort",
        description:
            "Celebrating another set of young Nigerians who completed training and are now equipped to earn, lead, and give back.",
        mediaLabel: "Cohort 2 graduation",
        images: cohort2GraduationProjectImages,
    },
    {
        id: "ssu-launch",
        pillar: "skills",
        theme: "skills",
        badge: "Skill Development",
        title: "CNF Launches the Skill Scale-Up Programme",
        description:
            "The flagship SSU Programme launches in Abuja, CNF's boldest commitment to equipping underserved youth with skills for the modern economy.",
        mediaLabel: "SSU Cohort 1 launch",
        images: cohort1ProjectImages,
        href: "/programmes/skill-scale-up",
    },
    {
        id: "iwd-aggs-gudu",
        pillar: "education",
        theme: "education",
        badge: "Education",
        title: "International Women's Day at AGGS Gudu, Abuja",
        description:
            "CNF marks International Women's Day by engaging female students at AGGS Gudu with sessions on leadership, confidence, and civic awareness.",
        mediaLabel: "AGGS Gudu IWD outreach",
        images: aggsIwdOutreachProjectImages,
    },
    {
        id: "st-phillips-academy",
        pillar: "education",
        theme: "education",
        badge: "Education",
        title: "Educational Outreach at St. Phillips Academy",
        description:
            "CNF covers outstanding school fees and exam costs for deserving students at St. Phillips Academy, removing financial barriers to education.",
        mediaLabel: "St. Phillips Academy outreach",
        images: stPhillipsAcademyProjectImages,
    },
    {
        id: "mangu-food-relief",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Humanitarian Aid",
        title: "Food Relief Outreach in Mangu, Plateau State",
        description:
            "Essential food items distributed to underserved families in Mangu, Plateau State, part of CNF's ongoing commitment to communities across Nigeria.",
        mediaLabel: "Mangu food relief outreach",
        images: manguOutreachProjectImages,
    },
    {
        id: "gonin-gora-festive",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Humanitarian Aid",
        title: "Festive Food Relief Outreach, Gonin Gora, Kaduna",
        description:
            "CNF brightens the festive season for families in Gonin Gora, Kaduna State, ensuring no one goes hungry during the holidays.",
        mediaLabel: "Gonin Gora festive food relief",
        images: festiveFoodReliefProjectImages,
    },
    {
        id: "jikwoyi-drug-donation",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Healthcare",
        title: "Drug Donations & Healthcare Access in Jikwoyi, Abuja",
        description:
            "CNF donates essential medications to a community clinic in Jikwoyi, Abuja, improving access to basic healthcare for hundreds of residents.",
        mediaLabel: "Jikwoyi drug donation outreach",
        images: jikwoyiDrugDonationProjectImages,
    },
    {
        id: "kuje-health-outreach",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Healthcare",
        title: "Health Outreach, Whitedove & Kuje General Hospital",
        description:
            "CNF visits patients at Kuje General Hospital, offsetting outstanding bills and bringing dignity to those who could not afford care.",
        mediaLabel: "Kuje & Whitedove health outreach",
        images: kujeHealthOutreachProjectImages,
    },
    {
        id: "heem-kuchingoro",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Humanitarian Aid",
        title: "Outreach at New Kuchingoro IDP Camp",
        description:
            "Free medical services, scholarships, and food relief delivered to displaced families at New Kuchingoro IDP Camp, meeting people in one of their most difficult moments.",
        mediaLabel: "New Kuchingoro IDP Camp outreach",
        images: kuchingoroOutreachProjectImages,
    },
    {
        id: "wash-secondary-schools",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Healthcare",
        title: "Project WASH, Hygiene Education in Secondary Schools",
        description:
            "CNF promotes hygiene and sanitation awareness among secondary school students, because health education is preventive healthcare.",
        mediaLabel: "Project WASH, Keffi",
        images: projectWashKeffiProjectImages,
    },
    {
        id: "civic-awareness",
        pillar: "civic",
        theme: "civic",
        badge: "Civic Awareness",
        title: "Civic Awareness",
        description:
            "The flagship SSU program educates young cohorts on the importance of civic awareness and civic literacy.",
        mediaLabel: "Civic Awareness programme",
        images: civicAwarenessProjectImages,
        href: "/programmes/skill-scale-up",
    },
];
