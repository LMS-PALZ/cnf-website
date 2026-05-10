import type { NewsCategory } from "@/data/news";
export const newsCategoryCardArt: Record<NewsCategory, {
    bg: string;
    ribbonBg: string;
    ribbonText: string;
}> = {
    "skill-development": {
        bg: "bg-[#a47b1c]",
        ribbonBg: "bg-[#c79a35]",
        ribbonText: "text-[#3a2a08]",
    },
    healthcare: {
        bg: "bg-[#1f5c4d]",
        ribbonBg: "bg-[#2f7e69]",
        ribbonText: "text-white",
    },
    "humanitarian-aid": {
        bg: "bg-[#7a2e1c]",
        ribbonBg: "bg-[#a04026]",
        ribbonText: "text-white",
    },
    education: {
        bg: "bg-[#1d3a5e]",
        ribbonBg: "bg-[#2c5586]",
        ribbonText: "text-white",
    },
};
