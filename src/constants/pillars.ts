export type PillarId = "skills" | "education" | "humanitarian";

export type Pillar = {
  id: PillarId;
  title: string;
  shortLabel: string;
  summary: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  links: { href: string; label: string }[];
};

/** Shared copy for Home preview and Projects deep sections */
export const pillars: Pillar[] = [
  {
    id: "skills",
    title: "Skills",
    shortLabel: "Skills & livelihoods",
    summary:
      "Employability programmes, digital literacy, and entrepreneurship support for young people.",
    body: "We invest in practical training—from digital tools to business basics—so participants can earn with dignity. Our flagship Skill Scale-Up programme expands access to free, structured learning in Nigerian communities.",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "People collaborating around laptops in a workshop setting",
    links: [
      { href: "/programmes/skill-scale-up", label: "Explore Skill Scale-Up" },
      { href: "/our-work", label: "How we deliver programmes" },
    ],
  },
  {
    id: "education",
    title: "Education",
    shortLabel: "Access & quality",
    summary:
      "Improving access to learning, learning materials, and pathways that keep children and youth in school.",
    body: "We partner with schools and community educators to strengthen learning environments. Specific initiatives will be updated as programmes are confirmed with local partners.",
    imageSrc:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Children studying together at desks in a classroom",
    links: [
      { href: "/projects#education", label: "Education pillar details" },
      { href: "/get-involved", label: "Volunteer or partner" },
    ],
  },
  {
    id: "humanitarian",
    title: "Humanitarian aid",
    shortLabel: "Relief & community support",
    summary:
      "Targeted relief, essential supplies, and community-led support during hardship and emergencies.",
    body: "Our humanitarian work prioritises dignity, local leadership, and transparent use of resources. Programme locations and activation protocols are aligned with verified community needs.",
    imageSrc:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Volunteers organising supplies for community distribution",
    links: [
      { href: "/projects#humanitarian", label: "Humanitarian pillar details" },
      { href: "/donate", label: "Support this work" },
    ],
  },
];
