import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function AboutAnnualReportSection() {
    return (
        <section className="bg-cnf-surface py-20 md:py-28">
            <Container>
                <div className="overflow-hidden rounded-[2rem] bg-cnf-night px-8 py-10 text-white shadow-2xl shadow-black/10">
                    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cnf-accent/80">
                                Accountability &amp; Transparency
                            </p>
                            <h2 className="mt-4 text-3xl font-semibold">CNF 2025 Annual Report</h2>
                            <p className="mt-4 text-base leading-8 text-cnf-cream/80">
                                Full programme results, financials, and impact data, published openly for every
                                partner, funder, and community we serve.
                            </p>
                        </div>
                        <div className="flex items-center justify-start lg:justify-end">
                            <ButtonLink
                                href="/news"
                                className="bg-cnf-accent text-cnf-accent-ink hover:bg-cnf-accent-hover"
                            >
                                Download Report
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
