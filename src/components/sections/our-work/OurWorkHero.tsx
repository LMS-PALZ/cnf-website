import Link from "next/link";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { pillarTheme } from "@/lib/pillar-theme";
import type { PillarBlockData } from "@/data/our-work/pillars";
type Props = {
    pillars: Pick<PillarBlockData, "id" | "theme" | "heading">[];
};
const labels: Record<string, string> = {
    skills: "Skill Development",
    education: "Education",
    humanitarian: "Humanitarian Aid & Healthcare",
};
export function OurWorkHero({ pillars }: Props) {
    return (<section aria-labelledby="our-work-hero-title" data-cnf-skip-enter="true" className="relative overflow-hidden bg-cnf-night">
      <div aria-hidden className="cnf-dot-pattern absolute inset-0 opacity-20"/>
      <div className="cnf-hero-page-enter-once relative px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-16 lg:py-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]">
          <Link href="/" className="text-white/55 transition-colors hover:text-white">
            Home
          </Link>
          <span aria-hidden className="text-white/30">
            /
          </span>
          <span className="text-cnf-accent">Our work</span>
        </nav>

        <h1 id="our-work-hero-title" className={cn(fontDisplay.className, "mt-8 text-5xl font-semibold leading-[1.04] text-white md:text-6xl lg:text-7xl")}>
          Three Pillars.
          <br />
          <span className="text-cnf-accent">One Mission.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Everything CNF does sits under one of three interconnected pillars.
          Together, they form a holistic response to the challenges facing
          underserved Nigerians, equipping people with skills, knowledge, and
          the support they need to thrive.
        </p>

        <ul className="mt-10 flex flex-wrap gap-3">
          {pillars.map((p) => (<li key={p.id}>
              <Link href={`#${p.id}`} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent">
                <span aria-hidden className={cn("h-2 w-2 rounded-full", pillarTheme[p.theme].dot)}/>
                {labels[p.theme] ?? p.heading}
              </Link>
            </li>))}
        </ul>
      </div>
    </section>);
}
