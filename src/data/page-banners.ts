export type PageBannerImage = {
    src: string;
    alt: string;
    /** CSS object-position for banner crop focal point (default: center) */
    objectPosition?: string;
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
        src: "/assets/ssu/ssuclass.jpeg",
        alt: "CNF Skill Scale-Up classroom training with instructor and students coding on laptops",
        objectPosition: "50% 22%",
    },
    contact: {
        src: "/assets/contact/contacthand.jpg",
        alt: "Person holding a phone, representing ways to reach the Chiggy Nsofor Foundation",
        objectPosition: "50% 40%",
    },
} as const satisfies Record<string, PageBannerImage>;
