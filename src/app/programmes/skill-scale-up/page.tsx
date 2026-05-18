import { SkillScaleUpHero } from "@/components/sections/programmes/SkillScaleUpHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Skill Scale-Up, free youth training", "Free youth training in Nigeria from the Chiggy Nsofor Foundation: digital skills, employability, and entrepreneurship foundations.");
export default function SkillScaleUpPage() {
    return (<>
      <SkillScaleUpHero />

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl space-y-4 text-base leading-relaxed text-cnf-muted">
          <h2 className={`${fontDisplay.className} text-2xl text-cnf-ink`}>About the programme</h2>
          <p>
            Cohorts combine facilitator-led sessions with practice assignments and peer feedback.
            Curriculum modules are updated as labour market signals change; the baseline includes
            digital productivity tools, communication for work, and an introduction to building small
            services in your community.
          </p>
          <h2 className={`${fontDisplay.className} pt-10 text-2xl text-cnf-ink`}>Who it is for</h2>
          <p>
            Young people aged roughly 16-30 who can commit to the full cohort schedule. Exact
            eligibility, literacy prerequisites, and device requirements are confirmed at
            registration.
          </p>
          <h2 className={`${fontDisplay.className} pt-10 text-2xl text-cnf-ink`}>What you learn</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Digital skills for everyday productivity and safe internet use.</li>
            <li>Foundations of entrepreneurship and customer empathy.</li>
            <li>Career skills: CV basics, interviews, and professional communication.</li>
          </ul>
          <p className="text-sm">
            Detailed module list is marked <strong>TBC</strong> pending the next curriculum review.
          </p>
          <h2 className={`${fontDisplay.className} pt-10 text-2xl text-cnf-ink`}>Locations and cohorts</h2>
          <p>
            Cities and community hubs will be announced alongside each intake. If you represent a
            venue or institution, use the partnerships section on Get Involved.
          </p>
          <h2 className={`${fontDisplay.className} pt-10 text-2xl text-cnf-ink`}>How to apply</h2>
          <p>
            Submit a volunteer or programme interest note through the Get Involved form, choose
            Skill Scale-Up in your message so the team can route it quickly.
          </p>
          <div className="flex flex-col gap-3 pt-8 sm:flex-row">
            <ButtonLink href="/get-involved#volunteer">Go to application section</ButtonLink>
            <ButtonLink href="/news" variant="secondary">
              Read participant stories
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>);
}
