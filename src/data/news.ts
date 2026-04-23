export type NewsTag = "Impact" | "Update";

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag: NewsTag;
  body: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "community-learning-day-lagos",
    title: "Community learning day expands reach in Lagos",
    date: "2026-02-12",
    tag: "Impact",
    excerpt:
      "Volunteers and trainers welcomed new cohorts for introductory digital skills sessions.",
    body: `Local partners hosted a community learning day focused on digital fundamentals and safe internet use. Participants received printed guides and follow-up support through our volunteer network.

Figures cited in outreach materials are reviewed annually and updated on this site.`,
  },
  {
    slug: "scholarship-materials-abuja",
    title: "Learning materials reach students in Abuja",
    date: "2025-11-03",
    tag: "Update",
    excerpt:
      "School supplies and reading packs were distributed ahead of term examinations.",
    body: `Working alongside educators, we supplied learning materials to support students preparing for examinations. Distribution was coordinated with school leadership to prioritise need.

This update reflects programme activity at the time of publication; details may evolve as partnerships grow.`,
  },
  {
    slug: "humanitarian-response-plateau",
    title: "Relief coordination supports families in Plateau",
    date: "2025-08-21",
    tag: "Impact",
    excerpt:
      "Essential supplies were organised with community representatives following local assessments.",
    body: `Humanitarian response is guided by community leadership and verified assessments. The foundation emphasises transparency in fund use and dignified distribution practices.

For partnership enquiries related to humanitarian programmes, contact our partnerships inbox listed on the Get Involved page.`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
