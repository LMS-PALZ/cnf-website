import { primaryEyebrowClassName } from "@/components/sections/home/homeEyebrow";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { giveOptions } from "@/data/donate/give-options";
import { site } from "@/lib/site";
import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/cn";
import { BankAccountCard } from "./BankAccountCard";

const hrefForOption: Record<string, string> = {
    abroad: `mailto:${site.infoEmail}?subject=International donation enquiry`,
};

export function HowToGiveSection() {
    return (
        <section
            id="how-to-give"
            aria-labelledby="how-to-give-title"
            className="scroll-mt-24 bg-cnf-surface py-16 md:py-24"
        >
            <Container>
                <SectionHeader
                    eyebrow="How to give"
                    eyebrowClassName={primaryEyebrowClassName}
                    title="Three Ways to"
                    titleAccent="Donate"
                    accent="primary"
                    description="Choose the option that works best for you. Bank transfers go directly to CFO programmes."
                    id="how-to-give-title"
                />

                <ul className="mt-12 grid gap-6 md:grid-cols-3">
                    {giveOptions.map((opt) => (
                        <li key={opt.id} className="flex">
                            <Card
                                tone="elevated"
                                padding="lg"
                                className="flex w-full flex-col text-center"
                            >
                                <div className="flex flex-col items-center">
                                    <h3
                                        className={cn(
                                            fontDisplay.className,
                                            "text-2xl font-semibold text-cnf-ink",
                                        )}
                                    >
                                        {opt.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-cnf-muted">
                                        {opt.description}
                                    </p>
                                </div>

                                <div className="mt-6 flex flex-1 flex-col justify-end">
                                    {opt.action === "outline" && opt.ctaLabel ? (
                                        <ButtonLink
                                            href={hrefForOption[opt.id]}
                                            variant="secondary"
                                            size="md"
                                            className="w-full"
                                        >
                                            <span className="inline-flex items-center gap-2">
                                                {opt.ctaLabel}
                                                <span
                                                    aria-hidden
                                                    className="text-base leading-none"
                                                >
                                                    &rarr;
                                                </span>
                                            </span>
                                        </ButtonLink>
                                    ) : null}

                                    {opt.action === "bank-card" && opt.bankRows ? (
                                        <BankAccountCard rows={opt.bankRows} />
                                    ) : null}
                                </div>
                            </Card>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
