import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { sdgCards, type SdgCard } from "@/data/our-work/sdgs";
const numberTone: Record<SdgCard["theme"], string> = {
    skills: "text-cnf-pillar-skills",
    education: "text-cnf-pillar-education",
    humanitarian: "text-cnf-pillar-humanitarian",
    accent: "text-cnf-accent",
};
const eyebrowTone: Record<SdgCard["theme"], string> = {
    skills: "text-cnf-pillar-skills",
    education: "text-cnf-pillar-education",
    humanitarian: "text-cnf-pillar-humanitarian",
    accent: "text-cnf-accent-hover",
};
export function SdgSection() {
    return (<Section tone="surface" padding="lg" ariaLabelledBy="sdg-title">
      <SectionHeader id="sdg-title" eyebrow="Global alignment" title={<>
            Aligned With the{" "}
            <span className="text-cnf-primary">UN Sustainable Development Goals</span>
          </>}/>

      <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
        {sdgCards.map((sdg) => (<Card key={sdg.number} tone="elevated" padding="md" className="flex items-start gap-5 bg-white" as="article">
            <div className="flex flex-col">
              <span className={cn("text-[11px] font-semibold uppercase tracking-[0.2em]", eyebrowTone[sdg.theme])}>
                SDG {sdg.number}
              </span>
              <span aria-hidden className={cn(fontDisplay.className, "mt-1 text-5xl font-semibold leading-none md:text-6xl", numberTone[sdg.theme])}>
                {sdg.number}
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-cnf-ink md:text-lg">
                {sdg.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cnf-muted">
                {sdg.description}
              </p>
            </div>
          </Card>))}
      </div>
    </Section>);
}
