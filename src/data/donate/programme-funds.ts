import type { PillarTheme } from "@/data/our-work/pillars";

export type ProgrammeFundCard = {
  id: string;
  pillarLabel: string;
  theme: PillarTheme;
  title: string;
  description: string;
};

export const programmeFunds: ProgrammeFundCard[] = [
  {
    id: "skills",
    pillarLabel: "Pillar one",
    theme: "skills",
    title: "Skill Development",
    description:
      "Funds training materials, facilitator fees, internship placement support, and the Total Man Module for cohorts of young Nigerians aged 15 to 30.",
  },
  {
    id: "education",
    pillarLabel: "Pillar two",
    theme: "education",
    title: "Education",
    description:
      "Covers school re-enrolment fees, WAEC and NECO exam costs, textbooks and learning materials, and civic education workshops in partner schools.",
  },
  {
    id: "humanitarian",
    pillarLabel: "Pillar three",
    theme: "humanitarian",
    title: "Humanitarian Aid & Healthcare",
    description:
      "Funds food relief packages, Project HEEM medical missions, hospital bill offsets, and maternal and child health support across nine communities.",
  },
];
