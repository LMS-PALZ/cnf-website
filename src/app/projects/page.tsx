import { PageHero } from "@/components/sections/PageHero";
import { PillarAnchoredSections } from "@/components/sections/PillarAnchoredSections";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "CNF projects — three pillars",
  "Chiggy Nsofor Foundation projects across skills, education, and humanitarian aid in Nigeria.",
);

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="CNF projects"
        title="Impact across three pillars."
        description="Each pillar receives equal attention in planning, budgeting, and storytelling. Scroll to read skills, education, and humanitarian programmes in depth."
      >
        <ButtonLink href="/programmes/skill-scale-up">Skill Scale-Up programme</ButtonLink>
        <ButtonLink href="/donate" variant="secondary">
          Fund this work
        </ButtonLink>
      </PageHero>

      <section className="border-b border-cnf-primary/10 bg-white py-10">
        <Container>
          <p className="text-sm text-cnf-muted">
            Quick links:{" "}
            <a className="font-semibold text-cnf-primary underline-offset-2 hover:underline" href="#skills">
              Skills
            </a>
            {" · "}
            <a
              className="font-semibold text-cnf-primary underline-offset-2 hover:underline"
              href="#education"
            >
              Education
            </a>
            {" · "}
            <a
              className="font-semibold text-cnf-primary underline-offset-2 hover:underline"
              href="#humanitarian"
            >
              Humanitarian aid
            </a>
          </p>
        </Container>
      </section>

      <PillarAnchoredSections />
    </>
  );
}
