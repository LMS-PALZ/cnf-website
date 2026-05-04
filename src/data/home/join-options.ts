export type JoinOption = {
  id: "donate" | "partner" | "volunteer";
  iconKey: "heart" | "handshake" | "wave";
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export const joinOptions: JoinOption[] = [
  {
    id: "donate",
    iconKey: "heart",
    title: "Donate",
    description:
      "Your financial contribution directly funds our programmes — from SSU training kits to food relief packages and medical outreaches.",
    ctaLabel: "Give now",
    href: "/donate",
  },
  {
    id: "partner",
    iconKey: "handshake",
    title: "Partner with us",
    description:
      "Whether you're a business, institution, or community leader — strategic partnerships help us scale our impact further and faster.",
    ctaLabel: "Become a partner",
    href: "/get-involved#partner",
  },
  {
    id: "volunteer",
    iconKey: "wave",
    title: "Volunteer",
    description:
      "Give your time and skills. From programme delivery to event support to communications — there's a role for every willing hand.",
    ctaLabel: "Volunteer",
    href: "/get-involved#volunteer",
  },
];
