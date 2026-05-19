import { DonatePayButton } from "@/components/payments/DonatePayButton";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/sections/shared/CtaBand";
export function InspiredCtaSection() {
    return (<CtaBand fullWidth tone="primary" id="inspired-cta-title" title="Inspired by What You've Seen?" description="Every project on this page was made possible by people who believed in CNF's mission. You can be part of the next one." actions={<>
          <DonatePayButton variant="accent" size="md" purpose="Projects CTA">
            Donate today
          </DonatePayButton>
          <ButtonLink href="/get-involved" variant="dark-outline" size="md">
            Get involved
          </ButtonLink>
        </>}/>);
}
