import Link from "next/link";
import { fontDisplay } from "@/lib/fonts";

/**
 * Dark hero band for the Projects page. Mirrors `OurWorkHero` but with
 * project-specific copy and no jump-pills (the filter tabs handle that
 * role further down).
 */
export function ProjectsHero() {
  return (
    <section
      aria-labelledby="projects-hero-title"
      className="relative overflow-hidden bg-cnf-night"
    >
      <div aria-hidden className="cnf-dot-pattern absolute inset-0 opacity-20" />
      <div className="relative px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-16 lg:py-24">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]"
        >
          <Link
            href="/"
            className="text-white/55 transition-colors hover:text-white"
          >
            Home
          </Link>
          <span aria-hidden className="text-white/30">
            /
          </span>
          <span className="text-cnf-accent">Projects</span>
        </nav>

        <h1
          id="projects-hero-title"
          className={`${fontDisplay.className} mt-8 text-5xl font-semibold leading-[1.04] text-white md:text-6xl lg:text-7xl`}
        >
          Our Work.
          <br />
          <span className="text-cnf-accent">In Action.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Every project below represents real people, real communities, and real
          outcomes. Browse our work across all three pillars — and watch us in
          action.
        </p>
      </div>
    </section>
  );
}
