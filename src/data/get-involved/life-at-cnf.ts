export type LifeAtCnfCard = {
    id: string;
    variant: "solid" | "outline";
    title: string;
    description: string;
};
export const lifeAtCnfCards: LifeAtCnfCard[] = [
    {
        id: "purpose-driven",
        variant: "solid",
        title: "Purpose-Driven Work",
        description: "Every role at CNF directly contributes to programmes that change lives. Your work has a clear, visible impact.",
    },
    {
        id: "growth",
        variant: "outline",
        title: "Growth & Learning",
        description: "We invest in our team's development, through mentorship, training, and exposure to diverse programme areas.",
    },
    {
        id: "collaborative",
        variant: "outline",
        title: "Collaborative Culture",
        description: "We're a small, tight-knit team where every voice matters and decisions are made together, no silos, no rigid hierarchy.",
    },
    {
        id: "room-to-lead",
        variant: "solid",
        title: "Room to Lead",
        description: "As CNF grows, so do the opportunities within it. Ambitious, driven individuals will find space to grow here.",
    },
];
