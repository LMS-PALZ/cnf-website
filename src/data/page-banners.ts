export type PageBannerImage = {
    src: string;
    alt: string;
    /**
     * `cover` fills the banner (may crop). `contain` shows the full image (may letterbox).
     * Default: cover with top anchor.
     */
    objectFit?: "cover" | "contain";
    /** CSS object-position override. */
    objectPosition?: string;
};

/** Background photos for inner-page banners (not home hero). */
export const pageBannerImages = {
    about: {
        src: "/assets/whoweare/whoweare3.JPG",
        alt: "Chiggy Nsofor Foundation team seated together in professional portrait",
        /** Slightly below top so seated team stays in frame without letterboxing. */
        objectPosition: "50% 38%",
    },
    ourWork: {
        src: "/assets/ourWorkImgs/ourworkbanner.jpg",
        alt: "CNF facilitator leading a classroom session with students in partner schools",
        /** Focus on speaker and students; top of frame is mostly ceiling. */
        objectPosition: "50% 58%",
    },
    projects: {
        src: "/assets/carouselImgs/3M8A8846.JPG",
        alt: "CNF projects and programmes in communities across Nigeria",
    },
    donate: {
        src: "/assets/ourWorkImgs/community%20aid.jpg",
        alt: "CNF humanitarian and community support outreach",
    },
    getInvolvedPartnership: {
        src: "/assets/getInvolved/partnershipbanner.jpeg",
        alt: "CNF team members in branded apparel coordinating outreach in the field",
        /** Faces sit upper-middle; avoid top-anchored crop cutting heads. */
        objectPosition: "50% 38%",
    },
    getInvolvedCareers: {
        src: "/assets/getInvolved/careerbanner.jpeg",
        alt: "CNF team collaborating around laptops in a meeting room",
        /** Keep standing and seated team faces in frame (heads near top of photo). */
        objectPosition: "50% 32%",
    },
    getInvolvedVolunteer: {
        src: "/assets/getInvolved/volunteerbanner.jpeg",
        alt: "CNF volunteers and staff posing together in foundation t-shirts",
        /** Group faces span the middle band; shift up from default top anchor. */
        objectPosition: "50% 42%",
    },
    news: {
        src: "/assets/newsImages/newsbannerimage.jpeg",
        alt: "CNF team member supporting a patient during a community healthcare outreach",
        /** Keep faces and interaction in frame on wide banners. */
        objectPosition: "50% 28%",
    },
    skillScaleUp: {
        src: "/assets/ssu/ssuclass.jpeg",
        alt: "CNF Skill Scale-Up classroom training with instructor and students coding on laptops",
    },
    contact: {
        src: "/assets/contact/contactbanner.jpeg",
        alt: "Person using a smartphone at a desk, representing ways to reach the Chiggy Nsofor Foundation",
        /** Hands and phone are mid-frame; top anchor crops the subject. */
        objectPosition: "50% 52%",
    },
} as const satisfies Record<string, PageBannerImage>;
