import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { programmeFunds } from "@/data/donate/programme-funds";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { pillarTheme } from "@/lib/pillar-theme";

/**
 * "Your Donation Funds These Programmes" — three full-colour pillar cards
 * (Skill Development, Education, Humanitarian). Re-uses `pillarTheme` so
 * the colour palette stays in lock-step with the Our Work page.
 */
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
          title="Your Donation Funds"
          titleAccent="These Programmes"
          accent="primary"
          description="Every gift supports one or more of CNF\u2019s three active programme pillars. All in-person programmes are fully free to beneficiaries. An online SSU tier with a \u20A620,000 application fee is also available."
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
                    "group relative flex w-full flex-col rounded-2xl p-6 text-white transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent md:p-8"
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex w-fit rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em]",
                      p.theme === "skills" ? "text-cnf-accent-ink" : "text-white"
                    )}
                  >
                    {p.pillarLabel}
                  </span>
                  <h3
                    className={cn(
                      fontDisplay.className,
                      "mt-4 text-2xl font-semibold leading-tight md:text-3xl",
                      p.theme === "skills" ? "text-cnf-accent-ink" : "text-white"
                    )}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-5 text-sm leading-relaxed",
                      p.theme === "skills"
                        ? "text-cnf-accent-ink/80"
                        : "text-white/85"
                    )}
                  >
                    {p.description}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
