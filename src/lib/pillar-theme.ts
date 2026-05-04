import type { PillarTheme } from "@/data/our-work/pillars";

/**
 * Shared Tailwind class fragments per pillar theme. Centralising them here
 * keeps the colour decisions consistent across hero pills, feature rows,
 * media cards, and SDG numerals.
 */
export const pillarTheme: Record<
  PillarTheme,
  {
    /** Solid background for the media column / strong surfaces. */
    surface: string;
    /** Accent text colour for headings/links/eyebrows. */
    text: string;
    /** Background for small accent blobs (e.g. icon circles). */
    soft: string;
    /** Solid bg for accent buttons and dot indicators. */
    dot: string;
    /** Button variant for CTAs inside this pillar. */
    button: string;
    /** Foreground colour applied on top of `surface` (for placeholder labels). */
    onSurface: string;
  }
> = {
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
    button:
      "bg-cnf-pillar-humanitarian text-white hover:bg-cnf-pillar-humanitarian/90",
    onSurface: "text-white/80",
  },
};
