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
    imageSrc?: string;
    imageAlt?: string;
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
        imageSrc: "/assets/ourWorkImgs/skillaqc.jpeg",
        imageAlt: "Skill Scale-Up Cohort 3 training session",
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
        imageSrc: "/assets/carouselImgs/3M8A8846.JPG",
        imageAlt: "Skill Scale-Up Cohort 2 graduation",
    },
    {
        id: "ssu-launch",
        pillar: "skills",
        theme: "skills",
        badge: "Skill Development",
        title: "CNF Launches the Skill Scale-Up Programme",
        description: "The flagship SSU Programme launches in Abuja, CNF's boldest commitment to equipping underserved youth with skills for the modern economy.",
        mediaLabel: "Add SSU launch photo here",
        imageSrc: "/assets/carouselImgs/_Y4B0504.JPG",
        imageAlt: "CNF Skill Scale-Up Programme launch",
    },
    {
        id: "iwd-aggs-gudu",
        pillar: "education",
        theme: "education",
        badge: "Education",
        title: "International Women's Day at AGGS Gudu, Abuja",
        description: "CNF marks International Women's Day by engaging female students at AGGS Gudu with sessions on leadership, confidence, and civic awareness.",
        mediaLabel: "Add IWD outreach photo here",
        imageSrc: "/assets/ourWorkImgs/education%20outreach.jpg",
        imageAlt: "International Women's Day outreach at AGGS Gudu",
    },
    {
        id: "st-phillips-academy",
        pillar: "education",
        theme: "education",
        badge: "Education",
        title: "Educational Outreach at St. Phillips Academy",
        description: "CNF covers outstanding school fees and exam costs for deserving students at St. Phillips Academy, removing financial barriers to education.",
        mediaLabel: "Add St. Phillips outreach photo here",
        imageSrc: "/assets/carouselImgs/DE8E3217-50A3-4574-BAA5-66B7E9974018_1_201_a.jpeg",
        imageAlt: "Educational outreach at St. Phillips Academy",
    },
    {
        id: "heem-medical-mission",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Humanitarian Aid & Healthcare",
        title: "Community Medical Mission",
        description: "Free medical services, financial empowerment, scholarships, and food relief delivered to some of Abuja's most underserved communities.",
        mediaLabel: "Add community medical mission photo here",
        imageSrc: "/assets/ourWorkImgs/community%20aid.jpg",
        imageAlt: "Community medical mission outreach",
    },
    {
        id: "mangu-food-relief",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Humanitarian Aid",
        title: "Food Relief Outreach in Mangu, Plateau State",
        description: "Essential food items distributed to underserved families in Mangu, Plateau State, part of CNF's ongoing commitment to communities across Nigeria.",
        mediaLabel: "Add Mangu outreach photo here",
        imageSrc: "/assets/carouselImgs/_Y4B0704.JPG",
        imageAlt: "Food relief outreach in Mangu, Plateau State",
    },
    {
        id: "gonin-gora-festive",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Humanitarian Aid",
        title: "Festive Food Relief Outreach, Gonin Gora, Kaduna",
        description: "CNF brightens the festive season for families in Gonin Gora, Kaduna State, ensuring no one goes hungry during the holidays.",
        mediaLabel: "Add Gonin Gora outreach photo here",
        imageSrc: "/assets/carouselImgs/3M8A8624.JPEG",
        imageAlt: "Festive food relief outreach in Gonin Gora, Kaduna",
    },
    {
        id: "jikwoyi-drug-donation",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Healthcare",
        title: "Drug Donations & Healthcare Access in Jikwoyi, Abuja",
        description: "CNF donates essential medications to a community clinic in Jikwoyi, Abuja, improving access to basic healthcare for hundreds of residents.",
        mediaLabel: "Add Jikwoyi outreach photo here",
        imageSrc: "/assets/carouselImgs/IMG_4340%203.JPG",
        imageAlt: "Drug donations in Jikwoyi, Abuja",
    },
    {
        id: "kuje-health-outreach",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Healthcare",
        title: "Health Outreach, Whitedove & Kuje General Hospital",
        description: "CNF visits patients at Kuje General Hospital, offsetting outstanding bills and bringing dignity to those who could not afford care.",
        mediaLabel: "Add Kuje outreach photo here",
        imageSrc: "/assets/howItStarted/howitstarted.jpg",
        imageAlt: "Health outreach at Kuje General Hospital",
    },
    {
        id: "heem-kuchingoro",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Humanitarian Aid & Healthcare",
        title: "Medical Outreach at New Kuchingoro IDP Camp",
        description: "Free medical services, scholarships, and food relief delivered to displaced families at New Kuchingoro IDP Camp, meeting people in one of their most difficult moments.",
        mediaLabel: "Add Kuchingoro outreach photo here",
        imageSrc: "/assets/carouselImgs/_Y4B0504.JPG",
        imageAlt: "Medical outreach at New Kuchingoro IDP Camp",
    },
    {
        id: "wash-secondary-schools",
        pillar: "humanitarian",
        theme: "humanitarian",
        badge: "Healthcare",
        title: "Project WASH, Hygiene Education in Secondary Schools",
        description: "CNF promotes hygiene and sanitation awareness among secondary school students, because health education is preventive healthcare.",
        mediaLabel: "Add Project WASH photo here",
        imageSrc: "/assets/ourWorkImgs/skillaqc.jpeg",
        imageAlt: "Project WASH hygiene education in secondary schools",
    },
];
