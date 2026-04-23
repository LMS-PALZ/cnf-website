import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Our work",
  "How the Chiggy Nsofor Foundation delivers programmes across Nigeria with partners and volunteers.",
);

const cards = [
  {
    title: "CNF projects",
    body: "Explore the three pillars — skills, education, and humanitarian aid — and how each shows up in the field.",
    href: "/projects",
    cta: "View projects overview",
  },
  {
    title: "Skill Scale-Up programme",
    body: "Free youth training focused on employability and digital fundamentals. Learn about eligibility and how to apply.",
    href: "/programmes/skill-scale-up",
    cta: "Read about Skill Scale-Up",
  },
  {
    title: "Stories from communities",
    body: "News and impact notes from trainings, school support, and relief coordination.",
    href: "/news",
    cta: "Browse news and impact",
  },
] as const;

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Programmes delivered with partners, volunteers, and community leaders."
        description="CNF connects funding, training expertise, and local knowledge. This page is the bridge to deeper programme pages — start with pillars, then drill into Skill Scale-Up or news."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink`}>
              How delivery works
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cnf-muted">
              We co-create timelines with schools, community organisations, and local government where
              appropriate. Volunteers support facilitation, mentorship, and monitoring. Finance and
              safeguarding checks apply before funds move.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.href}
                className="flex flex-col rounded-xl border border-cnf-primary/10 bg-white p-6 shadow-sm"
              >
                <h3 className={`${fontDisplay.className} text-xl font-semibold text-cnf-ink`}>
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-cnf-muted">{card.body}</p>
                <Link
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-cnf-primary/20 px-4 py-2 text-base font-semibold text-cnf-primary transition-colors hover:border-cnf-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                  href={card.href}
                >
                  {card.cta}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-cnf-primary/10 bg-cnf-surface py-16 md:py-24">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink`}>
              Want to collaborate?
            </h2>
            <p className="mt-2 max-w-xl text-base text-cnf-muted">
              Partnerships, volunteering, and careers each have a pathway on our Get Involved page.
            </p>
          </div>
          <ButtonLink href="/get-involved">Get involved</ButtonLink>
        </Container>
      </section>
    </>
  );
}
