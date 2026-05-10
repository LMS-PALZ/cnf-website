import type { IconRegistryKey } from "@/components/ui/iconRegistry";
export type ProjectFilter = "all" | "skills" | "education" | "humanitarian";
export type ProjectTheme = "skills" | "education" | "humanitarian";
export type ProjectItem = {
    id: string;
    pillar: Exclude<ProjectFilter, "all">;
    theme: ProjectTheme;
    badge: string;
    title: string;
    description: string;
    mediaLabel: string;
    iconKey: IconRegistryKey;
    href?: string;
};
export const filterTabs: {
    id: ProjectFilter;
    label: string;
}[] = [
    { id: "all", label: "All projects" },
    { id: "skills", label: "Skill Development" },
    { id: "education", label: "Education" },
    { id: "humanitarian", label: "Humanitarian Aid & Healthcare" },
];
export const projects: ProjectItem[] = [
    {
        id: "ssu-cohort-3",
        pillar: "skills",
        theme: "skills",
        badge: "Skill Development",
        title: "Skill Scale-Up Cohort 3 Tech Batch Begins",
        description: "A new chapter of impact, CNF opens its third cohort of the SSU Programme, welcoming the next generation of digital and vocational trainees.",
        mediaLabel: "Add SSU Cohort 3 photo here",
        iconKey: "tools",
        href: "/programmes/skill-scale-up",
    },
    {
        id: "ssu-cohort-2-graduation",
        pillar: "skills",
        theme: "skills",
        badge: "Skill Development",
        title: "Graduation of CNF's Second Skill Scale-Up Cohort",
        description: "Celebrating another set of young Nigerians who completed training and are now equipped to earn, lead, and give back.",
        mediaLabel: "Add Cohort 2 graduation photo here",
        iconKey: "graduation-cap",
    },
    {
        id: "ssu-launch",
        pillar: "skills",
        theme: "skills",
        badge: "Skill Development",
        title: "CNF Launches the Skill Scale-Up Programme",
        description: "The flagship SSU Programme launches in Abuja, CNF's boldest commitment to equipping underserved youth with skills for the modern economy.",
        mediaLabel: "Add SSU launch photo here",
        iconKey: "rocket",
    },
    {
        id: "iwd-aggs-gudu",
        pillar: "education",
        theme: "education",
        badge: "Education",
        title: "International Women's Day at AGGS Gudu, Abuja",
        description: "CNF marks International Women's Day by engaging female students at AGGS Gudu with sessions on leadership, confidence, and civic awareness.",
        mediaLabel: "Add IWD outreach photo here",
        iconKey: "book",
    },
    {
        id: "st-phillips-academy",
        pillar: "education",
        theme: "education",
        badge: "Education",
        title: "Educational Outreach at St. Phillips Academy",
        description: "CNF covers outstanding school fees and exam costs for deserving students at St. Phillips Academy, removing financial barriers to education.",
        mediaLabel: "Add St. Phillips outreach photo here",
        iconKey: "building",
    },
    {
        id: "heem-medical-mission",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Humanitarian Aid & Healthcare",
        title: "Project HEEM, Community Medical Mission",
        description: "Free medical services, financial empowerment, scholarships, and food relief delivered to some of Abuja's most underserved communities.",
        mediaLabel: "Add Project HEEM photo here",
        iconKey: "stethoscope",
    },
    {
        id: "mangu-food-relief",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Humanitarian Aid",
        title: "Food Relief Outreach in Mangu, Plateau State",
        description: "Essential food items distributed to underserved families in Mangu, Plateau State, part of CNF's ongoing commitment to communities across Nigeria.",
        mediaLabel: "Add Mangu outreach photo here",
        iconKey: "food",
    },
    {
        id: "gonin-gora-festive",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Humanitarian Aid",
        title: "Festive Food Relief Outreach, Gonin Gora, Kaduna",
        description: "CNF brightens the festive season for families in Gonin Gora, Kaduna State, ensuring no one goes hungry during the holidays.",
        mediaLabel: "Add Gonin Gora outreach photo here",
        iconKey: "heart",
    },
    {
        id: "jikwoyi-drug-donation",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Healthcare",
        title: "Drug Donations & Healthcare Access in Jikwoyi, Abuja",
        description: "CNF donates essential medications to a community clinic in Jikwoyi, Abuja, improving access to basic healthcare for hundreds of residents.",
        mediaLabel: "Add Jikwoyi outreach photo here",
        iconKey: "pill",
    },
    {
        id: "kuje-health-outreach",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Healthcare",
        title: "Health Outreach, Whitedove & Kuje General Hospital",
        description: "CNF visits patients at Kuje General Hospital, offsetting outstanding bills and bringing dignity to those who could not afford care.",
        mediaLabel: "Add Kuje outreach photo here",
        iconKey: "stethoscope",
    },
    {
        id: "heem-kuchingoro",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Humanitarian Aid & Healthcare",
        title: "Project HEEM at New Kuchingoro IDP Camp",
        description: "Free medical services, scholarships, and food relief delivered to displaced families at New Kuchingoro IDP Camp, meeting people in one of their most difficult moments.",
        mediaLabel: "Add Kuchingoro outreach photo here",
        iconKey: "heart",
    },
    {
        id: "wash-secondary-schools",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Healthcare",
        title: "Project WASH, Hygiene Education in Secondary Schools",
        description: "CNF promotes hygiene and sanitation awareness among secondary school students, because health education is preventive healthcare.",
        mediaLabel: "Add Project WASH photo here",
        iconKey: "droplet",
    },
];
