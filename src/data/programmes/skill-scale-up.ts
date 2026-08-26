import type { IconType } from "react-icons";
import {
    HiBriefcase,
    HiCurrencyDollar,
    HiFolder,
    HiHandRaised,
    HiLifebuoy,
    HiShieldCheck,
} from "react-icons/hi2";

export const SSU_PORTAL_HREF = "https://portal.skillscaleup.org/";
// Previous Google Form (kept for reference if we need to revert):
// "https://docs.google.com/forms/d/e/1FAIpQLSdeXxDbU3wBzYy4Omzu3unPqew4rpwQ1ZeUp1LIXOoDVf6Pcg/viewform";

export const ssuHero = {
    title: {
        line1: "Ready to transform",
        line2: "your",
        accent: "future?",
    },
    description:
        "Join our Skill Scale-Up Program. A tech, digital, vocational and core life skills training that enables individuals to build sustainable livelihoods, and create opportunity.",
} as const;

export const ssuIntro = {
    title: "Be part of the next generation of empowered Nigerian youth",
    subtitle: "Join the movement through our skill scale-up program. Every learner's training is fully covered by the foundation. In person applicants pay a ₦10,000 application fee, waived for anyone who cannot afford it, so no one is ever turned away. The online track carries a one time application fee of ₦20,000.",
    highlights: [
        "6 months hands-on or virtual training",
        "Final capstone project",
        "Certification upon successful completion",
    ],
} as const;

export type SsuGainItem = {
    title: string;
    description: string;
    icon: IconType;
};

export const ssuGainsSection = {
    title: "What you will gain",
    subtitle: "By completing the SSU program, participants gain",
    items: [
        {
            title: "Employable Skills",
            description:
                "Gain market-relevant skills aligned with today's digital and vocational opportunities.",
            icon: HiBriefcase,
        },
        {
            title: "Portfolio Projects",
            description:
                "Work on real projects you can confidently showcase to employers and clients.",
            icon: HiFolder,
        },
        {
            title: "Certification",
            description:
                "Receive a recognized certificate upon successful completion of the program.",
            icon: HiShieldCheck,
        },
        {
            title: "Life Skills",
            description:
                "Build discipline, leadership, and emotional intelligence to support personal and professional growth.",
            icon: HiLifebuoy,
        },
        {
            title: "Financial Blueprint",
            description:
                "Learn practical approaches toward income generation and long-term financial independence.",
            icon: HiCurrencyDollar,
        },
        {
            title: "Supportive Community",
            description:
                "Join a network of learners, mentors, and peers committed to growth and accountability.",
            icon: HiHandRaised,
        },
    ] satisfies SsuGainItem[],
};

export type SsuProgramIconId =
    | "catering"
    | "photography"
    | "hair"
    | "makeup";

export type SsuProgramItem = {
    title: string;
    description: string;
    imageAlt: string;
    cardClassName: string;
    /** Static asset for existing programme illustrations */
    imageSrc?: string;
    /** React SVG illustration when no static asset is used */
    icon?: SsuProgramIconId;
};

export type SsuProgramGroup = {
    id: "tech" | "vocational";
    title: string;
    items: SsuProgramItem[];
};

export const ssuProgramsSection = {
    title: "Programs Offered",
    subtitle: "Participants will be able to learn high-demand skills, such as;",
    groups: [
        {
            id: "tech",
            title: "Tech Skills",
            items: [
                {
                    title: "Product Design",
                    description:
                        "Design digital products by understanding user needs and creating solutions that are useful, usable, and clear.",
                    imageSrc: "/assets/svg/product.svg",
                    imageAlt: "Product design illustration",
                    cardClassName: "bg-white",
                },
                {
                    title: "Frontend Development",
                    description:
                        "Build user-facing interfaces for websites and applications, focusing on layout, interaction, and usability.",
                    imageSrc: "/assets/svg/frontend.svg",
                    imageAlt: "Frontend development illustration",
                    cardClassName: "bg-white",
                },
                {
                    title: "Backend Development",
                    description:
                        "Develop server-side systems that power applications, manage data, and handle logic securely and efficiently.",
                    imageSrc: "/assets/svg/backend.svg",
                    imageAlt: "Backend development illustration",
                    cardClassName: "bg-white",
                },
                {
                    title: "Data Analysis",
                    description:
                        "Analyze data to identify patterns, generate insights, and support informed decision-making on real-world problems.",
                    imageSrc: "/assets/svg/dataanalisty.svg",
                    imageAlt: "Data analysis illustration",
                    cardClassName: "bg-white",
                },
            ],
        },
        {
            id: "vocational",
            title: "Vocational Skills",
            items: [
                {
                    title: "Catering",
                    description:
                        "Learn professional cooking, baking, and food business skills that turn a kitchen into a livelihood.",
                    icon: "catering",
                    imageAlt: "Catering illustration",
                    cardClassName: "bg-white",
                },
                {
                    title: "Photography & Videography",
                    description:
                        "Master the camera, editing, and client work, from events to content creation.",
                    icon: "photography",
                    imageAlt: "Photography and videography illustration",
                    cardClassName: "bg-white",
                },
                {
                    title: "Hair Styling",
                    description:
                        "Build professional styling skills and the client base to earn from them.",
                    icon: "hair",
                    imageAlt: "Hair styling illustration",
                    cardClassName: "bg-white",
                },
                {
                    title: "Makeup Artistry",
                    description:
                        "Train in professional makeup for events, media, and everyday clients.",
                    icon: "makeup",
                    imageAlt: "Makeup artistry illustration",
                    cardClassName: "bg-white",
                },
            ],
        },
    ] satisfies SsuProgramGroup[],
};

export const ssuCta = {
    title: "We are here to empower you to build a sustainable livelihood.",
} as const;

export type SsuFaqItem = {
    question: string;
    answer: string;
};

export const ssuFaqs: SsuFaqItem[] = [
    {
        question: "Who is Skill Scale-Up for?",
        answer:
            "SSU is designed for underserved youths, out-of-school youths, and unemployed youths aged 15–30, living anywhere in Nigeria.",
    },
    {
        question: "Do I need prior digital or tech knowledge?",
        answer:
            "No. SSU starts from the basics. All you need is commitment and consistency, and we will take you the rest of the way.",
    },
    {
        question: "What are the basic requirements to participate?",
        answer:
            "You must be aged 15 to 30 and resident in Nigeria. For the online track you need a smartphone or laptop with internet access. For the in person track you attend classes at our Abuja hub.",
    },
    {
        question: "How much time do I need to commit weekly?",
        answer:
            "Plan for scheduled classes plus personal practice time each week. The exact timetable is shared at orientation for each cohort.",
    },
    {
        question: "What happens if I miss classes or fail to submit assignments?",
        answer:
            "SSU is commitment based. Repeated absence or unsubmitted work can cost you your place, because every seat is fully funded and another young person is waiting for it. If something serious comes up, speak to the team early and we will work with you.",
    },
];
