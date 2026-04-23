import type { NewsCategory } from "@/data/news";

/** Card top gradients aligned with foundation news designs */
export const newsCategoryCardArt: Record<
  NewsCategory,
  { gradient: string; icon: "tree" | "scope" | "cap" | "heart" | "pill" }
> = {
  "humanitarian-aid": {
    gradient: "bg-gradient-to-br from-[#5c3830] via-[#3d241c] to-[#1a0f0c]",
    icon: "tree",
  },
  healthcare: {
    gradient: "bg-gradient-to-br from-[#0f3d2e] via-[#0a281c] to-[#051812]",
    icon: "scope",
  },
  "skill-development": {
    gradient: "bg-gradient-to-br from-[#a3843a] via-[#7a5e2a] to-[#4a3618]",
    icon: "cap",
  },
  education: {
    gradient: "bg-gradient-to-br from-[#1a4d36] via-[#123828] to-[#0c1f15]",
    icon: "heart",
  },
};
