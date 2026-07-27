import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { DonatePayButton } from "@/components/payments/DonatePayButton";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
    homeEyebrowClassName,
    homeSoftSectionClassName,
} from "@/components/sections/home/homeEyebrow";
import { joinOptions, type JoinOption } from "@/data/home/join-options";
import { fontDisplay } from "@/lib/fonts";

function JoinCard({ option }: { option: JoinOption }) {
    return (
        <Card
            tone="elevated"
            padding="lg"
            className="flex h-full flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            as="article"
        >
            <h3
                className={`${fontDisplay.className} text-2xl font-semibold leading-tight text-cnf-ink`}
            >
                {option.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cnf-muted md:text-base">
                {option.description}
            </p>
            <div className="mt-6">
                {option.opensPayment ? (
                    <DonatePayButton variant="primary" size="md" purpose={option.title}>
                        {option.ctaLabel}
                    </DonatePayButton>
                ) : (
                    <ButtonLink href={option.href} variant="primary" size="md">
                        {option.ctaLabel}
                    </ButtonLink>
                )}
            </div>
        </Card>
    );
}

export function JoinUsSection() {
    return (
        <Section
            tone="light"
            padding="lg"
            ariaLabelledBy="join-us-title"
            className={homeSoftSectionClassName}
        >
            <Reveal>
                <SectionHeader
                    id="join-us-title"
                    eyebrow="Join us"
                    eyebrowClassName={homeEyebrowClassName}
                    title={
                        <>
                            Ready to Be{" "}
                            <span className="text-cnf-accent">Part of the Change?</span>
                        </>
                    }
                />
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3 lg:gap-8">
                {joinOptions.map((option, i) => (
                    <Reveal key={option.id} delay={Math.min(i + 1, 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                        <JoinCard option={option} />
                    </Reveal>
                ))}
            </div>

            <div
                id="stay-connected"
                aria-labelledby="stay-connected-title"
                className="mt-14 rounded-2xl bg-cnf-primary px-6 py-10 sm:px-10 md:mt-16 md:px-14 md:py-12"
            >
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                            Stay connected
                        </p>
                        <h2
                            id="stay-connected-title"
                            className={`${fontDisplay.className} mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl`}
                        >
                            Get CFO Updates
                            <br />
                            <span className="text-cnf-accent">Delivered to You</span>
                        </h2>
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
                            Join our mailing list for programme updates, impact stories, and news
                            from the communities we serve. No spam &mdash; just the stories that
                            matter.
                        </p>
                    </div>

                    <div className="w-full lg:max-w-xl lg:justify-self-end">
                        <NewsletterForm />
                    </div>
                </div>
            </div>
        </Section>
    );
}
