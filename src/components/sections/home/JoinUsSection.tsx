import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { joinOptions, type JoinOption } from "@/data/home/join-options";
import { fontDisplay } from "@/lib/fonts";

function JoinCard({ option }: {
    option: JoinOption;
}) {
    return (<Card tone="elevated" padding="lg" className="flex h-full flex-col items-center text-center" as="article">
      <h3 className={`${fontDisplay.className} text-2xl font-semibold leading-tight text-cnf-ink`}>
        {option.title}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-cnf-muted md:text-base">
        {option.description}
      </p>
      <div className="mt-6">
        <ButtonLink href={option.href} variant="primary" size="md">
          {option.ctaLabel}
        </ButtonLink>
      </div>
    </Card>);
}

export function JoinUsSection() {
    return (<Section tone="light" padding="lg" ariaLabelledBy="join-us-title">
      <SectionHeader id="join-us-title" eyebrow="Join us" title={<>
            Ready to Be <span className="text-cnf-accent">Part of the Change?</span>
          </>}/>

      <div className="mt-10 grid gap-6 md:grid-cols-3 lg:gap-8">
        {joinOptions.map((option) => (<JoinCard key={option.id} option={option}/>))}
      </div>
    </Section>);
}
