import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { ssuGainsSection } from "@/data/programmes/skill-scale-up";
import { SsuSectionHeading } from "./SsuSectionHeading";
import { SsuWaitlistButton } from "./SsuWaitlistButton";

export function SsuGainsSection() {
    return (
        <section
            aria-labelledby="ssu-gains-title"
            className="border-b border-cnf-border bg-white py-14 md:py-20"
        >
            <Container>
                <SsuSectionHeading
                    title={ssuGainsSection.title}
                    subtitle={ssuGainsSection.subtitle}
                    action={<SsuWaitlistButton size="md" />}
                />

                <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {ssuGainsSection.items.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.title}>
                                <Card
                                    tone="cream"
                                    padding="md"
                                    className="h-full border-cnf-border/80 bg-[#f8f6f1]"
                                >
                                    <Icon
                                        className="h-6 w-6 text-cnf-ink"
                                        aria-hidden
                                    />
                                    <h3
                                        className={`${fontDisplay.className} mt-4 text-lg font-semibold text-cnf-ink`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-cnf-muted">
                                        {item.description}
                                    </p>
                                </Card>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
