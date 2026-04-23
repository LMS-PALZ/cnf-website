export const site = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Chiggy Nsofor Foundation",
  shortName: "CNF",
  tagline: "Skills, Education & Humanitarian Aid",
  description:
    "A Nigerian nonprofit advancing skills, education, and humanitarian aid in communities across Nigeria.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: "hello@chiggynsoforfoundation.org",
  partnershipsEmail: "partnerships@chiggynsoforfoundation.org",
} as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/projects", label: "Projects" },
  { href: "/programmes/skill-scale-up", label: "Skill Scale-Up" },
  { href: "/news", label: "News" },
  { href: "/get-involved", label: "Get Involved" },
];
