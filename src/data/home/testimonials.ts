export type Testimonial = {
    id: string;
    quote: string;
    name: string;
    role: string;
    pillar: "skills" | "education" | "humanitarian";
};
export const testimonials: Testimonial[] = [
    {
        id: "toru-dada",
        quote: "Your visit moved us deeply. You spoke powerfully to our young female students, then sought out those who couldn't afford their WAEC and NECO fees and paid them. You are truly uncommon. May God bless you.",
        name: "Rev. Tony-Dada Aderomose",
        role: "Founder, St. Phillip's Academy",
        pillar: "education",
    },
    {
        id: "kuje-matron",
        quote: "Thank you for coming to the hospital to see the patients and for the bills that were offset. We pray that God will bless you richly and we want more of this.",
        name: "Kuje Matron",
        role: "Kuje General Hospital",
        pillar: "humanitarian",
    },
    {
        id: "hafsatu-usman",
        quote: "We got free medication, food items, start-up capital for business and scholarship for our child. We are so grateful for remembering us. God bless you.",
        name: "Hafsatu Usman",
        role: "Humanitarian Aid Beneficiary",
        pillar: "skills",
    },
    {
        id: "nana-firdausi",
        quote: "Thank you so much CNF Captain and Army for impacting our lives, we really appreciate. If something comes up even if it’s not skill scale up and you need our assistance just call and we will turn up by God’s grace. We love you.",
        name: "Nana Firdausi",
        role: "Skill Scale-Up Beneficiary",
        pillar: "education",
    },
    {
        id: "winner-emmanuel ",
        quote: "Chiggy Nsofor Foundation, thank you for changing my life. Your support made my digital marketing education possible, and I'm forever grateful. Because of you, I’ve learned valuable skills and gained confidence to build a better future. I promise to work hard and help others too. God bless you for all the good you do.",        
        name: "Winner Emmanuel",
        role: "Skill Scale-Up Beneficiary",
        pillar: "education",
    },
];
