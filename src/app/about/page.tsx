import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About — mission and impact",
  "Mission, vision, and values of the Chiggy Nsofor Foundation, a Nigerian nonprofit advancing skills, education, and humanitarian aid.",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CNF"
        title="Mission, vision, and the communities we serve."
        description="The Chiggy Nsofor Foundation exists to expand opportunity in Nigeria through practical skills training, stronger education ecosystems, and timely humanitarian support."
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink`}>Mission</h2>
            <p className="mt-4 text-base leading-relaxed text-cnf-muted">
              Equip people and communities with the skills, learning conditions, and relief they need to
              thrive — with transparency, local partnership, and dignity at the centre.
            </p>
          </div>
          <div>
            <h2 className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink`}>Vision</h2>
            <p className="mt-4 text-base leading-relaxed text-cnf-muted">
              A Nigeria where young people can learn without barriers, earn with pride, and receive help
              when hardship strikes — led by communities, supported by allies.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-cnf-primary/10 bg-cnf-surface py-16 md:py-24">
        <Container>
          <h2 className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink`}>Values</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Transparency in how funds are used and programmes are reported.",
              "Community leadership — we listen first, then co-design solutions.",
              "Dignity in every classroom, training hall, and relief line.",
              "Learning culture inside the foundation: iterate, measure, improve.",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-cnf-primary/10 bg-white p-5 text-base leading-relaxed text-cnf-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink`}>Impact</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-cnf-muted">
            We publish qualitative stories and quantitative updates as programmes mature. If you are a
            grantmaker or partner, request our latest deck through the partnerships inbox on the Get
            Involved page.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/projects">See projects by pillar</ButtonLink>
            <ButtonLink href="/news" variant="secondary">
              Read news and impact stories
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
