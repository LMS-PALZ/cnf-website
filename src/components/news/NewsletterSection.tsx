import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";

/**
 * "Stay Connected" mailing-list signup band. Two-column on desktop:
 * eyebrow + headline + supporting copy on the left, signup form on the
 * right. Sits on a brand-green surface to set it apart from the regular
 * page rhythm.
 */
export function NewsletterSection() {
  return (
    <section
      id="stay-connected"
      aria-labelledby="stay-connected-title"
      className="bg-cnf-primary py-16 md:py-20"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Stay connected
            </p>
            <h2
              id="stay-connected-title"
              className={`${fontDisplay.className} mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl`}
            >
              Get CNF Updates
              <br />
              <span className="text-cnf-accent">Delivered to You</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
              Join our mailing list for programme updates, impact stories, and
              news from the communities we serve. No spam &mdash; just the
              stories that matter.
            </p>
          </div>

          <div className="w-full lg:max-w-xl lg:justify-self-end">
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
