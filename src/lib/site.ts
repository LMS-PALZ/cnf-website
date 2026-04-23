export const site = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Chiggy Nsofor Foundation",
  shortName: "CNF",
  tagline: "Skills, Education & Humanitarian Aid",
  description:
    "A Nigerian nonprofit advancing skills, education, and humanitarian aid in communities across Nigeria.",
  footerTagline:
    "Providing Opportunities, Impacting Lives. A Nigerian NGO building a future where no vulnerable person is left behind.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "chiggy@cnfhq.org",
  partnershipsEmail: "partnerships@chiggynsoforfoundation.org",
  phone: "+234 809 985 7111",
  address: "16b Vaal Street, Maitama, Abuja",
  registrationLine: "CAC No. 7511818",
} as const;

export type NavItem = { href: string; label: string };

/** Primary navigation — labels aligned with foundation design; logo covers Home. */
export const mainNav: NavItem[] = [
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/programmes/skill-scale-up", label: "SSU Programme" },
  { href: "/projects", label: "Projects" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/news", label: "News" },
];
