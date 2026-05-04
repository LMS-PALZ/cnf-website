import { Container } from "@/components/ui/Container";
import { iconRegistry } from "@/components/ui/iconRegistry";
import { trustPoints, type TrustPointTone } from "@/data/donate/trust-points";
import { cn } from "@/lib/cn";

const iconToneStyles: Record<TrustPointTone, string> = {
  accent: "text-cnf-accent",
  white: "text-white",
  soft: "text-white/85",
  warm: "text-cnf-accent",
};

/**
 * Compact green band that signals trust signals just above the
 * testimonial. Four columns on desktop, stacks on mobile.
 */
export function TrustStripSection() {
  return (
    <section
      aria-label="Why donors trust CNF"
      className="bg-cnf-primary py-10 md:py-12"
    >
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = iconRegistry[point.iconKey];
            return (
              <li key={point.id} className="text-center text-white">
                <span
                  aria-hidden
                  className={cn(
                    "mx-auto inline-flex h-9 w-9 items-center justify-center [&_svg]:h-6 [&_svg]:w-6",
                    iconToneStyles[point.iconTone]
                  )}
                >
                  <Icon />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-white/75">
                  {point.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
