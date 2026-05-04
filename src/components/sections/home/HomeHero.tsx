import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowRightIcon, PinIcon } from "@/components/ui/icons";
import { fontDisplay } from "@/lib/fonts";

/**
 * Two-column hero: dark left half with the foundation pitch + CTAs,
 * deep-green right half showing a programme photo (placeholder for now).
 *
 * The component is intentionally content-agnostic on the right side — pass
 * a child via `media` if you want to swap the placeholder for a real
 * `<Image>` later.
 */
type Props = {
  eyebrow?: string;
  /** First word(s) of the headline rendered in white. */
  title: string;
  /** Accent line of the headline rendered in mustard gold. */
  titleAccent: string;
  /** Final word(s) of the headline rendered in white. */
  titleTrailing?: string;
  description: string;
  /** Optional override for the right-side media (defaults to ImagePlaceholder). */
  media?: React.ReactNode;
};

export function HomeHero({
  eyebrow = "Est. 2024 · Abuja, Nigeria",
  title,
  titleAccent,
  titleTrailing,
  description,
  media,
}: Props) {
  return (
    <section
      className="relative grid w-full grid-cols-1 lg:grid-cols-2"
      aria-labelledby="home-hero-title"
    >
      <div className="relative flex flex-col justify-center bg-cnf-night px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-16 lg:py-28">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cnf-accent">
          <PinIcon className="h-3.5 w-3.5" />
          <span>{eyebrow}</span>
        </p>
        <h1
          id="home-hero-title"
          className={`${fontDisplay.className} mt-8 text-5xl font-semibold leading-[1.04] text-white md:text-6xl lg:text-7xl`}
        >
          {title}
          <br />
          <span className="text-cnf-accent">{titleAccent}</span>
          {titleTrailing ? (
            <>
              <br />
              {titleTrailing}
            </>
          ) : null}
        </h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
          {description}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/our-work" variant="accent" size="lg">
            Explore our work
          </ButtonLink>
          <ButtonLink href="/get-involved" variant="dark-outline" size="lg">
            <span className="inline-flex items-center gap-2">
              Get involved
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </ButtonLink>
        </div>
      </div>

      <div className="relative flex items-center justify-center bg-cnf-primary p-6 sm:p-10 md:p-14">
        <div aria-hidden className="cnf-dot-pattern absolute inset-0 opacity-90" />
        <div className="relative w-full">
          {media ?? (
            <ImagePlaceholder
              aspect="aspect-[4/3] sm:aspect-[5/4]"
              label="Place a high-quality CNF programme photo here"
              tone="dark-on-primary"
            />
          )}
        </div>
      </div>
    </section>
  );
}
