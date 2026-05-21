import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { ssuFaqs } from "@/data/programmes/skill-scale-up";

export function SsuFaqSection() {
    return (
        <section
            aria-labelledby="ssu-faq-title"
            className="border-t border-cnf-border bg-cnf-surface py-14 md:py-20"
        >
            <Container className="max-w-3xl">
                <header className="text-center">
                    <h2
                        id="ssu-faq-title"
                        className={`${fontDisplay.className} text-3xl font-bold text-cnf-ink md:text-4xl`}
                    >
                        FAQs
                    </h2>
                    <p className="mt-2 text-base text-cnf-muted">
                        Got Questions? We&apos;ve Got Answers
                    </p>
                </header>

                <div className="mt-10 overflow-hidden rounded-xl border border-cnf-border bg-white shadow-sm">
                    <FaqAccordion items={ssuFaqs} defaultOpenIndex={0} />
                </div>
            </Container>
        </section>
    );
}
