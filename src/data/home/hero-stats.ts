/**
 * Stats strip that sits directly below the home hero. Split into a "dark"
 * group (rendered on the night band) and a "light" group (on the cream band)
 * so each side can render with its own surface.
 */

export type HeroStat = { value: string; label: string };

export const heroDarkStats: HeroStat[] = [
  { value: "5,000+", label: "Lives reached" },
  { value: "86%", label: "Economic activation" },
  { value: "2024", label: "Year founded" },
];

export const heroLightStats: HeroStat[] = [
  { value: "100%", label: "Free in-person programmes" },
  { value: "3", label: "Active pillars" },
];
