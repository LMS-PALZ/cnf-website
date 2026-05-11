import { Container } from "@/components/ui/Container";
import { donateTestimonial } from "@/data/donate/testimonial";
import { fontDisplay } from "@/lib/fonts";
export function TestimonialSection() {
    return (<section aria-label="Beneficiary testimonial" className="bg-cnf-cream py-16 md:py-20">
      <Container>
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className={`${fontDisplay.className} text-xl italic leading-relaxed text-cnf-ink md:text-2xl`}>
            &ldquo;{donateTestimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm text-cnf-muted">
            <span className="font-semibold text-cnf-ink">
              {donateTestimonial.author}
            </span>
            <span aria-hidden>, </span>
            <span className="font-semibold text-cnf-primary">
              {donateTestimonial.role}
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>);
}
