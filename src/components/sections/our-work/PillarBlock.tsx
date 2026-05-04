import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ArrowRightIcon } from "@/components/ui/icons";
import { PillarFeatureRow } from "./PillarFeatureRow";
import { PillarMediaCard } from "./PillarMediaCard";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { pillarTheme } from "@/lib/pillar-theme";
import type { PillarBlockData } from "@/data/our-work/pillars";

type Props = {
  pillar: PillarBlockData;
  /** Alternate the section background so consecutive blocks don't merge. */
  surface?: "cream" | "light";
};

/**
 * Full-bleed two-column pillar block. Reusable for all three pillars on
 * the Our Work page; `pillar.reversed` flips the column order so Education
 * (Pillar Two) reads media-first.
 */
export function PillarBlock({ pillar, surface = "cream" }: Props) {
  const t = pillarTheme[pillar.theme];

  return (
    <Section
      tone={surface}
      padding="lg"
      ariaLabelledBy={`${pillar.id}-heading`}
      id={pillar.id}
    >
      <div
        className={cn(
          "grid gap-10 lg:grid-cols-2 lg:gap-14",
          pillar.reversed && "lg:[&>:first-child]:order-2"
        )}
      >
        <div className="flex flex-col">
          <span
            className={cn(
              "inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] shadow-sm",
              t.text
            )}
          >
            <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", t.dot)} />
            {pillar.pillarLabel}
          </span>

          <h2
            id={`${pillar.id}-heading`}
            className={cn(
              fontDisplay.className,
              "mt-6 text-4xl font-semibold leading-[1.05] text-cnf-ink md:text-5xl"
            )}
          >
            {pillar.heading}
            <br />
            <span className={t.text}>{pillar.subheading}</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cnf-ink md:text-lg">
            {pillar.lead}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cnf-muted md:text-base">
            {pillar.body}
          </p>

          <div className="mt-8 grid gap-3">
            {pillar.features.map((f) => (
              <PillarFeatureRow
                key={f.title}
                iconKey={f.iconKey}
                title={f.title}
                description={f.description}
                theme={pillar.theme}
              />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={pillar.cta.href}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent",
                t.button
              )}
            >
              {pillar.cta.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <PillarMediaCard
          theme={pillar.theme}
          mediaLabel={pillar.mediaLabel}
          reachStat={pillar.reachStat}
          smallStats={pillar.smallStats}
        />
      </div>
    </Section>
  );
}
