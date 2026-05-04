import type { NewsCategory } from "@/data/news";

/**
 * Solid background + ribbon styling per news category. Matches the
 * artifact: bright mustard for Skill Development, deep teal-green for
 * Healthcare, rust for Humanitarian Aid, and navy for Education.
 *
 * The ribbon (small uppercase pill) is rendered with a tinted version of
 * the same hue so it stays legible on the card art.
 */
export const newsCategoryCardArt: Record<
  NewsCategory,
  {
    /** Solid Tailwind class for the card-art background. */
    bg: string;
    /** Background utility for the small uppercase category ribbon. */
    ribbonBg: string;
    /** Text colour for the ribbon. */
    ribbonText: string;
  }
> = {
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
