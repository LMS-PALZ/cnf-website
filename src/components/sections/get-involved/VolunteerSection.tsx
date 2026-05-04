import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { formCardSurface } from "@/components/forms/formStyles";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  volunteerAreas,
  volunteerExpectations,
} from "@/data/get-involved/volunteer-areas";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";

/**
 * Volunteer section: "Give Your Time. Change a Life." with six area cards
 * and a "What to expect" list on the left, plus the Volunteer application
 * form on the right.
 */
export function VolunteerSection() {
  return (
    <section
      id="volunteer"
      aria-labelledby="volunteer-title"
      className="scroll-mt-24 bg-cnf-surface py-16 md:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left — content */}
          <div>
            <SectionHeader
              eyebrow="Volunteer"
              title="Give Your Time."
              titleAccent="Change a Life."
              accent="primary"
              description="Join one of our active volunteer cohorts. Whether you can give 4 hours a month or 20, there's a place for your skills here. We screen, train, and support every volunteer who joins us."
              id="volunteer-title"
            />

            <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-cnf-muted">
              Volunteer Areas Available
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {volunteerAreas.map((area) => (
                <li key={area.id}>
                  <Card
                    tone="elevated"
                    padding="md"
                    className="h-full border-cnf-border"
                  >
                    <div className="flex items-start gap-3">
                      <IconTile
                        iconKey={area.iconKey}
                        tone={area.iconTone}
                        size="sm"
                      />
                      <div>
                        <h4
                          className={cn(
                            fontDisplay.className,
                            "text-sm font-semibold text-cnf-ink"
                          )}
                        >
                          {area.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-cnf-muted">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-cnf-muted">
              What to Expect
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cnf-muted">
              {volunteerExpectations.map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cnf-primary"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className={formCardSurface}>
            <h3
              className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink md:text-3xl`}
            >
              Volunteer With CNF
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cnf-muted">
              Complete the form below. We&rsquo;ll review applications and reach
              out to the candidates who best fit our current needs.
            </p>
            <div className="mt-6">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
