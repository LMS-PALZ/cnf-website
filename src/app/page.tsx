import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { PillarCard } from "@/components/sections/PillarCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { pillars } from "@/constants/pillars";
import { fontDisplay } from "@/lib/fonts";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Chiggy Nsofor Foundation"
        title="Skills, education, and humanitarian aid for Nigerian communities."
        description="We partner locally to expand opportunity, strengthen learning, and respond with dignity when crisis hits. Explore our pillars, programmes, and stories."
      >
        <ButtonLink href="/donate" variant="accent">
          Donate
        </ButtonLink>
        <ButtonLink href="/get-involved" variant="secondary">
          Get involved
        </ButtonLink>
        <ButtonLink href="/news" variant="ghost">
          Read our stories
        </ButtonLink>
      </PageHero>

      <section className="py-16 md:py-24" aria-labelledby="pillars-heading">
        <Container>
          <div className="max-w-3xl">
            <h2
              id="pillars-heading"
              className={`${fontDisplay.className} text-3xl font-semibold text-cnf-ink md:text-4xl`}
            >
              Three pillars of impact
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cnf-muted">
              Our work is organised around skills, education, and humanitarian aid — each given equal
              weight in how we plan, fund, and report programmes.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.id} pillar={pillar} imagePriority={index === 0} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-cnf-muted">
            Jump to a pillar on the{" "}
            <Link className="font-semibold text-cnf-primary underline-offset-2 hover:underline" href="/projects">
              projects overview
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-y border-cnf-primary/10 bg-cnf-surface py-16 md:py-24">
        <Container>
          <h2 className={`${fontDisplay.className} text-center text-3xl font-semibold text-cnf-ink`}>
            Impact at a glance
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-cnf-muted">
            Figures are illustrative placeholders until the annual impact review is published.
          </p>
          <dl className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { label: "Youth trained (cumulative)", value: "1,200+" },
              { label: "Communities supported", value: "18" },
              { label: "Volunteer hours (annual)", value: "4,500+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-cnf-primary/10 bg-white p-8 text-center shadow-sm"
              >
                <dt className="text-sm font-semibold text-cnf-muted">{stat.label}</dt>
                <dd className={`${fontDisplay.className} mt-3 text-4xl font-semibold text-cnf-primary`}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="flex flex-col items-start gap-6 rounded-2xl border border-cnf-primary/10 bg-white p-8 shadow-sm md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink md:text-3xl`}>
              Ready to partner with communities?
            </h2>
            <p className="mt-3 max-w-xl text-base text-cnf-muted">
              Donations, volunteering, and institutional partnerships each play a role. Choose the path
              that fits you.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
            <ButtonLink href="/donate" variant="accent">
              Donate
            </ButtonLink>
            <ButtonLink href="/our-work" variant="secondary">
              Explore our work
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
