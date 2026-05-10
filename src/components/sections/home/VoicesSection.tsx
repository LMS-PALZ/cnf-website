import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/home/testimonials";
import { TestimonialCard } from "./TestimonialCard";
export function VoicesSection() {
    return (<Section tone="cream" padding="lg" ariaLabelledBy="voices-title">
      <SectionHeader id="voices-title" eyebrow="Voices" title={<>
            What People <span className="text-cnf-accent">Say</span>
          </>}/>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {testimonials.map((t) => (<TestimonialCard key={t.id} testimonial={t}/>))}
      </div>
    </Section>);
}
