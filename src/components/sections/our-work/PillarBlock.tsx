import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PillarFeatureRow } from "./PillarFeatureRow";
import { PillarMediaCard } from "./PillarMediaCard";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { pillarTheme } from "@/lib/pillar-theme";
import type { PillarBlockData } from "@/data/our-work/pillars";

type Props = {
    pillar: PillarBlockData;
    surface?: "cream" | "light";
};

export function PillarBlock({ pillar, surface = "cream" }: Props) {
    const t = pillarTheme[pillar.theme];
    return (<Section tone={surface} padding="lg" ariaLabelledBy={`${pillar.id}-heading`} id={pillar.id} className="scroll-mt-28">
      <Reveal>
      <div className={cn("grid gap-10 lg:grid-cols-2 lg:gap-14", pillar.reversed && "lg:[&>:first-child]:order-2")}>
        <div className="flex flex-col">
          <span className={cn("inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] shadow-sm", t.text)}>
            <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", t.dot)}/>
            {pillar.pillarLabel}
          </span>

          <h2 id={`${pillar.id}-heading`} className={cn(fontDisplay.className, "mt-6 text-4xl font-semibold leading-[1.05] text-cnf-ink md:text-5xl")}>
            {pillar.heading}
            <br />
            <span className={t.text}>{pillar.subheading}</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cnf-ink md:text-lg">
            {pillar.lead}
          </p>
          <div className="mt-4 max-w-2xl space-y-4 text-sm leading-relaxed text-cnf-muted md:text-base">
            {(Array.isArray(pillar.body) ? pillar.body : [pillar.body]).map(
              (paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ),
            )}
          </div>

          <div className="mt-8 grid gap-3">
            {pillar.features.map((f) => (<PillarFeatureRow key={f.title} title={f.title} description={f.description}/>))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <Link href={pillar.cta.href} className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent", t.button)}>
              {pillar.cta.label}
              <span aria-hidden className="text-sm leading-none">&rarr;</span>
            </Link>
            {pillar.secondaryCta ? (
              <ButtonLink
                href={pillar.secondaryCta.href}
                variant="ghost"
                size="md"
                className={cn(t.text, "px-0 hover:bg-transparent hover:opacity-80")}
              >
                <span className="inline-flex items-center gap-2">
                  {pillar.secondaryCta.label}
                  <span aria-hidden className="text-sm leading-none">&rarr;</span>
                </span>
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <PillarMediaCard theme={pillar.theme} mediaLabel={pillar.mediaLabel} reachStat={pillar.reachStat} smallStats={pillar.smallStats} heroImageSrc={pillar.heroImageSrc}/>
      </div>
      </Reveal>
    </Section>);
}
