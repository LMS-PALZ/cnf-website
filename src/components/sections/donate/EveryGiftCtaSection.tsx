import { CtaBand } from "@/components/sections/shared/CtaBand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeartIcon } from "@/components/ui/icons";
import { donateConfig } from "@/lib/site";

/**
 * Final CTA on the donate page: "Every Gift is a Future Changed."
 * Re-uses the shared `CtaBand` (dark) with a single Korapay action.
 */
export function EveryGiftCtaSection() {
  return (
    <CtaBand
      tone="dark"
      id="every-gift-cta-title"
      title={
        <>
          Every Gift is a
          <br />
          <span className="text-cnf-accent">Future Changed.</span>
        </>
      }
      description={
        <>
          It takes less than two minutes. Your donation goes directly to a
          young person learning a skill, a child back in school, or a family
          with food on the table tonight.
        </>
      }
      actions={
        <ButtonLink href={donateConfig.korapayUrl} variant="accent" size="lg">
          <HeartIcon className="h-4 w-4" aria-hidden />
          <span>Donate Now</span>
        </ButtonLink>
      }
    />
  );
}
