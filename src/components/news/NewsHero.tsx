import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";

export function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cnf-hero-from via-cnf-hero-via to-cnf-hero-to py-16 md:py-24">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-cnf-accent/15 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <nav aria-label="Breadcrumb" className="text-[11px] font-semibold uppercase tracking-[0.2em]">
          <ol className="flex flex-wrap items-center gap-2 text-white/90">
            <li>
              <Link className="transition-colors hover:text-white" href="/">
                Home
              </Link>
            </li>
            <li className="text-white/40" aria-hidden>
              /
            </li>
            <li className="text-cnf-accent">News</li>
          </ol>
        </nav>

        <h1
          className={`${fontDisplay.className} mt-8 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl`}
        >
          <span className="text-white">Stories, Updates</span>
          <br />
          <span className="text-white">&amp;</span>{" "}
          <span className="text-cnf-accent">Impact.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          Stay up to date with everything happening at CNF — from programme milestones and community
          outreaches to new partnerships and announcements.
        </p>
      </Container>
    </section>
  );
}
