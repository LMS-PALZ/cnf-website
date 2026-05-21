import type { ProjectTheme } from "./projects";

import type { BadgeTone } from "@/components/ui/Badge";

export type VideoItem = {
    id: string;
    badge: string;
    /** Badge background style (defaults to neutral). */
    badgeTone?: BadgeTone;
    theme?: ProjectTheme;
    title: string;
    /** Google Drive share link, YouTube URL, or direct MP4 path. */
    videoUrl: string;
    /** Start time in seconds when the embed loads (e.g. 240 = 4:00). */
    previewOffsetSeconds?: number;
    /** Static image shown until the user presses play. */
    previewImageSrc?: string;
};

export const videos: VideoItem[] = [
    {
        id: "cnf-impact-story",
        badge: "Impact story",
        badgeTone: "primary",
        title: "Skill Scale-Up Impact Story",
        videoUrl:
            "https://drive.google.com/file/d/1PoAA_3ZFAIQzxn15sDzQKiUyloF4gFdF/view?usp=sharing",
        previewOffsetSeconds: 240,
        previewImageSrc: "/assets/projects/impactstory.jpeg",
    },
    {
        id: "humanitarian-outreach",
        badge: "Humanitarian Aid",
        theme: "humanitarian",
        title: "Humanitarian Aid Outreach",
        videoUrl: "https://www.youtube.com/watch?v=cPBdrw2tm1U",
        previewOffsetSeconds: 120,
    },
    {
        id: "education-outreach",
        badge: "Education",
        theme: "education",
        title: "Educational Outreach",
        videoUrl: "https://www.youtube.com/watch?v=GmcZqncsa08",
        previewOffsetSeconds: 180,
    },
    {
        id: "ssu-graduation",
        badge: "Skill Development",
        theme: "skills",
        title: "Skill Scale-Up Graduation",
        videoUrl: "https://www.youtube.com/shorts/sXdL2XxHt6w",
        previewOffsetSeconds: 45,
    },
];
