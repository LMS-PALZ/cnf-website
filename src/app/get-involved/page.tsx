import { CareersInterestForm } from "@/components/forms/CareersInterestForm";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "Get involved — partner, volunteer, careers",
  "Partner with the Chiggy Nsofor Foundation, volunteer your skills, or register interest in careers.",
);

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Partner, volunteer, or explore careers with CNF."
        description="Choose the path that fits you. Each section includes clear next steps; forms are handled securely on the server with confirmation toasts in your browser."
      >
        <ButtonLink href="#partner">Partnerships</ButtonLink>
        <ButtonLink href="#volunteer" variant="secondary">
          Volunteering
        </ButtonLink>
        <ButtonLink href="#careers" variant="ghost">
          Careers
        </ButtonLink>
      </PageHero>

      <section id="partner" className="scroll-mt-28 border-b border-cnf-primary/10 py-16 md:py-24">
        <Container className="max-w-3xl">
          <h2 className={`${fontDisplay.className} text-3xl font-semibold text-cnf-ink`}>Partner with us</h2>
          <p className="mt-4 text-base leading-relaxed text-cnf-muted">
            Institutional partners bring venues, learner pipelines, safeguarding expertise, and local
            knowledge. We co-design milestones, reporting, and branding expectations up front.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cnf-muted">
            Email{" "}
            <a
              className="font-semibold text-cnf-primary underline-offset-2 hover:underline"
              href={`mailto:${site.partnershipsEmail}`}
            >
              {site.partnershipsEmail}
            </a>{" "}
            with a short introduction, geography, and the pillar you want to support.
          </p>
        </Container>
      </section>

      <section id="volunteer" className="scroll-mt-28 border-b border-cnf-primary/10 bg-cnf-surface py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className={`${fontDisplay.className} text-3xl font-semibold text-cnf-ink`}>Volunteer</h2>
              <p className="mt-4 text-base leading-relaxed text-cnf-muted">
                Mentors, facilitators, translators, and field logistics volunteers keep programmes human
                and responsive. Share your city, skills, and availability — programme staff follow up when
                there is a fit.
              </p>
              <p className="mt-4 text-sm text-cnf-muted">
                Applying for Skill Scale-Up? Mention it in your message so we can route your enquiry.
              </p>
            </div>
            <div className="rounded-2xl border border-cnf-primary/10 bg-white p-6 shadow-sm md:p-8">
              <VolunteerForm />
            </div>
          </div>
        </Container>
      </section>

      <section id="careers" className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className={`${fontDisplay.className} text-3xl font-semibold text-cnf-ink`}>Careers</h2>
              <p className="mt-4 text-base leading-relaxed text-cnf-muted">
                We post openings on this site and on LinkedIn as roles become available. If you would like
                to be notified, send a short note through the interest form with the kind of role you are
                seeking.
              </p>
              <p className="mt-4 text-sm text-cnf-muted">
                CV upload is not enabled in this version; include relevant links as plain text in your
                message if needed.
              </p>
            </div>
            <div className="rounded-2xl border border-cnf-primary/10 bg-white p-6 shadow-sm md:p-8">
              <CareersInterestForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
