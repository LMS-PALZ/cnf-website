import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homePillars } from "@/data/home/pillars-detailed";
import { PillarHomeCard } from "./PillarHomeCard";

export function OurWorkSection() {
    return (
        <Section tone="light" padding="lg" ariaLabelledBy="our-work-title" id="our-work">
            <Reveal>
                <SectionHeader
                    id="our-work-title"
                    eyebrow="Our work"
                    title="Three Pillars."
                    titleAccent="One Mission."
                    description="Every programme we run sits under one of three interconnected pillars, a holistic response to the challenges facing underserved Nigerians."
                />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {homePillars.map((pillar, i) => (
                    <Reveal key={pillar.id} delay={Math.min(i + 1, 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                        <PillarHomeCard pillar={pillar} />
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
