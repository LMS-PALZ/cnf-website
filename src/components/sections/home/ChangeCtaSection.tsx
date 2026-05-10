import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { site } from "@/lib/site";
export function ChangeCtaSection() {
    return (<CtaBand tone="dark" id="change-cta-title" title="Ready to Be Part of the Change?" description="Every contribution, financial, physical, or in-kind, creates real, lasting impact in Nigerian communities." actions={<>
          <ButtonLink href="/donate" variant="accent" size="md">
            Donate today
          </ButtonLink>
          <ButtonLink href={`mailto:${site.contactEmail}`} variant="dark-outline" size="md">
            Contact us
          </ButtonLink>
        </>}/>);
}
