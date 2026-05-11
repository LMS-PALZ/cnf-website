export type VolunteerAreaCard = {
    id: string;
    title: string;
    description: string;
};
export const volunteerAreas: VolunteerAreaCard[] = [
    {
        id: "joint-trainer",
        title: "Joint Trainer / Facilitator",
        description: "Lead a session, technical, business, or soft-skills, alongside our SSU and mentorship cohorts.",
    },
    {
        id: "mentor",
        title: "Mentor",
        description: "Guide a young person 1-on-1 over a 12-week cycle. We match by industry and time-zone.",
    },
    {
        id: "communications",
        title: "Communications & Media",
        description: "Help us tell the story, photography, videography, copy, or social media support during outreaches.",
    },
    {
        id: "medical-outreach",
        title: "Medical / Health Outreach",
        description: "For licensed medical professionals, join Project HEEM missions and free health-camp days.",
    },
    {
        id: "fieldwork-ssu",
        title: "Fieldwork for SSU",
        description: "Support cohort logistics, learner check-ins, and on-site facilitation for SSU training weekends.",
    },
    {
        id: "administrative",
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
