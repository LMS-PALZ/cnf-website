import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stat } from "@/components/ui/Stat";
import { impactStats } from "@/data/home/flagship";
export function ImpactSection() {
    return (<Section tone="surface" padding="lg" ariaLabelledBy="impact-title" id="impact" className="!bg-cnf-primary-soft text-cnf-ink">
      <SectionHeader id="impact-title" eyebrow="Results" title={<>
            Our <span className="text-cnf-accent">Impact</span> So Far
          </>} tone="light" accent="accent" description="Since 2024, building momentum, one community, one life at a time."/>

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {impactStats.map((stat) => (<Card key={stat.label} tone="elevated" padding="lg" className="text-center shadow-sm">
            <div className="flex flex-col items-center gap-2">
              <Stat value={stat.value} label={stat.label} tone="light" size="md"/>
            </div>
          </Card>))}
      </div>
    </Section>);
}
