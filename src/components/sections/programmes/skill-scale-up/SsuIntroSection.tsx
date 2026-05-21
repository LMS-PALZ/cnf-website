import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { ssuIntro } from "@/data/programmes/skill-scale-up";

export function SsuIntroSection() {
    return (
        <section
            aria-labelledby="ssu-intro-title"
            className="border-b border-cnf-border bg-white py-16 md:py-24"
        >
            <Container className="max-w-4xl text-center">
                <h2
                    id="ssu-intro-title"
                    className={`${fontDisplay.className} mx-auto max-w-[24rem] text-2xl font-bold leading-snug text-cnf-ink sm:max-w-[28rem] md:max-w-[34rem] md:text-4xl`}
                >
                    {ssuIntro.title}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base text-cnf-muted md:text-lg">
                    {ssuIntro.subtitle}
                </p>
                <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    {ssuIntro.highlights.map((label) => (
                        <li key={label}>
                            <span
                                className={cn(
                                    "inline-flex rounded-full px-4 py-2 text-xs font-medium text-cnf-ink md:text-sm",
                                    "bg-cnf-pillar-skills-soft",
                                )}
                            >
                                {label}
                            </span>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
