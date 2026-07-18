import { SkillScaleUpHero } from "@/components/sections/programmes/SkillScaleUpHero";
import {
    SsuCtaSection,
    SsuFaqSection,
    SsuGainsSection,
    SsuIntroSection,
    SsuProgramsSection,
} from "@/components/sections/programmes/skill-scale-up";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
    "Skill Scale-Up - free youth training",
    "Join CFO's free Skill Scale-Up Programme: digital skills, vocational training, and life skills for underserved Nigerian youth aged 15–30.",
);

export default function SkillScaleUpPage() {
    return (
        <>
            <SkillScaleUpHero />
            <SsuIntroSection />
            <SsuGainsSection />
            <SsuProgramsSection />
            <SsuCtaSection />
            <SsuFaqSection />
        </>
    );
}
