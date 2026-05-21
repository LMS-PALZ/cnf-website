/** Stock photos for project cards — swap paths here when final event photos are ready. */
export type ProjectImage = {
    src: string;
    alt: string;
};

export const MAX_PROJECT_CARD_IMAGES = 8;

/** Reusable catalog entries; compose per-project `images` arrays in projects.ts */
export const projectImageCatalog = {
    skillsTraining: {
        src: "/assets/ourWorkImgs/skillaqc.jpeg",
        alt: "Skill Scale-Up training session with participants",
    },
    educationOutreach: {
        src: "/assets/ourWorkImgs/education%20outreach.jpg",
        alt: "CNF education outreach with students",
    },
    communityAid: {
        src: "/assets/ourWorkImgs/community%20aid.jpg",
        alt: "CNF community aid and humanitarian outreach",
    },
    howItStarted: {
        src: "/assets/howItStarted/howitstarted.jpg",
        alt: "CNF foundation outreach and community engagement",
    },
    graduationCeremony: {
        src: "/assets/carouselImgs/3M8A8846.JPG",
        alt: "CNF Skill Scale-Up graduation ceremony",
    },
    cohortCelebration: {
        src: "/assets/carouselImgs/3M8A8624.JPEG",
        alt: "CNF programme celebration with graduates and mentors",
    },
    programmeLaunch: {
        src: "/assets/carouselImgs/_Y4B0504.JPG",
        alt: "CNF programme launch and orientation",
    },
    communityGathering: {
        src: "/assets/carouselImgs/_Y4B0704.JPG",
        alt: "CNF community gathering during an outreach",
    },
    clinicOutreach: {
        src: "/assets/carouselImgs/IMG_4340%203.JPG",
        alt: "CNF healthcare and clinic outreach",
    },
    handsOnWorkshop: {
        src: "/assets/carouselImgs/DE8E3217-50A3-4574-BAA5-66B7E9974018_1_201_a.jpeg",
        alt: "Hands-on skills workshop with CNF beneficiaries",
    },
} as const satisfies Record<string, ProjectImage>;
