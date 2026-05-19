import { CtaBand } from "@/components/sections/shared/CtaBand";
import { DonatePayButton } from "@/components/payments/DonatePayButton";
export function EveryGiftCtaSection() {
    return (<CtaBand tone="dark" id="every-gift-cta-title" title={<>
          Every Gift is a
          <br />
          <span className="text-cnf-accent">Future Changed.</span>
        </>} description={<>
          It takes less than two minutes. Your donation goes directly to a
          young person learning a skill, a child back in school, or a family
          with food on the table tonight.
        </>} actions={<DonatePayButton variant="accent" size="lg" purpose="Every gift CTA">
          Donate Now
        </DonatePayButton>}/>);
}
