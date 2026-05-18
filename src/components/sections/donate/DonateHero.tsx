import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { donateHeroStats } from "@/data/donate/hero-stats";
import { fontDisplay } from "@/lib/fonts";
import { donateConfig } from "@/lib/site";
export function DonateHero() {
    return (<section aria-labelledby="donate-hero-title" data-cnf-skip-enter="true" className="relative overflow-hidden bg-cnf-night">
      <div aria-hidden className="cnf-dot-pattern absolute inset-0 opacity-20"/>
      <div className="cnf-hero-page-enter-once relative px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-16 lg:py-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]">
          <Link href="/" className="text-white/55 transition-colors hover:text-white">
            Home
          </Link>
          <span aria-hidden className="text-white/30">
            /
          </span>
          <span className="text-cnf-accent">Donate</span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <h1 id="donate-hero-title" className={`${fontDisplay.className} text-5xl font-semibold leading-[1.04] text-white md:text-6xl lg:text-7xl`}>
              Your Gift
              <br />
              Changes a <span className="text-cnf-accent">Life.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Every naira given to CNF goes directly into programmes that train
              young people, keep children in school, feed underserved families,
              and bring healthcare to those who cannot afford it. No overhead
              fluff. Real impact, documented and reported.
            </p>

            <div className="mt-10">
              <ButtonLink href={donateConfig.korapayUrl} variant="accent" size="lg">
                Donate Now via Korapay
              </ButtonLink>
            </div>
          </div>

          
          <aside aria-label="Programme reach" className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
            <ul className="grid gap-8 sm:grid-cols-2">
              {donateHeroStats.map((s) => (<li key={s.value}>
                  <p className={`${fontDisplay.className} text-4xl font-semibold leading-none text-white md:text-5xl`}>
                    {s.value}
                  </p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                    {s.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {s.detail}
                  </p>
                </li>))}
            </ul>
          </aside>
        </div>
      </div>
    </section>);
}
