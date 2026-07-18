import { PartnershipForm } from "@/components/forms/PartnershipForm";
import { formCardSurface } from "@/components/forms/formStyles";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { partnershipTypes } from "@/data/get-involved/partnership-types";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";

export function PartnershipSection() {
    return (<section id="partnership" aria-labelledby="partnership-title" className="scroll-mt-24 bg-white py-16 md:py-24">
      <Container>
        <SectionHeader eyebrow="Partnership" title="Build Something That Lasts" titleAccent="With Us." accent="primary" description="We partner with organisations that share our commitment to evidence-based, dignified, community-centred impact." id="partnership-title"/>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="text-sm font-semibold text-cnf-ink">
              What partnership with CFO looks like:
            </h3>
            <ul className="mt-4 space-y-4">
              {partnershipTypes.map((p) => (<li key={p.id}>
                  <Card tone="outlined" padding="md" className="border-cnf-border">
                    <h4 className={cn(fontDisplay.className, "text-base font-semibold text-cnf-ink")}>
                      {p.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-cnf-muted">
                      {p.description}
                    </p>
                  </Card>
                </li>))}
            </ul>
          </div>

          <div id="partner-with-cnf" className={`${formCardSurface} scroll-mt-24`}>
            <h3 className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink md:text-3xl`}>
              Partner With CFO
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cnf-muted">
              Fill in the form below and our partnerships team will be in touch
              within 3 working days.
            </p>
            <div className="mt-6">
              <PartnershipForm />
            </div>
          </div>
        </div>
      </Container>
    </section>);
}
