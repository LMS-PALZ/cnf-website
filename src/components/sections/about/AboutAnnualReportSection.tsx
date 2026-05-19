import { accentEyebrowClassName } from "@/components/sections/home/homeEyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export function AboutAnnualReportSection() {
    return (
        <section className="bg-cnf-primary-soft py-20 md:py-28">
            <Container>
                <div className="overflow-hidden rounded-[2rem] bg-cnf-night px-8 py-10 text-white shadow-2xl shadow-black/10">
                    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
                        <div>
                            <p className={cn(accentEyebrowClassName, "font-bold text-cnf-accent")}>
                                Accountability &amp; Transparency
                            </p>
                            <h2 className="mt-4 text-3xl font-bold text-white">
                                CNF 2025 Annual Report
                            </h2>
                            <p className="mt-4 text-base font-semibold leading-8 text-white">
                                Full programme results, financials, and impact data, published openly for every
                                partner, funder, and community we serve.
                            </p>
                        </div>
                        <div className="flex items-center justify-start lg:justify-end">
                            <ButtonLink
                                href={site.annualReportUrl}
                                external
                                variant="ghost"
                                ariaLabel="Download CNF 2025 Annual Report (opens in a new tab)"
                                className="!animate-none border-2 border-cnf-accent bg-cnf-accent text-white shadow-none transition-all duration-200 hover:!scale-[0.98] hover:!border-white/80 hover:!bg-transparent hover:!text-white"
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
