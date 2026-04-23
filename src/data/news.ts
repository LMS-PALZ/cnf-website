export type NewsCategory = "skill-development" | "education" | "humanitarian-aid" | "healthcare";

export type NewsFilterId = "all" | NewsCategory;

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  /** Small editorial label (e.g. Impact / Events) */
  tag: string;
  category: NewsCategory;
  /** Uppercase ribbon on card art (e.g. HUMANITARIAN AID) */
  ribbon: string;
  /** Optional line under ribbon on detail (e.g. EDUCATION • EVENTS) */
  detailSubtitle?: string;
  featured?: boolean;
  body: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "cnf-iwd-aggs-gudu-abuja",
    title: "CNF Commemorates International Women's Day at AGGS Gudu, Abuja",
    date: "2026-03-08",
    tag: "Events",
    category: "education",
    ribbon: "EDUCATION",
    detailSubtitle: "EDUCATION • EVENTS",
    featured: true,
    excerpt:
      "Students and educators joined CNF for a morning of dialogue, mentorship, and celebration of young women leaders in the school community.",
    body: `The foundation marked International Women's Day alongside staff and students at AGGS Gudu, spotlighting pathways in STEM and civic participation.

Sessions were co-facilitated with volunteer mentors. Photo documentation will be added to this story after media consent is confirmed.`,
  },
  {
    slug: "skill-scale-up-cohort-3-tech",
    title: "A New Chapter of Impact: Skill Scale-Up Cohort 3 Tech Batch Begins",
    date: "2026-03-05",
    tag: "Programme",
    category: "skill-development",
    ribbon: "SKILL DEVELOPMENT",
    excerpt:
      "A fresh cohort opens with an emphasis on digital fundamentals, workplace communication, and project-based learning.",
    body: `Cohort 3 welcomes participants from across the city with devices on loan where needed. Facilitators include alumni volunteers from earlier intakes.

Outcomes will be summarised at the close of the batch and published on this page.`,
  },
  {
    slug: "festive-food-relief-gonin-gora",
    title: "CNF Brightens the Festive Season with Food Relief Outreach in Gonin Gora, Kaduna",
    date: "2025-12-18",
    tag: "Impact",
    category: "humanitarian-aid",
    ribbon: "HUMANITARIAN AID",
    excerpt:
      "Families in Gonin Gora receive essential food items during the festive season — ensuring no one goes hungry during the holidays.",
    body: `Distribution was coordinated with community leaders and local volunteers. Packages included staple grains, cooking oil, and child-friendly supplements where available.

This outreach is part of CNF's wider humanitarian pillar; partners can contact the foundation for impact summaries.`,
  },
  {
    slug: "menstrual-hygiene-education-mpape",
    title: "CNF and FemPower Empower Young Girls in Mpape with Menstrual Hygiene Education",
    date: "2025-11-22",
    tag: "Partnership",
    category: "healthcare",
    ribbon: "HEALTHCARE",
    excerpt:
      "In partnership with FemPower, CNF delivers menstrual hygiene education and support to young girls in Mpape — breaking the silence around a critical health issue.",
    body: `Sessions combined health literacy, dignity kits, and referral information to trusted clinics. Community feedback will inform the next phase of the programme.

CNF extends gratitude to educators who hosted the workshops on short notice.`,
  },
  {
    slug: "project-heem-kuchingoro-idp",
    title: "New Kuchingoro IDP Camp Receives Free Medical Services, Scholarships, and Food Relief via Project HEEM",
    date: "2025-10-04",
    tag: "Impact",
    category: "humanitarian-aid",
    ribbon: "HUMANITARIAN AID",
    excerpt:
      "CNF brings Project HEEM to displaced families at New Kuchingoro IDP Camp — delivering healthcare, scholarships, and food in one coordinated outreach.",
    body: `Medical desks, learning packs, and hot meals were organised in sequence to reduce waiting times for families with children.

Project HEEM remains a flagship coordination model for multi-service days; evaluation notes will be published after field review.`,
  },
  {
    slug: "community-learning-day-lagos",
    title: "Community learning day expands reach in Lagos",
    date: "2026-02-12",
    tag: "Impact",
    category: "skill-development",
    ribbon: "SKILL DEVELOPMENT",
    excerpt:
      "Volunteers and trainers welcomed new cohorts for introductory digital skills sessions.",
    body: `Local partners hosted a community learning day focused on digital fundamentals and safe internet use. Participants received printed guides and follow-up support through our volunteer network.

Figures cited in outreach materials are reviewed annually and updated on this site.`,
  },
];

export const newsFilterOptions: { id: NewsFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "skill-development", label: "Skill Development" },
  { id: "education", label: "Education" },
  { id: "humanitarian-aid", label: "Humanitarian Aid" },
  { id: "healthcare", label: "Healthcare" },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
