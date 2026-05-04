export type NewsCategory =
  | "skill-development"
  | "education"
  | "humanitarian-aid"
  | "healthcare";

export type NewsFilterId = "all" | NewsCategory;

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  /** Small editorial label (e.g. Impact / Events) */
  tag: string;
  category: NewsCategory;
  /** Uppercase ribbon shown as a pill on card art (e.g. HUMANITARIAN AID) */
  ribbon: string;
  /** Optional eyebrow shown on the featured card / detail page (e.g.
   * "EDUCATION • EVENTS"). */
  detailSubtitle?: string;
  /** When `true` this item is rendered as the LATEST card at the top of the
   * listing. Only one item should be marked featured. */
  featured?: boolean;
  /** Single colourful emoji rendered centred on the card art. Lets each
   * story have a distinct visual without needing photography. */
  emoji: string;
  /** Optional caption rendered under the camera placeholder on the
   * featured card (e.g. "Add IWD photo here"). Defaults to a generic
   * "Add programme photo here". */
  photoLabel?: string;
  body: string;
};

/* -------------------------------------------------------------------------- */
/*  Data — newest first. The first entry with `featured: true` is rendered    */
/*  as the LATEST card on /news.                                              */
/* -------------------------------------------------------------------------- */

export const newsItems: NewsItem[] = [
  {
    slug: "cnf-iwd-aggs-gudu-abuja",
    title:
      "CNF Commemorates International Women's Day at AGGS Gudu, Abuja",
    date: "2026-03-13",
    tag: "Events",
    category: "education",
    ribbon: "EDUCATION",
    detailSubtitle: "EDUCATION \u2022 EVENTS",
    featured: true,
    emoji: "\uD83C\uDF38",
    photoLabel: "Add IWD photo here",
    excerpt:
      "CNF marked International Women's Day by engaging female students at AGGS Gudu with sessions on leadership, confidence, and civic awareness — reinforcing our commitment to girls' education and empowerment.",
    body: `The foundation marked International Women's Day alongside staff and students at AGGS Gudu, spotlighting pathways in STEM and civic participation.

Sessions were co-facilitated with volunteer mentors. Photo documentation will be added to this story after media consent is confirmed.`,
  },
  {
    slug: "skill-scale-up-cohort-3-tech",
    title:
      "A New Chapter of Impact: Skill Scale-Up Cohort 3 Tech Batch Begins",
    date: "2026-03-05",
    tag: "Programme",
    category: "skill-development",
    ribbon: "SKILL DEVELOPMENT",
    emoji: "\uD83D\uDD27",
    excerpt:
      "CNF opens its third cohort of the SSU Programme, welcoming a new generation of digital and tech trainees into the programme.",
    body: `Cohort 3 welcomes participants from across the city with devices on loan where needed. Facilitators include alumni volunteers from earlier intakes.

Outcomes will be summarised at the close of the batch and published on this page.`,
  },
  {
    slug: "ssu-cohort-2-graduation",
    title:
      "Celebrating the Graduation of CNF's Second Skill Scale-Up Cohort",
    date: "2025-12-07",
    tag: "Milestone",
    category: "skill-development",
    ribbon: "SKILL DEVELOPMENT",
    emoji: "\uD83C\uDF93",
    excerpt:
      "Another set of young Nigerians complete the SSU Programme — equipped with digital and vocational skills and ready to earn.",
    body: `Cohort 2 closed with a portfolio showcase, employer roundtable, and an alumni induction. Internship matches and startup capital coordination follow this cohort over the coming weeks.`,
  },
  {
    slug: "drug-donations-jikwoyi-clinic",
    title:
      "CNF Enhances Healthcare Access with Drug Donations in Jikwoyi, Abuja",
    date: "2025-10-08",
    tag: "Outreach",
    category: "healthcare",
    ribbon: "HEALTHCARE",
    emoji: "\uD83D\uDC8A",
    excerpt:
      "Essential medications donated to a community clinic in Jikwoyi — improving basic healthcare access for hundreds of residents.",
    body: `The donation included general antibiotics, antimalarials, and child-safe formulations. Distribution is overseen by the clinic's resident medical officer.`,
  },
  {
    slug: "ssu-cohort-1-graduation",
    title:
      "CNF Graduates First Cohort of the Skill Scale-Up Programme",
    date: "2025-07-11",
    tag: "Milestone",
    category: "skill-development",
    ribbon: "SKILL DEVELOPMENT",
    emoji: "\uD83C\uDFC6",
    excerpt:
      "A landmark moment — CNF's inaugural SSU cohort crosses the finish line. The first graduates step into employment, business, and mentorship.",
    body: `Closing ceremony hosted partners, mentors, and family. Graduate pathways were announced alongside an alumni mentor pledge to support Cohort 2.`,
  },
  {
    slug: "project-wash-secondary-schools",
    title:
      "Project WASH \u2014 CNF Promotes Hygiene Among Secondary School Students",
    date: "2025-05-09",
    tag: "Outreach",
    category: "healthcare",
    ribbon: "HEALTHCARE",
    emoji: "\uD83D\uDEBF",
    excerpt:
      "CNF delivers hygiene and sanitation education in secondary schools — because health awareness starts young.",
    body: `Sessions covered hand-washing, water sanitation, menstrual hygiene, and infection control. Schools received hygiene kits to support practice.`,
  },
  {
    slug: "ssu-launch",
    title:
      "CNF Launches the Skill Scale-Up Programme to Empower Youths in Digital and Vocational Skills",
    date: "2025-04-14",
    tag: "Launch",
    category: "skill-development",
    ribbon: "SKILL DEVELOPMENT",
    emoji: "\uD83D\uDE80",
    excerpt:
      "The flagship SSU Programme launches in Abuja — CNF's boldest commitment to equipping underserved youth with future-ready skills.",
    body: `The launch convened community leaders, partners, and media to introduce the programme tracks (Digital & Tech, Vocational, Total Man Module) and the post-training support model.`,
  },
  {
    slug: "festive-food-relief-gonin-gora",
    title:
      "CNF Brightens the Festive Season with Food Relief Outreach in Gonin Gora, Kaduna",
    date: "2024-12-10",
    tag: "Outreach",
    category: "humanitarian-aid",
    ribbon: "HUMANITARIAN AID",
    emoji: "\uD83C\uDF84",
    excerpt:
      "Families in Gonin Gora receive essential food items during the festive season — ensuring no one goes hungry during the holidays.",
    body: `Distribution was coordinated with community leaders and local volunteers. Packages included staple grains, cooking oil, and child-friendly supplements where available.`,
  },
  {
    slug: "menstrual-hygiene-education-mpape",
    title:
      "CNF and FemPower Empower Young Girls in Mpape with Menstrual Hygiene Education",
    date: "2024-10-11",
    tag: "Partnership",
    category: "healthcare",
    ribbon: "HEALTHCARE",
    emoji: "\uD83E\uDE7A",
    excerpt:
      "In partnership with FemPower, CNF delivers menstrual hygiene education and support to young girls in Mpape — breaking the silence around a critical health issue.",
    body: `Sessions combined health literacy, dignity kits, and referral information to trusted clinics. Community feedback will inform the next phase of the programme.`,
  },
  {
    slug: "project-heem-kuchingoro-idp",
    title:
      "New Kuchingoro IDP Camp Receives Free Medical Services, Scholarships, and Food Relief via Project HEEM",
    date: "2024-09-10",
    tag: "Impact",
    category: "humanitarian-aid",
    ribbon: "HUMANITARIAN AID",
    emoji: "\uD83C\uDF81",
    excerpt:
      "CNF brings Project HEEM to displaced families at New Kuchingoro IDP Camp — delivering healthcare, scholarships, and food in one of Abuja's most vulnerable communities.",
    body: `Medical desks, learning packs, and hot meals were organised in sequence to reduce waiting times for families with children.`,
  },
  {
    slug: "kuje-maternal-child-health",
    title:
      "Prioritising Maternal & Child Health: CNF Grants Medical Support to Patients in Kuje Hospitals",
    date: "2024-06-10",
    tag: "Outreach",
    category: "healthcare",
    ribbon: "HEALTHCARE",
    emoji: "\uD83C\uDFE5",
    excerpt:
      "CNF visits Kuje General Hospital offsetting outstanding medical bills — prioritising pregnant women and children among the most vulnerable patients.",
    body: `The visit cleared a queue of outstanding bills for a number of mothers and children, and supplied basic ward consumables.`,
  },
  {
    slug: "academic-outreach-uplifts-futures",
    title: "CNF's Academic Outreach Gives Hope and Uplifts Futures",
    date: "2024-05-14",
    tag: "Programme",
    category: "education",
    ribbon: "EDUCATION",
    emoji: "\uD83D\uDCDA",
    excerpt:
      "School fees paid, exam costs covered, and children re-enrolled — CNF's education outreach gives deserving students a second chance at their futures.",
    body: `Beneficiaries were nominated by partner schools based on need. Each placement is reviewed termly to ensure continuity of support.`,
  },
  {
    slug: "plateau-inaugural-food-relief",
    title:
      "CNF Kicks Off Its Inaugural Outreach with Food Relief Programme in Plateau",
    date: "2024-03-09",
    tag: "Origin",
    category: "humanitarian-aid",
    ribbon: "HUMANITARIAN AID",
    emoji: "\uD83E\uDD6B",
    excerpt:
      "CNF's very first community outreach — a food relief programme in Plateau State — marks the beginning of a mission that has since grown to reach thousands across Nigeria.",
    body: `The inaugural outreach distributed staples to vulnerable families and laid the groundwork for the foundation's wider humanitarian pillar.`,
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
