import type { IconType } from "react-icons";
import {
    HiBriefcase,
    HiCurrencyDollar,
    HiFolder,
    HiHandRaised,
    HiLifebuoy,
    HiShieldCheck,
} from "react-icons/hi2";

export const SSU_WAITLIST_HREF =
    "https://docs.google.com/forms/d/e/1FAIpQLSdeXxDbU3wBzYy4Omzu3unPqew4rpwQ1ZeUp1LIXOoDVf6Pcg/viewform";

export const ssuHero = {
    title: {
        line1: "Ready to transform",
        line2: "your",
        accent: "future?",
    },
    description:
        "Join our Skill Scale-Up Program. A tech, digital, vocational and core life skills training that enables individuals build sustainable livelihoods, and create opportunity.",
} as const;

export const ssuIntro = {
    title: "Be part of the next generation of empowered Nigerian youth",
    subtitle: "Join the movement through our skill scale-up program.",
    highlights: [
        "3-4 months hands-on or virtual training",
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

export type SsuProgramItem = {
    title: string;
    description: string;
    imageAlt: string;
    cardClassName: string;
    /** Static asset for existing programme illustrations */
    imageSrc?: string;
    /** React SVG illustration when no static asset is used */
    icon?: "catering" | "photography";
};

export const ssuProgramsSection = {
    title: "Programs Offered",
    subtitle: "Participants will be able to learn high-demand skills, such as;",
    items: [
        {
            title: "Product Design",
            description:
                "Design digital products by understanding user needs and creating solutions that are useful, usable, and clear.",
            imageSrc: "/assets/svg/product.svg",
            imageAlt: "Product design illustration",
            cardClassName: "bg-sky-50",
        },
        {
            title: "Frontend Development",
            description:
                "Build user-facing interfaces for websites and applications, focusing on layout, interaction, and usability.",
            imageSrc: "/assets/svg/frontend.svg",
            imageAlt: "Frontend development illustration",
            cardClassName: "bg-cnf-pillar-skills-soft",
        },
        {
            title: "Backend Development",
            description:
                "Develop server-side systems that power applications, manage data, and handle logic securely and efficiently.",
            imageSrc: "/assets/svg/backend.svg",
            imageAlt: "Backend development illustration",
            cardClassName: "bg-cnf-primary-soft",
        },
        {
            title: "Data Analysis",
            description:
                "Analyze data to identify patterns, generate insights, and support informed decision-making on real-world problems.",
            imageSrc: "/assets/svg/dataanalisty.svg",
            imageAlt: "Data analysis illustration",
            cardClassName: "bg-cnf-pillar-humanitarian-soft",
        },
        {
            title: "Catering",
            description:
                "Learn practical culinary and catering skills for preparing, presenting, and serving food in professional and entrepreneurial settings.",
            icon: "catering",
            imageAlt: "Catering illustration",
            cardClassName: "bg-cnf-accent/10",
        },
        {
            title: "Photography",
            description:
                "Build hands-on photography skills covering composition, lighting, and storytelling for personal, event, and commercial work.",
            icon: "photography",
            imageAlt: "Photography illustration",
            cardClassName: "bg-sky-50",
        },
    ] satisfies SsuProgramItem[],
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
            "No. Prior digital knowledge is not required. You only need a willingness to learn and commitment to the program.",
    },
    {
        question: "What are the basic requirements to participate?",
        answer:
            "Participants must:\n– Have access to a functional laptop or PC\n– Have reliable internet\n– Be able to study in English",
    },
    {
        question: "How much time do I need to commit weekly?",
        answer:
            "At least 10 hours per week for live classes, assignments, and projects.",
    },
    {
        question: "What happens if I miss classes or fail to submit assignments?",
        answer:
            "Participants are expected to:\n– Attend a minimum of 80% of live sessions\n– Submit 100% of assignments and projects\nFailure to meet expectations may result in removal from the program.",
    },
];
