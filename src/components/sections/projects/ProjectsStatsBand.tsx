import { Container } from "@/components/ui/Container";
import { Stat } from "@/components/ui/Stat";
import { projectsHeroStats } from "@/data/projects/hero-stats";
export function ProjectsStatsBand() {
    return (<section aria-label="Projects key figures" className="bg-cnf-primary-soft py-8 md:py-10">
      <Container>
        <ul className="flex flex-wrap items-start justify-around gap-x-8 gap-y-6 text-center md:flex-nowrap">
          {projectsHeroStats.map((stat) => (<li key={stat.label} className="flex min-w-[120px] flex-1 flex-col items-center gap-2">
              <Stat value={stat.value} label={stat.label} tone="accent-on-dark" size="sm" className="items-center text-center"/>
            </li>))}
        </ul>
      </Container>
    </section>);
}
