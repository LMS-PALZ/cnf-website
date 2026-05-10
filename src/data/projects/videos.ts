import type { ProjectTheme } from "./projects";
export type VideoItem = {
    id: string;
    badge: string;
    theme?: ProjectTheme;
    title: string;
    href?: string;
    featured?: boolean;
};
export const videos: VideoItem[] = [
    {
        id: "cnf-impact-story",
        badge: "Featured · Impact story",
        title: "CNF Impact Story, What We've Built and Where We're Going",
        featured: true,
    },
    {
        id: "ssu-inside-training",
        badge: "Skill Development",
        theme: "skills",
        title: "The Skill Scale-Up (SSU) Programme, Inside the Training",
    },
    {
        id: "cohort-1-graduation",
        badge: "Milestone · Graduation",
        theme: "skills",
        title: "Cohort 1 Graduation, Celebrating Our First Set of SSU Graduates",
    },
    {
        id: "heem-humanitarian-segment",
        badge: "Humanitarian Aid",
        theme: "humanitarian",
        title: "Project HEEM 1.0, Humanitarian Aid Segment",
    },
    {
        id: "heem-healthcare-segment",
        badge: "Healthcare",
        theme: "humanitarian",
        title: "Project HEEM 1.0, Healthcare Segment",
    },
    {
        id: "plateau-support",
        badge: "Humanitarian Aid",
        theme: "humanitarian",
        title: "CNF Extends Support to Underserved Families in Plateau State",
    },
];
