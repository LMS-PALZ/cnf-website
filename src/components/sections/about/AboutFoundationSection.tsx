import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";

const FOUNDATION_BG = "/assets/ourWorkImgs/community%20aid.jpg";

const pillars = [
    {
        title: "Our Mission",
        text: "We create opportunity for underserved Nigerians to reach their potential, through skills, education, and care.",
    },
    {
        title: "Our Vision",
        // headline: "A Nigeria Where No One Is Left Behind",
        text: "A Nigeria where no one is held back by where they started.",
    },
] as const;

export function AboutFoundationSection() {
    return (
        <section className="relative overflow-hidden py-14 text-white md:py-20">
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
                <h2
                    className={`${fontDisplay.className} text-4xl font-semibold text-cnf-accent md:text-5xl`}
                >
                    Mission &amp; Vision
                </h2>
                <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-white md:text-lg">
                    Every decision we make, every programme we run, every partner we choose,
                    flows from these core commitments.
                </p>

                <div className="mt-8 grid gap-5 lg:grid-cols-2">
                    {pillars.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.14]"
                        >
                            <h3
                                className={`${fontDisplay.className} text-2xl font-bold text-white md:text-3xl`}
                            >
                                {item.title}
                            </h3>
                            <p className="mt-3 text-base font-semibold leading-7 text-white">
                                {item.text}
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
