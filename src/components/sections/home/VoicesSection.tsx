import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/home/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function VoicesSection() {
    return (
        <Section tone="cream" padding="lg" ariaLabelledBy="voices-title">
            <Reveal>
                <SectionHeader
                    id="voices-title"
                    eyebrow="Voices"
                    title={
                        <>
                            What People <span className="text-cnf-accent">Say</span>
                        </>
                    }
                />
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {testimonials.map((t, i) => (
                    <Reveal key={t.id} delay={Math.min(i + 1, 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                        <TestimonialCard testimonial={t} />
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
