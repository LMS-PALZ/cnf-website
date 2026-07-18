export type CarouselSlide = {
    src: string;
    alt: string;
};

const LANDING_SLIDE_BASE = "/assets/Landing%20Page%20Slide%20Picture";

export const HOME_HERO_CAROUSEL_SLIDES: CarouselSlide[] = [
    {
        src: `${LANDING_SLIDE_BASE}/9C13BAEC-3A79-41D7-8359-F4A20D9637A9_1_105_c.jpeg`,
        alt: "Participants learning cake decorating during a CFO skills workshop",
    },
    {
        src: `${LANDING_SLIDE_BASE}/IMG_2586%203.JPEG`,
        alt: "CFO volunteer leading a makeup and beauty skills training session",
    },
    {
        src: `${LANDING_SLIDE_BASE}/Copy%20of%203M8A9074%202.JPG`,
        alt: "CFO team sorting medical supplies for community health outreach",
    },
    {
        src: `${LANDING_SLIDE_BASE}/IMG_2580%203.JPEG`,
        alt: "Young woman in a CFO media skills studio photoshoot session",
    },
    {
        src: `${LANDING_SLIDE_BASE}/IMG_devlecture.jpeg`,
        alt: "CFO instructor teaching web development to students in a classroom",
    },
];
