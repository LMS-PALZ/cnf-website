import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fontDisplay } from "@/lib/fonts";
export function WhoWeAreSection() {
    return (<Section tone="cream" padding="lg" ariaLabelledBy="who-we-are-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader id="who-we-are-title" eyebrow="Who we are" title="Built on Purpose." titleAccent="Driven by People." accent="primary"/>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-cnf-muted md:text-lg">
            <p>
              The <strong className="text-cnf-ink">Chiggy Nsofor Foundation (CNF)</strong> is a
              Nigerian NGO founded in 2024 with one conviction: that every underserved person
              deserves the opportunity to live a better life.
            </p>
            <p>
              We work across three pillars, Skills Development, Education, and Humanitarian
              Aid &amp; Healthcare, delivering programmes that build lasting capacity in
              individuals and communities across Nigeria.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Card tone="primary" padding="md" className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cnf-accent">
                Our mission
              </p>
              <p className={`${fontDisplay.className} text-lg font-medium leading-snug text-white`}>
                To provide essential support and build capacity in individuals and
                communities.
              </p>
            </Card>
            <Card tone="outlined" padding="md" className="flex flex-col gap-3 bg-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cnf-primary">
                Our vision
              </p>
              <p className={`${fontDisplay.className} text-lg font-medium leading-snug text-cnf-ink`}>
                To see underserved Nigerians given opportunities to have a better quality of
                life.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Section>);
}
