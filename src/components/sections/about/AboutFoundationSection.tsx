import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";

const FOUNDATION_BG = "/assets/ourWorkImgs/community%20aid.jpg";

const pillars = [
    {
        title: "Our Mission",
        headline: "To Provide & To Build",
        text: "To provide essential support and build lasting capacity in individuals and communities across Nigeria, creating pathways into opportunity for underserved people and communities.",
    },
    {
        title: "Our Vision",
        headline: "A Nigeria Where No One Is Left Behind",
        text: "We envision a Nigeria where every underserved person, regardless of background, location, or circumstance, is given a genuine opportunity to live a better quality of life.",
    },
] as const;

export function AboutFoundationSection() {
    return (
        <section className="relative overflow-hidden py-20 text-white md:py-28">
            <div className="absolute inset-0 bg-cnf-ink" aria-hidden>
                <Image
                    src={FOUNDATION_BG}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    aria-hidden
                />
                <div
                    className="absolute inset-0 bg-gradient-to-br from-cnf-primary/88 via-cnf-primary/72 to-cnf-ink/65"
                    aria-hidden
                />
                <div
                    className="cnf-dot-pattern absolute inset-0 opacity-[0.12]"
                    aria-hidden
                />
            </div>

            <Container className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-accent">
                    Our Foundation
                </p>
                <h2
                    className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-white md:text-5xl`}
                >
                    Mission &amp; Vision
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
                    Every decision we make, every programme we run, every partner we choose,
                    flows from these core commitments.
                </p>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {pillars.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-2xl border border-white/15 bg-white/10 p-8 shadow-xl backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.14]"
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cnf-accent">
                                {item.title}
                            </p>
                            <h3 className={`${fontDisplay.className} mt-4 text-2xl font-semibold text-white md:text-3xl`}>
                                {item.headline}
                            </h3>
                            <p className="mt-4 text-base leading-8 text-white/80">{item.text}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
