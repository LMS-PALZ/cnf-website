import type { IconRegistryKey } from "@/components/ui/iconRegistry";

export type TrustPointTone = "accent" | "white" | "soft" | "warm";

export type TrustPoint = {
  id: string;
  iconKey: IconRegistryKey;
  iconTone: TrustPointTone;
  title: string;
  description: string;
};

export const trustPoints: TrustPoint[] = [
  {
    id: "secure",
    iconKey: "lock",
    iconTone: "accent",
    title: "Secure Payments",
    description:
      "All online donations processed securely via Korapay \u2014 a trusted Nigerian payment platform.",
  },
  {
    id: "transparent",
    iconKey: "chart",
    iconTone: "white",
    title: "Full Transparency",
    description:
      "Our Annual Report is publicly available. See exactly how every naira is deployed.",
  },
  {
    id: "registered",
    iconKey: "building",
    iconTone: "soft",
    title: "Registered NGO",
    description:
      "CAC registered (No. 7511818). A legitimate, accountable Nigerian non-profit organisation.",
  },
  {
    id: "direct-impact",
    iconKey: "target",
    iconTone: "warm",
    title: "Direct Impact",
    description:
      "No donation is wasted on unnecessary overhead. Our \u223C12% overhead ratio keeps funds where they belong.",
  },
];
