import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
    homeEyebrowClassName,
    homeSoftSectionClassName,
} from "@/components/sections/home/homeEyebrow";

export function WhoWeAreSection() {
    return (
        <Section
            tone="surface"
            padding="lg"
            ariaLabelledBy="who-we-are-title"
            className={cn(homeSoftSectionClassName, "pb-4 md:pb-6")}
        >
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <Reveal direction="left" className="lg:col-span-5">
                    <SectionHeader
                        id="who-we-are-title"
                        eyebrow="Who we are"
                        eyebrowClassName={homeEyebrowClassName}
                        title="Built on Purpose."
                        titleAccent="Driven by People."
                        accent="primary"
                    />
                </Reveal>

                <Reveal direction="right" delay={1} className="lg:col-span-7">
                    <div className="space-y-5 text-base leading-relaxed text-cnf-muted md:text-lg">
                        <p>
                            The <strong className="text-cnf-ink">Chiggy Foundation for Opportunity (CFO)</strong> is a
                            Nigerian nonprofit founded in 2024 on one belief: potential is everywhere, but
                            opportunity is not.
                        </p>
                        <p>
                            We work across three pillars, Economic Empowerment, Education, and Humanitarian
                            Aid, delivering programmes that build lasting capacity in individuals and
                            communities across Nigeria.
                        </p>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
