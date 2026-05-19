import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeEyebrowClassName } from "@/components/sections/home/homeEyebrow";
import { testimonials } from "@/data/home/testimonials";
import { VoicesTestimonialCarousel } from "./VoicesTestimonialCarousel";

export function VoicesSection() {
    return (
        <Section tone="light" padding="lg" ariaLabelledBy="voices-title">
            <Reveal>
                <SectionHeader
                    id="voices-title"
                    eyebrow="Voices"
                    eyebrowClassName={homeEyebrowClassName}
                    title={
                        <>
                            What People <span className="text-cnf-accent">Say</span>
                        </>
                    }
                />
            </Reveal>

            <VoicesTestimonialCarousel testimonials={testimonials} />
        </Section>
    );
}
