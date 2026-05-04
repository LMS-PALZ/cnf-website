import { CtaBand } from "@/components/sections/shared/CtaBand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

/**
 * Final "Not Sure Where You Fit In?" CTA band on the Get Involved page.
 * Re-uses the shared `CtaBand` (dark variant) with two actions:
 * direct contact (gold) and donate-instead (outline).
 */
export function NotSureWhereSection() {
  return (
    <CtaBand
      tone="dark"
      id="not-sure-where-title"
      title={
        <>
          Not Sure Where
          <br />
          <span className="text-cnf-accent">You Fit In?</span>
        </>
      }
      description={
        <>
          Reach out directly and let&rsquo;s find the right way for you to be part
          of what CNF is building. Every contribution — big or small — makes a
          difference.
        </>
      }
      actions={
        <>
          <ButtonLink
            href={`mailto:${site.contactEmail}`}
            variant="accent"
            size="lg"
          >
            Contact Us Directly
          </ButtonLink>
          <ButtonLink href="/donate" variant="dark-outline" size="lg">
            Donate Instead
          </ButtonLink>
        </>
      }
    />
  );
}
