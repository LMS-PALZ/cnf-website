import { CtaBand } from "@/components/sections/shared/CtaBand";
import { DonatePayLinkButton } from "@/components/payments/DonatePayButton";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";
export function NotSureWhereSection() {
    return (<CtaBand tone="dark" id="not-sure-where-title" title={<>
          Not Sure Where
          <br />
          <span className="text-cnf-accent">You Fit In?</span>
        </>} description={<>
          Reach out directly and let&rsquo;s find the right way for you to be part
          of what CNF is building. Every contribution, big or small, makes a
          difference.
        </>} actions={<>
          <ButtonLink href={`mailto:${site.contactEmail}`} variant="accent" size="lg">
            Contact Us Directly
          </ButtonLink>
          <DonatePayLinkButton size="lg" purpose="Get involved, donate instead">
            Donate Instead
          </DonatePayLinkButton>
        </>}/>);
}
