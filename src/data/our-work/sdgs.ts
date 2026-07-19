import type { PillarTheme } from "./pillars";
export type SdgCard = {
    number: number;
    theme: PillarTheme | "accent";
    title: string;
    description: string;
};
export const sdgCards: SdgCard[] = [
    {
        number: 3,
        theme: "humanitarian",
        title: "Good Health & Well-Being",
        description: "Project medical missions, hospital bill support, and maternal and child health outreaches ensure underserved communities can access basic healthcare.",
    },
    {
        number: 4,
        theme: "accent",
        title: "Quality Education",
        description: "Re-enrolment programmes, scholarship funding, and civic education workshops keep children in school and build the citizens of tomorrow.",
    },
    {
        number: 8,
        theme: "skills",
        title: "Decent Work & Economic Growth",
        description: "The SSU programs 47% activation rate is CFO's most direct contribution to youth employment, entrepreneurship, and inclusive growth.",
    },
];
