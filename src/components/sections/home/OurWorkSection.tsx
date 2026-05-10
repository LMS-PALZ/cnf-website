import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homePillars } from "@/data/home/pillars-detailed";
import { PillarHomeCard } from "./PillarHomeCard";
export function OurWorkSection() {
    return (<Section tone="light" padding="lg" ariaLabelledBy="our-work-title" id="our-work">
      <SectionHeader id="our-work-title" eyebrow="Our work" title="Three Pillars." titleAccent="One Mission." description="Every programme we run sits under one of three interconnected pillars, a holistic response to the challenges facing underserved Nigerians."/>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {homePillars.map((pillar) => (<PillarHomeCard key={pillar.id} pillar={pillar}/>))}
      </div>
    </Section>);
}
