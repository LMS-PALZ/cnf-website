import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";

/**
 * Final dark band before the footer: a single-row CTA that funnels users
 * to either Donate or Contact Us.
 */
export function ChangeCtaSection() {
  return (
    <section
      aria-labelledby="change-cta-title"
      className="bg-white px-4 py-12 sm:px-6 lg:px-8"
    >
      <Container>
        <div className="rounded-2xl bg-cnf-night px-6 py-10 sm:px-10 md:px-14 md:py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2
                id="change-cta-title"
                className={`${fontDisplay.className} text-3xl font-semibold leading-tight text-white md:text-4xl`}
              >
                Ready to Be Part of the Change?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Every contribution — financial, physical, or in-kind — creates real, lasting
                impact in Nigerian communities.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end lg:flex-row">
              <ButtonLink href="/donate" variant="accent" size="md">
                Donate today
              </ButtonLink>
              <ButtonLink
                href={`mailto:contact@chiggynsoforfoundation.org`}
                variant="dark-outline"
                size="md"
              >
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
