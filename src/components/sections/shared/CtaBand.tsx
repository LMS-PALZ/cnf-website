import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";

type Tone = "dark" | "primary";

type Props = {
  /** Surface colour. `dark` = night, `primary` = brand green. */
  tone?: Tone;
  /** Main heading. Pass JSX for inline accents (e.g. a gold span). */
  title: ReactNode;
  /** Body copy beneath the title. */
  description: ReactNode;
  /** CTA buttons (right-aligned on desktop, stacked on mobile). */
  actions: ReactNode;
  /** Heading level. Defaults to `h2` since this typically lives mid-page. */
  as?: "h2" | "h3";
  /** Optional id used for `aria-labelledby`. */
  id?: string;
};

const toneStyles: Record<Tone, string> = {
  dark: "bg-cnf-night",
  primary: "bg-cnf-primary-soft",
};

/**
 * Inset rounded CTA card sitting on a white outer surface so it floats
 * visually. Used by:
 *   - Home `ChangeCtaSection` ("Ready to Be Part of the Change?")
 *   - Our Work `ReadyToSupportSection` ("Ready to Support This Work?")
 *   - Projects `InspiredCtaSection` ("Inspired by What You've Seen?")
 *
 * Pass `tone="primary"` for the green variant; default is dark.
 */
export function CtaBand({
  tone = "dark",
  title,
  description,
  actions,
  as: Tag = "h2",
  id,
}: Props) {
  return (
    <section
      aria-labelledby={id}
      className="bg-white px-4 py-12 sm:px-6 lg:px-8"
    >
      <Container>
        <div
          className={cn(
            "rounded-2xl px-6 py-10 sm:px-10 md:px-14 md:py-12",
            toneStyles[tone]
          )}
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <Tag
                id={id}
                className={cn(
                  fontDisplay.className,
                  "text-3xl font-semibold leading-tight text-white md:text-4xl"
                )}
              >
                {title}
              </Tag>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end lg:flex-row">
              {actions}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
