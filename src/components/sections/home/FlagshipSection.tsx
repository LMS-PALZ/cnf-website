import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stat } from "@/components/ui/Stat";
import { homeEyebrowClassName } from "@/components/sections/home/homeEyebrow";
import { flagshipStats } from "@/data/home/flagship";
export function FlagshipSection() {
    return (<Section tone="dark" padding="lg" ariaLabelledBy="flagship-title" id="flagship">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader id="flagship-title" eyebrow="Our flagship programme" eyebrowClassName={homeEyebrowClassName} title="The Skill Scale-Up" titleAccent="Programme" tone="dark" accent="accent" description="CNF's flagship, a, cohort-based training programme teaching AI-assisted tools, digital skills, and vocational trades to underserved youth aged 15 to 30. With an 86% economic activation rate, SSU graduates don't just learn. They earn." descriptionClassName="max-w-xl"/>
          <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-4">
            <ButtonLink href="/programmes/skill-scale-up" variant="accent" size="md">
              <span className="inline-flex items-center gap-2">
                Explore SSU programme
                <span aria-hidden className="text-base leading-none">&rarr;</span>
              </span>
            </ButtonLink>
            <ButtonLink href="/programmes/skill-scale-up" variant="dark-outline" size="md">
              <span className="inline-flex items-center gap-2">
                Enroll in the next cohort
                <span aria-hidden className="text-base leading-none">&rarr;</span>
              </span>
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {flagshipStats.map((stat) => (<Card key={stat.label} tone="dark-soft" padding="md" className="flex flex-col justify-center">
              <Stat value={stat.value} label={stat.label} tone="white" size="md"/>
            </Card>))}
        </div>
      </div>
    </Section>);
}
