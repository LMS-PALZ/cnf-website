import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
    homeEyebrowClassName,
    homeSoftSectionClassName,
} from "@/components/sections/home/homeEyebrow";
import { Stat } from "@/components/ui/Stat";
import { HOME_HERO_CAROUSEL_SLIDES } from "@/data/home/carousel-images";
import { impactStats } from "@/data/home/flagship";
import { ImpactGallery } from "./ImpactGallery";

export function ImpactSection() {
    return (
        <Section
            tone="surface"
            padding="lg"
            ariaLabelledBy="impact-title"
            id="impact"
            className={homeSoftSectionClassName}
        >
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal direction="left">
                    <SectionHeader
                        id="impact-title"
                        eyebrow="Results"
                        eyebrowClassName={homeEyebrowClassName}
                        title={
                            <>
                                Our <span className="text-cnf-accent">Impact</span> So Far
                            </>
                        }
                        tone="light"
                        accent="accent"
                        description="Since 2024, building momentum, one community, one life at a time."
                    />

                    <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5">
                        {impactStats.map((stat, index) => (
                            <Card
                                key={stat.label}
                                tone="elevated"
                                padding="lg"
                                className={cn(
                                    "text-center shadow-sm transition-shadow duration-300 hover:shadow-md",
                                    index === impactStats.length - 1 && "col-span-2",
                                )}
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <Stat
                                        value={stat.value}
                                        label={stat.label}
                                        tone="light"
                                        size="md"
                                    />
                                </div>
                            </Card>
                        ))}
                    </div>
                </Reveal>

                <Reveal direction="right" delay={1}>
                    <ImpactGallery slides={HOME_HERO_CAROUSEL_SLIDES} />
                </Reveal>
            </div>
        </Section>
    );
}
