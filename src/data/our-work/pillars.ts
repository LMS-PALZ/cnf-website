export type PillarTheme = "skills" | "education" | "humanitarian";
export type IconKey = "monitor" | "scissors" | "star" | "briefcase" | "document" | "tools" | "book" | "heart" | "stethoscope" | "food" | "baby" | "globe" | "handshake" | "wave";
export type PillarFeature = {
    iconKey: IconKey;
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
    body: string;
    features: PillarFeature[];
    cta: {
        label: string;
        href: string;
    };
    mediaLabel: string;
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
        subheading: "Skill Scale-Up & Mentorship",
        lead: "Our flagship Skill Scale-Up (SSU) Programme equips underserved Nigerian youth aged 15 to 30 with practical, future-ready skills, and the support to turn those skills into real income.",
        body: "Over 80% of Nigerian graduates enter the workforce without the digital skills today's economy demands. CNF's SSU Programme directly addresses this gap. The in-person programme is fully free; an online SSU tier with a ₦20,000 application fee is also available. Both are built around technical and character development, training participants across three tracks, Digital & Tech, Vocational Skills, and the Total Man Module, preparing them not just for jobs, but for sustainable livelihoods. What makes SSU different is what happens after training. Every graduate receives guaranteed post-training internship placement, startup support, and access to an alumni mentorship network. Our graduates don't just learn, they earn. The in-person SSU Programme is fully free to all participants. An online SSU tier is also available with a ₦20,000 application fee, making skills training accessible to Nigerians across the country, not just in Abuja.",
        features: [
            {
                iconKey: "monitor",
                title: "Digital & Tech Track",
                description: "AI-assisted coding, prompt engineering, data analysis, web development, digital marketing, graphic design, photography.",
            },
            {
                iconKey: "scissors",
                title: "Vocational Skills Track",
                description: "Catering, hair styling, makeup artistry, videography, and more.",
            },
            {
                iconKey: "star",
                title: "Total Man Module (Core, Weekly)",
                description: "Character development, financial literacy, leadership, and entrepreneurship.",
            },
            {
                iconKey: "heart",
                title: "Post-Training Support",
                description: "Guaranteed internship placement, alumni peer mentorship, and startup capital support.",
            },
        ],
        cta: { label: "Learn more about SSU", href: "/programmes/skill-scale-up" },
        mediaLabel: "Place an SSU training session photo here",
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
        body: "Across Nigeria, thousands of children are out of school, not because they lack ability or ambition, but because their families cannot afford fees, uniforms, or exam costs. CNF's Education pillar removes these barriers directly: enrolling out-of-school children in secondary schools, covering school fees and examination costs, distributing academic resources, and delivering civic education workshops that build engaged, aware citizens. We believe that every child who gets back into a classroom is one less child left behind, and one more future leader the country can count on.",
        features: [
            {
                iconKey: "book",
                title: "Out-of-School Re-enrolment",
                description: "Three-year secondary school enrolment for children excluded due to financial constraints.",
            },
            {
                iconKey: "document",
                title: "School Fees & Examination Support",
                description: "Direct payment of outstanding fees, WAEC, NECO, and other examination costs.",
            },
            {
                iconKey: "briefcase",
                title: "Academic Resources Distribution",
                description: "Textbooks, stationery, and learning materials shared across partner schools.",
            },
            {
                iconKey: "globe",
                title: "Civic Education Workshops",
                description: "Building civic awareness, legal literacy, and community engagement among students.",
            },
        ],
        cta: { label: "Learn more about Education", href: "/projects#education" },
        mediaLabel: "Place a school outreach or classroom photo here",
        reachStat: {
            eyebrow: "Education reach",
            value: "1,000+",
            description: "Students reached through education outreach across partner schools",
        },
        smallStats: [
            { value: "69+", label: "Scholarship beneficiaries funded" },
            { value: "4", label: "States with active education outreach" },
            { value: "3yr", label: "Secondary school enrolment support" },
            { value: "100%", label: "Free in-person programme" },
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
        body: "No circumstance should determine whether a person eats today, receives medical attention, or has their child's hospital bill settled. CNF's Humanitarian Aid and Healthcare pillar delivers direct, tangible support to underserved individuals and families, from food relief and festive outreaches to full medical missions and hospital bill offset programmes. Our healthcare focus is particularly centred on those most at risk: pregnant women, young children, and communities with limited access to basic medical services. Through Project HEEM, CNF brings healthcare directly into these communities, because access should never be a privilege.",
        features: [
            {
                iconKey: "food",
                title: "Food Relief & Festive Outreaches",
                description: "Prepared food items and relief packages distributed to underserved families and communities.",
            },
            {
                iconKey: "stethoscope",
                title: "Project HEEM, Medical Missions",
                description: "Free general health check-ups, maternal care, nutritional support for children, and disease prevention in underserved communities.",
            },
            {
                iconKey: "document",
                title: "Hospital Bill Support",
                description: "Direct offset of outstanding hospital bills for patients who cannot afford care.",
            },
            {
                iconKey: "baby",
                title: "Maternal & Child Health",
                description: "Dedicated support for pregnant women and young children, the most at-risk members of any community.",
            },
        ],
        cta: {
            label: "Learn more about Humanitarian work",
            href: "/projects#humanitarian",
        },
        mediaLabel: "Place a humanitarian outreach or medical mission photo here",
        reachStat: {
            eyebrow: "Humanitarian reach",
            value: "4,000+",
            description: "Beneficiaries across food relief, medical care, and emergency support",
        },
        smallStats: [
            { value: "9", label: "Communities served" },
            { value: "4", label: "States reached" },
            { value: "FCT", label: "Nasarawa · Katsina · Plateau" },
            { value: "100%", label: "Free to all beneficiaries" },
        ],
    },
];
