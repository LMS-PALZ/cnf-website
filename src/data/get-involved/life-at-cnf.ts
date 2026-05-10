import type { IconRegistryKey } from "@/components/ui/iconRegistry";
export type LifeAtCnfCard = {
    id: string;
    iconKey: IconRegistryKey;
    variant: "solid" | "outline";
    title: string;
    description: string;
};
export const lifeAtCnfCards: LifeAtCnfCard[] = [
    {
        id: "purpose-driven",
        iconKey: "sparkle",
        variant: "solid",
        title: "Purpose-Driven Work",
        description: "Every role at CNF directly contributes to programmes that change lives. Your work has a clear, visible impact.",
    },
    {
        id: "growth",
        iconKey: "pencil",
        variant: "outline",
        title: "Growth & Learning",
        description: "We invest in our team's development, through mentorship, training, and exposure to diverse programme areas.",
    },
    {
        id: "collaborative",
        iconKey: "users",
        variant: "outline",
        title: "Collaborative Culture",
        description: "We're a small, tight-knit team where every voice matters and decisions are made together, no silos, no rigid hierarchy.",
    },
    {
        id: "room-to-lead",
        iconKey: "target",
        variant: "solid",
        title: "Room to Lead",
        description: "As CNF grows, so do the opportunities within it. Ambitious, driven individuals will find space to grow here.",
    },
];
