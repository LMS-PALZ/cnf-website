import { Container } from "@/components/ui/Container";
import { ChatBubbleIcon } from "@/components/ui/icons";
import { donateTestimonial } from "@/data/donate/testimonial";
import { fontDisplay } from "@/lib/fonts";

/**
 * Centred beneficiary testimonial on a cream surface. Visually anchored
 * by the chat-bubble icon at the top.
 */
export function TestimonialSection() {
  return (
    <section
      aria-label="Beneficiary testimonial"
      className="bg-cnf-cream py-16 md:py-20"
    >
      <Container>
        <figure className="mx-auto max-w-3xl text-center">
          <span
            aria-hidden
            className="mx-auto inline-flex h-10 w-10 items-center justify-center text-cnf-muted/70 [&_svg]:h-7 [&_svg]:w-7"
          >
            <ChatBubbleIcon />
          </span>
          <blockquote
            className={`${fontDisplay.className} mt-5 text-xl italic leading-relaxed text-cnf-ink md:text-2xl`}
          >
            &ldquo;{donateTestimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm text-cnf-muted">
            <span className="font-semibold text-cnf-ink">
              {donateTestimonial.author}
            </span>
            <span aria-hidden> &mdash; </span>
            <span className="font-semibold text-cnf-primary">
              {donateTestimonial.role}
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
