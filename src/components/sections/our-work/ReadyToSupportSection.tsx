import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/sections/shared/CtaBand";
export function ReadyToSupportSection() {
    return (<CtaBand tone="dark" id="ready-to-support-title" title={<>
          Ready to Support
          <br />
          <span className="text-cnf-accent">This Work?</span>
        </>} description="Whether through a donation, a partnership, or your time, every contribution directly funds one of these three pillars and the lives they change." actions={<>
          <ButtonLink href="/donate" variant="accent" size="md">
            Donate today
          </ButtonLink>
          <ButtonLink href="/get-involved#partner" variant="dark-outline" size="md">
            Become a partner
          </ButtonLink>
        </>}/>);
}
