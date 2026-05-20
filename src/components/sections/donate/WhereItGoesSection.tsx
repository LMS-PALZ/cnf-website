import Link from "next/link";
import { primaryEyebrowClassName } from "@/components/sections/home/homeEyebrow";
import { CnfImage } from "@/components/ui/CnfImage";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { programmeFunds } from "@/data/donate/programme-funds";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { pillarTheme } from "@/lib/pillar-theme";

export function WhereItGoesSection() {
    return (
        <section
            id="where-it-goes"
            aria-labelledby="where-it-goes-title"
            className="scroll-mt-24 bg-white pb-16 md:pb-24"
        >
            <Container>
                <SectionHeader
                    eyebrow="Where it goes"
                    eyebrowClassName={primaryEyebrowClassName}
                    title="Your Donation Funds"
                    titleAccent="These Programmes"
                    accent="primary"
                    description="Every gift supports one or more of CNF’s three active programme pillars. All in-person programmes are fully free to beneficiaries. An online SSU tier with a ₦20,000 application fee is also available."
                    id="where-it-goes-title"
                />

                <ul className="mt-12 grid gap-6 md:grid-cols-3">
                    {programmeFunds.map((p) => {
                        const t = pillarTheme[p.theme];
                        return (
                            <li key={p.id} className="flex">
                                <Link
                                    href={`/our-work#${p.id}`}
                                    className={cn(
                                        t.surface,
                                        "group flex w-full flex-col overflow-hidden rounded-2xl text-white shadow-sm ring-1 ring-black/10 transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent",
                                    )}
                                >
                                    <div className="relative aspect-[16/10] w-full shrink-0">
                                        <CnfImage
                                            src={p.imageSrc}
                                            alt={p.imageAlt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div
                                            aria-hidden
                                            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10"
                                        />
                                        <span
                                            className={cn(
                                                "absolute left-4 top-4 inline-flex w-fit rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] backdrop-blur-sm",
                                                p.theme === "skills" ? "text-cnf-accent-ink" : "text-white",
                                            )}
                                        >
                                            {p.pillarLabel}
                                        </span>
                                        <h3
                                            className={cn(
                                                fontDisplay.className,
                                                "absolute inset-x-4 bottom-4 text-2xl font-semibold leading-tight text-white md:text-[1.65rem]",
                                            )}
                                        >
                                            {p.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-1 flex-col p-6 md:p-7">
                                        <p
                                            className={cn(
                                                "text-sm leading-relaxed",
                                                p.theme === "skills"
                                                    ? "text-cnf-accent-ink/80"
                                                    : "text-white/85",
                                            )}
                                        >
                                            {p.description}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
