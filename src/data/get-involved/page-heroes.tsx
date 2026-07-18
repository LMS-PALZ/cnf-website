import type { ReactNode } from "react";

export type GetInvolvedPageHero = {
    id: string;
    breadcrumbLabel: string;
    title: ReactNode;
    description: string;
};

export const partnershipPageHero: GetInvolvedPageHero = {
    id: "partnership-hero-title",
    breadcrumbLabel: "Partnership",
    title: (
        <>
            Build Something That Lasts
            <br />
            <span className="text-cnf-accent">With Us.</span>
        </>
    ),
    description:
        "We partner with organisations that share our commitment to evidence-based, dignified, community-centred impact.",
};

export const volunteerPageHero: GetInvolvedPageHero = {
    id: "volunteer-hero-title",
    breadcrumbLabel: "Volunteer",
    title: (
        <>
            Give Your Time.
            <br />
            <span className="text-cnf-accent">Change a Life.</span>
        </>
    ),
    description:
        "Join one of our active volunteer cohorts. Whether you can give 4 hours a month or 20, there is a place for your skills here.",
};

export const careersPageHero: GetInvolvedPageHero = {
    id: "careers-hero-title",
    breadcrumbLabel: "Careers",
    title: (
        <>
            Build Your Career
            <br />
            <span className="text-cnf-accent">With Purpose</span>
        </>
    ),
    description:
        "Working at CFO means your skills do something that matters. If that resonates with you, we want to hear from you.",
};
