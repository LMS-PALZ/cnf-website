import { CareersNewsletterForm } from "@/components/forms/CareersNewsletterForm";
import { CareersProfileForm } from "@/components/forms/CareersProfileForm";
import { formCardSurface } from "@/components/forms/formStyles";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { lifeAtCnfCards } from "@/data/get-involved/life-at-cnf";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";

export function CareersSection() {
    return (<section id="careers" aria-labelledby="careers-title" className="scroll-mt-24 bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader eyebrow="Careers" title="Build Your Career" titleAccent="With Purpose" accent="primary" description="Working at CFO means your skills do something that matters. We are a small, dedicated team committed to doing excellent work for communities that deserve nothing less. If that resonates with you, we want to hear from you." id="careers-title"/>

            <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-cnf-muted">
              Life at CFO
            </h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {lifeAtCnfCards.map((card) => {
                    const solid = card.variant === "solid";
                    return (<li key={card.id}>
                      <Card tone={solid ? "primary" : "outlined"} padding="md" className={cn("h-full", !solid && "border-cnf-border")}>
                        <h4 className={cn(fontDisplay.className, "text-base font-semibold", solid ? "text-white" : "text-cnf-ink")}>
                          {card.title}
                        </h4>
                        <p className={cn("mt-1.5 text-sm leading-relaxed", solid ? "text-white/85" : "text-cnf-muted")}>
                          {card.description}
                        </p>
                      </Card>
                    </li>);
                })}
            </ul>
          </div>

          <div className="space-y-6">
            <div className={`${formCardSurface} text-center`}>
              <h3 className={`${fontDisplay.className} text-xl font-semibold text-cnf-ink md:text-2xl`}>
                No Open Vacancies Right Now
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-cnf-muted">
                We do not have active job openings at this time, but CFO is
                growing. Register your interest below and we will reach out as
                soon as a role that suits your profile becomes available.
              </p>
              <div className="mt-5 text-left">
                <CareersNewsletterForm />
              </div>
            </div>

            <div className={formCardSurface}>
              <h3 className={`${fontDisplay.className} text-xl font-semibold text-cnf-ink md:text-2xl`}>
                Tell Us About Yourself
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cnf-muted">
                No vacancy? Send us your profile anyway. We keep strong candidates
                on file and reach out when the right opportunity opens.
              </p>
              <div className="mt-5">
                <CareersProfileForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>);
}
