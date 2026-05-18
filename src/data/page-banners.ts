export type PageBannerImage = {
    src: string;
    alt: string;
};

/** Background photos for inner-page banners (not home hero). */
export const pageBannerImages = {
    about: {
        src: "/assets/howItStarted/howitstarted.jpg",
        alt: "Chiggy Nsofor Foundation founder and community outreach",
    },
    ourWork: {
        src: "/assets/ourWorkImgs/skillaqc.jpeg",
        alt: "CNF skills development and training programme",
    },
    projects: {
        src: "/assets/carouselImgs/3M8A8846.JPG",
        alt: "CNF projects and programmes in communities across Nigeria",
    },
    donate: {
        src: "/assets/ourWorkImgs/community%20aid.jpg",
        alt: "CNF humanitarian and community support outreach",
    },
    getInvolved: {
        src: "/assets/carouselImgs/_Y4B0704.JPG",
        alt: "Volunteers and community members at a CNF programme",
    },
    news: {
        src: "/assets/ourWorkImgs/education%20outreach.jpg",
        alt: "CNF education outreach in partner schools",
    },
    skillScaleUp: {
        src: "/assets/carouselImgs/3M8A8624.JPEG",
        alt: "Skill Scale-Up training session with youth participants",
    },
} as const satisfies Record<string, PageBannerImage>;
