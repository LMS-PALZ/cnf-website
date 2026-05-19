import { CnfImage } from "@/components/ui/CnfImage";
import Link from "next/link";
import { pillars } from "@/constants/pillars";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
export function PillarAnchoredSections() {
    return (<section className="py-16 md:py-24">
      <Container className="space-y-20 md:space-y-28">
        {pillars.map((pillar, index) => (<div key={pillar.id} id={pillar.id} className="grid scroll-mt-28 gap-10 md:grid-cols-2 md:items-center">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-cnf-primary/10 bg-cnf-surface shadow-sm">
                <CnfImage src={pillar.imageSrc} alt={pillar.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"/>
              </div>
            </div>
            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <h2 className={`${fontDisplay.className} text-3xl font-semibold text-cnf-ink md:text-4xl`}>
                {pillar.title}
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-cnf-primary">
                {pillar.shortLabel}
              </p>
              <p className="mt-4 text-base leading-relaxed text-cnf-muted md:text-lg">{pillar.body}</p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {pillar.links.map((l) => (<Link key={l.href} className="inline-flex min-h-11 items-center justify-center rounded-md border border-cnf-primary/20 px-4 py-2 text-base font-semibold text-cnf-primary transition-colors hover:border-cnf-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary" href={l.href}>
                    {l.label}
                  </Link>))}
              </div>
            </div>
          </div>))}
      </Container>
    </section>);
}
