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
    reachStat: {
        eyebrow: string;
        value: string;
        description: string;
    };
    smallStats: PillarSmallStat[];
    reversed?: boolean;
};
export const ourWorkPillars: PillarBlockData[] = [
    {
        id: "skills",
        pillarLabel: "Pillar one",
        theme: "skills",
        heading: "Skill Development",
        subheading: "Mentorship & Skill Scale-Up",
        lead: "Our flagship Skill Scale-Up (SSU) Programme equips underserved Nigerian youth aged 15 to 30 with practical, future-ready skills, and the support to turn those skills into real income.",
        body: [
            "Over 80% of Nigerian graduates enter the workforce without the digital skills today's economy demands. CNF's SSU Programme directly addresses this gap.",
            "The programme is delivered through a highly subsidised in-person model, alongside an online SSU tier with an application fee ranging from ₦10,000 to ₦20,000, making quality skills training accessible to young Nigerians across the country.",
            "Built around both technical and character development, SSU equips participants through three core tracks: Digital & Tech, Vocational Skills, and the Total Man Mentorship Programme. The goal is not only to prepare young people for employment, but to position them for sustainable livelihoods and long-term financial independence.",
            "What sets SSU apart is its commitment beyond the classroom. Graduates gain access to post-training internship placements, startup support, and an alumni mentorship network designed to foster continuous growth and opportunity.",
            "At SSU, our graduates do not just learn; they earn.",
        ],
        features: [
            {
                title: "Digital & Tech Track (Remote & On-site)",
                description: "AI-assisted coding, virtual assistant, prompt engineering, data analysis, web development, digital marketing, graphic design, content creation.",
            },
            {
                title: "Vocational Skills Track (Fully on-site)",
                description: "Catering, hair styling, makeup artistry, videography, and more.",
            },
            {
                title: "Total Man Mentorship (Core, Remote, On-site)",
                description: "Civic learning, financial literacy, leadership, mentorship, and entrepreneurship.",
            },
            {
                title: "Post-Training Support",
                description: "Internship placement, alumni peer mentorship, and startup capital support.",
            },
        ],
        cta: { label: "See more about SSU", href: "/programmes/skill-scale-up" },
        secondaryCta: { label: "See us in action", href: "/projects" },
        mediaLabel: "SSU training and skills development",
        heroImageSrc: "/assets/ourWorkImgs/skill1.JPEG",
        reachStat: {
            eyebrow: "SSU programme results",
            value: "86%",
            description: "Economic activation rate, graduates employed, interning, or running businesses",
        },
        smallStats: [
            { value: "74+", label: "Youth trained across 3 cohorts" },
            { value: "60%", label: "Women among SSU graduates" },
            { value: "62%", label: "Earning income within 6 months" },
            { value: "14%", label: "Now serving as peer mentors" },
        ],
    },
    {
        id: "education",
        pillarLabel: "Pillar two",
        theme: "education",
        heading: "Education",
        subheading: "Access, Equity & Civic Learning",
        lead: "Education is the foundation of everything else. For children in underserved communities, financial barriers too often make it an impossible dream, CNF works to change that.",
        body: "Across Nigeria, thousands of children are out of school, not because they lack ability or ambition, but because their families cannot afford fees, uniforms, or exam costs. CNF's Education pillar removes these barriers directly: enrolling out-of-school children in secondary schools, tertiary institutions, covering school fees and examination costs, distributing academic resources, and delivering civic education workshops that build engaged, aware citizens. We believe that every child who gets back into a classroom is one less child left behind, and one more future leader the country can count on.",
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
                title: "Civic Education Workshops",
                description: "Building civic awareness, legal literacy, and community engagement.",
            },
        ],
        cta: { label: "See us in action", href: "/projects#education" },
        mediaLabel: "Education outreach in partner schools",
        heroImageSrc: "/assets/ourWorkImgs/ourworkeducation.jpeg",
        reachStat: {
            eyebrow: "Education reach",
            value: "1,000+",
            description: "Students reached through education outreach across partner schools",
        },
        smallStats: [
            { value: "69+", label: "Scholarship beneficiaries funded" },
            { value: "12 Months", label: "Renewable School enrolment support" },
        ],
        reversed: true,
    },
    {
        id: "humanitarian",
        pillarLabel: "Pillar three",
        theme: "humanitarian",
        heading: "Humanitarian Aid",
        subheading: "Relief, Health & Community Care",
        lead: "When people are in crisis, they cannot think about skills or education. CNF shows up first with food, medicine, and care, because meeting people where they are is where everything else begins.",
        body: "No circumstance should determine whether a person eats today, receives medical attention, or has their child's hospital bill settled. CNF's Humanitarian Aid and Healthcare pillar delivers direct, tangible support to underserved individuals and families, from food relief and festive outreaches to full medical missions and hospital bill offset programmes. Our healthcare focus is particularly centred on those most at risk: pregnant women, young children, and communities with limited access to basic medical services. CNF brings healthcare directly into these communities, because access should never be a privilege.",
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
        reachStat: {
            eyebrow: "Humanitarian reach",
            value: "6,000+",
            description: "Beneficiaries across food relief, medical care, and emergency support",
        },
        smallStats: [
            { value: "9", label: "Communities served" },
            { value: "4", label: "States reached" },
            { value: "FCT", label: "Nasarawa · Kaduna · Plateau" },
            { value: "100%", label: "Free to all beneficiaries" },
        ],
    },
];
