import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stat } from "@/components/ui/Stat";
import { impactStats } from "@/data/home/flagship";

/**
 * Green "Our Impact So Far" band. Visually pairs with FlagshipSection
 * directly above (dark → green vertical sequence).
 */
export function ImpactSection() {
  return (
    <Section
      tone="primary"
      padding="lg"
      ariaLabelledBy="impact-title"
      id="impact"
      className="bg-cnf-primary-soft"
    >
      <SectionHeader
        id="impact-title"
        eyebrow="Results"
        title={
          <>
            Our <span className="text-cnf-accent">Impact</span> So Far
          </>
        }
        tone="dark"
        accent="accent"
        description="Since 2024, building momentum — one community, one life at a time."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {impactStats.map((stat) => (
          <Card
            key={stat.label}
            tone="dark-soft"
            padding="lg"
            className="border-white/15 bg-white/10 text-center"
          >
            <div className="flex flex-col items-center gap-2">
              <Stat
                value={stat.value}
                label={stat.label}
                tone="primary"
                size="md"
              />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
