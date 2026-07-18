import type { CarouselSlide } from "@/data/home/carousel-images";

/** Slides must match files in `public/assets/Impact So far/` (web formats only). */
const IMPACT_SO_FAR_BASE = "/assets/Impact%20So%20far";

export const IMPACT_GALLERY_SLIDES: CarouselSlide[] = [
    {
        src: `${IMPACT_SO_FAR_BASE}/3M8A0164%20(1).jpg`,
        alt: "Students and CFO team celebrating a personal hygiene and community health outreach",
    },
    {
        src: `${IMPACT_SO_FAR_BASE}/A6F2D2F4-21C1-44A8-B6DC-66E80571D385_1_201_a.jpeg`,
        alt: "CFO representative distributing supplies to families in a classroom",
    },
    {
        src: `${IMPACT_SO_FAR_BASE}/1E5A065C-CD59-4F6D-B3C9-7ACEBB03FA81_1_105_c.jpeg`,
        alt: "Skill Scale-Up participants working on laptops during a training session",
    },
    {
        src: `${IMPACT_SO_FAR_BASE}/IMG_2582%203.JPEG`,
        alt: "CFO volunteer teaching hair styling during a vocational skills session",
    },
    {
        src: `${IMPACT_SO_FAR_BASE}/a22629a9-047e-4033-99f7-1b20c3f3eb12%204.JPEG`,
        alt: "CFO programme participants preparing a meal together in a training kitchen",
    },
];
