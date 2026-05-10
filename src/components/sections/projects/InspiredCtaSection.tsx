import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/sections/shared/CtaBand";
export function InspiredCtaSection() {
    return (<CtaBand tone="primary" id="inspired-cta-title" title="Inspired by What You've Seen?" description="Every project on this page was made possible by people who believed in CNF's mission. You can be part of the next one." actions={<>
          <ButtonLink href="/donate" variant="accent" size="md">
            Donate today
          </ButtonLink>
          <ButtonLink href="/get-involved" variant="dark-outline" size="md">
            Get involved
          </ButtonLink>
        </>}/>);
}
