import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";

const anchorPills = [
  { href: "#partnership", label: "Partner With Us", dot: "bg-cnf-accent" },
  { href: "#volunteer", label: "Volunteer", dot: "bg-cnf-pillar-education" },
  { href: "#careers", label: "Careers", dot: "bg-cnf-muted" },
] as const;

/**
 * Dark hero band for the Get Involved page. Mirrors `OurWorkHero` /
 * `ProjectsHero` but with the "Join the Movement." headline and three
 * coloured anchor pills that scroll to each section below.
 */
export function GetInvolvedHero() {
  return (
    <section
      aria-labelledby="get-involved-hero-title"
      className="relative overflow-hidden bg-cnf-night"
    >
      <div aria-hidden className="cnf-dot-pattern absolute inset-0 opacity-20" />
      <Container className="relative py-16 md:py-24">
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
          <span className="text-cnf-accent">Get Involved</span>
        </nav>

        <h1
          id="get-involved-hero-title"
          className={`${fontDisplay.className} mt-8 text-5xl font-semibold leading-[1.04] text-white md:text-6xl lg:text-7xl`}
        >
          Join the
          <br />
          <span className="text-cnf-accent">Movement.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          CNF&rsquo;s work is only possible because people choose to show up — with
          their resources, their time, and their skills. Whether you are an
          organisation, an individual, or a professional looking for purpose-driven
          work, there is a place for you here.
        </p>

        <ul className="mt-10 flex flex-wrap gap-3">
          {anchorPills.map((pill) => (
            <li key={pill.href}>
              <Link
                href={pill.href}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
              >
                <span aria-hidden className={`h-2 w-2 rounded-full ${pill.dot}`} />
                {pill.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
