import type { IconRegistryKey } from "@/components/ui/iconRegistry";
export type VolunteerAreaCard = {
    id: string;
    iconKey: IconRegistryKey;
    iconTone: "skills" | "education" | "humanitarian" | "accent" | "primary";
    title: string;
    description: string;
};
export const volunteerAreas: VolunteerAreaCard[] = [
    {
        id: "joint-trainer",
        iconKey: "users",
        iconTone: "skills",
        title: "Joint Trainer / Facilitator",
        description: "Lead a session, technical, business, or soft-skills, alongside our SSU and mentorship cohorts.",
    },
    {
        id: "mentor",
        iconKey: "graduation-cap",
        iconTone: "accent",
        title: "Mentor",
        description: "Guide a young person 1-on-1 over a 12-week cycle. We match by industry and time-zone.",
    },
    {
        id: "communications",
        iconKey: "megaphone",
        iconTone: "education",
        title: "Communications & Media",
        description: "Help us tell the story, photography, videography, copy, or social media support during outreaches.",
    },
    {
        id: "medical-outreach",
        iconKey: "stethoscope",
        iconTone: "humanitarian",
        title: "Medical / Health Outreach",
        description: "For licensed medical professionals, join Project HEEM missions and free health-camp days.",
    },
    {
        id: "fieldwork-ssu",
        iconKey: "tools",
        iconTone: "primary",
        title: "Fieldwork for SSU",
        description: "Support cohort logistics, learner check-ins, and on-site facilitation for SSU training weekends.",
    },
    {
        id: "administrative",
        iconKey: "clipboard",
        iconTone: "skills",
        title: "Administrative & Logistics",
        description: "Behind-the-scenes work that keeps programmes running, scheduling, data entry, supply runs, and follow-ups.",
    },
];
export const volunteerExpectations = [
    "Pre-screening and onboarding before any field engagement",
    "Clear time commitment expectations per cycle / project",
    "Coverage of approved out-of-pocket expenses",
    "Reference letters available after a full engagement cycle",
];
