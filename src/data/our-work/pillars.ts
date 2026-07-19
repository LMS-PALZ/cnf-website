export type PillarTheme = "skills" | "education" | "humanitarian";
export type PillarFeature = {
    title: string;
    description: string;
};
export type PillarSmallStat = {
    value: string;
    label: string;
};
export type PillarBlockData = {
    id: string;
    pillarLabel: string;
    theme: PillarTheme;
    heading: string;
    subheading: string;
    lead: string;
    body: string | readonly string[];
    features: PillarFeature[];
    cta: {
        label: string;
        href: string;
    };
    secondaryCta?: {
        label: string;
        href: string;
    };
    mediaLabel: string;
    /** Hero photo for the media card (Our Work pillars only). */
    heroImageSrc?: string;
    smallStats: PillarSmallStat[];
    reversed?: boolean;
};
export const ourWorkPillars: PillarBlockData[] = [
    {
        id: "skills",
        pillarLabel: "Pillar one",
        theme: "skills",
        heading: "Economic Empowerment",
        subheading: "Mentorship & Skill Scale-Up",
        lead: "Our flagship Skill Scale Up (SSU) Programme is a fully funded scholarship that equips underserved Nigerian youth aged 15 to 30 with practical, future ready skills, and the support to turn those skills into real income.",
        body: [
            "SSU exists for the young people the economy has overlooked: school leavers without work, graduates without digital skills, young women without income. Over 80% of Nigerian graduates enter the workforce without the digital skills today's economy demands, and for underserved youth the cost of quality training puts it permanently out of reach. SSU removes that barrier. Every learner's training is fully covered by the foundation. Our in person programme serves the most underserved, with a ₦10,000 application fee that is waived for anyone who cannot afford it, so no one is ever turned away. Our online track carries a one time application fee of ₦20,000. Training is delivered virtually through our digital learning platform and physically at our hub, reaching young Nigerians across the country.",
            "This is economic empowerment, not just training. Built around both technical and character development, SSU runs three core tracks, and its commitment goes beyond the classroom. Every graduate joins our alumni mentorship network, and our most exceptional graduates, those who show real commitment and excel, earn internship placements, startup kits, and startup support, with their progress tracked after they receive it, because a skill only changes a life when it becomes an income.",
            "At SSU, our graduates do not just learn. They earn.",
        ],
        features: [
            {
                title: "Digital & Tech Track (Remote & On-site)",
                description: "AI-assisted coding, virtual assistant, prompt engineering, data analysis, web development, digital marketing, graphic design, content creation.",
            },
            {
                title: "Vocational Skills Track (Fully on-site)",
                description: "Catering, photography, hair styling, makeup artistry, videography, and more.",
            },
            {
                title: "Total Man Mentorship (Core, Remote, On-site)",
                description: "Civic learning, financial literacy, leadership, mentorship, and entrepreneurship.",
            },
            {
                title: "Post-Training Support",
                description: "Alumni peer mentorship for every graduate. Internship placements, startup kits, and startup support awarded to exceptional graduates who show commitment and excel, with progress tracked after the award.",
            },
        ],
        cta: { label: "See more about SSU", href: "/programmes/skill-scale-up" },
        secondaryCta: { label: "See us in action", href: "/projects" },
        mediaLabel: "SSU training and skills development",
        heroImageSrc: "/assets/ourWorkImgs/skill1.JPEG",
        smallStats: [
            { value: "74", label: "Youth enrolled across 3 cohorts" },
            { value: "86%", label: "Completion rate (64 graduates)" },
            { value: "47%", label: "Of graduates now earning" },
            { value: "60%", label: "Women among graduates" },
        ],
    },
    {
        id: "education",
        pillarLabel: "Pillar two",
        theme: "education",
        heading: "Education",
        subheading: "Access & Equity",
        lead: "Education is the foundation of everything else. For children in underserved communities, financial barriers too often make it an impossible dream, CFO works to change that.",
        body: "Across Nigeria, thousands of children are out of school, not because they lack ability or ambition, but because their families cannot afford fees, uniforms, or exam costs. CFO's Education pillar removes these barriers directly: enrolling out-of-school children in secondary schools, tertiary institutions, covering school fees and examination costs, distributing academic resources, and delivering civic education workshops that build engaged, aware citizens. We believe that every child who gets back into a classroom is one less child left behind, and one more future leader the country can count on.",
        features: [
            {
                title: "Out-of-School Re-enrolment",
                description: "Three-year secondary school enrolment for children excluded due to financial constraints.",
            },
            {
                title: "School Fees & Examination Support",
                description: "Direct payment of outstanding fees, WAEC, NECO, and other examination costs.",
            },
            {
                title: "Academic Resources Distribution",
                description: "Textbooks, stationery, and learning materials shared across partner schools.",
            },
            {
                title: "Girls' Sessions & Learning Support",
                description: "Sessions that build self belief, goal setting, and ambition, with a focus on keeping girls in school.",
            },
        ],
        cta: { label: "See us in action", href: "/projects#education" },
        mediaLabel: "Education outreach in partner schools",
        heroImageSrc: "/assets/ourWorkImgs/ourworkeducation.jpeg",
        smallStats: [
            { value: "1,000+", label: "Students reached" },
            { value: "69+", label: "Scholarship beneficiaries funded" },
            { value: "12 mo", label: "Renewable enrolment support" },
        ],
        reversed: true,
    },
    {
        id: "humanitarian",
        pillarLabel: "Pillar three",
        theme: "humanitarian",
        heading: "Humanitarian Aid",
        subheading: "Relief, Health & Community Care",
        lead: "When people are in crisis, they cannot think about skills or education. CFO shows up first with food, medicine, and care, because meeting people where they are is where everything else begins.",
        body: "No circumstance should determine whether a person eats today, receives medical attention, or has their child's hospital bill settled. This pillar delivers direct, tangible support, from food relief and festive outreaches to full medical missions and hospital bill offset. Our healthcare focus centres on those most at risk: pregnant women, young children, and communities with limited access to basic medical services. Access should never be a privilege.",
        features: [
            {
                title: "Food Relief & Festive Outreaches",
                description: "Prepared food items and relief packages distributed to underserved families and communities.",
            },
            {
                title: "Medical Missions",
                description: "Free general health check-ups, maternal care, nutritional support for children, and disease prevention in underserved communities.",
            },
            {
                title: "Hospital Bill Support",
                description: "Direct offset of outstanding hospital bills for patients who cannot afford care.",
            },
            {
                title: "Maternal & Child Health",
                description: "Dedicated support for pregnant women and young children, the most at-risk members of any community.",
            },
        ],
        cta: {
            label: "See us in action",
            href: "/projects#humanitarian",
        },
        mediaLabel: "Community aid and humanitarian outreach",
        heroImageSrc: "/assets/ourWorkImgs/ourworkhumanitarian.jpeg",
        smallStats: [
            { value: "9", label: "Communities served" },
            { value: "4", label: "States: FCT, Nasarawa, Kaduna, Plateau" },
            { value: "100%", label: "Free to all beneficiaries" },
        ],
    },
];
