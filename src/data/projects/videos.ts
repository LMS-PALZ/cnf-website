import type { ProjectTheme } from "./projects";

/** Placeholder share link until final video URLs are set. */
export const CNF_PLACEHOLDER_VIDEO_LINK =
    "https://drive.google.com/file/d/1PoAA_3ZFAIQzxn15sDzQKiUyloF4gFdF/view?usp=sharing";

export type VideoItem = {
    id: string;
    badge: string;
    theme?: ProjectTheme;
    title: string;
    featured?: boolean;
    /** Google Drive share/view link, or a direct path/URL to an MP4 for `<video>`. */
    videoUrl?: string;
    /** Frame to show in the preview strip (seconds into the video). */
    previewOffsetSeconds?: number;
};

export const videos: VideoItem[] = [
    {
        id: "cnf-impact-story",
        badge: "Featured · Impact story",
        title: "CNF Impact Story, What We've Built and Where We're Going",
        featured: true,
        videoUrl: CNF_PLACEHOLDER_VIDEO_LINK,
        previewOffsetSeconds: 0,
    },
    {
        id: "ssu-inside-training",
        badge: "Skill Development",
        theme: "skills",
        title: "The Skill Scale-Up (SSU) Programme, Inside the Training",
        videoUrl: CNF_PLACEHOLDER_VIDEO_LINK,
        previewOffsetSeconds: 45,
    },
    {
        id: "cohort-1-graduation",
        badge: "Milestone · Graduation",
        theme: "skills",
        title: "Cohort 1 Graduation, Celebrating Our First Set of SSU Graduates",
        videoUrl: CNF_PLACEHOLDER_VIDEO_LINK,
        previewOffsetSeconds: 90,
    },
    {
        id: "heem-humanitarian-segment",
        badge: "Humanitarian Aid",
        theme: "humanitarian",
        title: "Humanitarian Aid Segment",
        videoUrl: CNF_PLACEHOLDER_VIDEO_LINK,
        previewOffsetSeconds: 135,
    },
];
