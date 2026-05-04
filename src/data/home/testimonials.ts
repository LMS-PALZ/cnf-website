export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  /** Drives the avatar background colour. Tied to the pillar the quote sits under. */
  pillar: "skills" | "education" | "humanitarian";
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "toru-dada",
    quote:
      "I am highly impressed. You looked to the indigent area and paid their outstanding school fees and examination fees. When I look at you, I say you are as a vacuum.",
    name: "Rev. Toru-Dada Adoramone",
    role: "Founder, St. Mary's Academy",
    pillar: "education",
    rating: 5,
  },
  {
    id: "kuje-matron",
    quote:
      "Thank you for coming to the hospital to see the patients and for the bills that were offset. We pray that God will bless you richly and we want more of this.",
    name: "Kuje Matron",
    role: "Kuje General Hospital",
    pillar: "humanitarian",
    rating: 5,
  },
  {
    id: "hafsatu-usman",
    quote:
      "We got free medication, food items, start-up capital for business and scholarship for our child. We are so grateful for remembering us. God bless you.",
    name: "Hafsatu Usman",
    role: "Programme beneficiary",
    pillar: "skills",
    rating: 5,
  },
];
