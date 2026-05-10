import type { PillarTheme } from "@/data/our-work/pillars";
export const pillarTheme: Record<PillarTheme, {
    surface: string;
    text: string;
    soft: string;
    dot: string;
    button: string;
    onSurface: string;
}> = {
    skills: {
        surface: "bg-cnf-accent",
        text: "text-cnf-pillar-skills",
        soft: "bg-cnf-pillar-skills-soft",
        dot: "bg-cnf-pillar-skills",
        button: "bg-cnf-accent text-cnf-accent-ink hover:bg-cnf-accent-hover",
        onSurface: "text-white/80",
    },
    education: {
        surface: "bg-cnf-pillar-education",
        text: "text-cnf-pillar-education",
        soft: "bg-cnf-pillar-education-soft",
        dot: "bg-cnf-pillar-education",
        button: "bg-cnf-pillar-education text-white hover:bg-cnf-pillar-education/90",
        onSurface: "text-white/80",
    },
    humanitarian: {
        surface: "bg-cnf-pillar-humanitarian",
        text: "text-cnf-pillar-humanitarian",
        soft: "bg-cnf-pillar-humanitarian-soft",
        dot: "bg-cnf-pillar-humanitarian",
        button: "bg-cnf-pillar-humanitarian text-white hover:bg-cnf-pillar-humanitarian/90",
        onSurface: "text-white/80",
    },
};
