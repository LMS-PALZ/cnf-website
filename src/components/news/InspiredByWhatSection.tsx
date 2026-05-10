import { CtaBand } from "@/components/sections/shared/CtaBand";
import { ButtonLink } from "@/components/ui/ButtonLink";
export function InspiredByWhatSection() {
    return (<CtaBand tone="dark" id="inspired-by-what-title" title={<>
          Inspired by What
          <br />
          <span className="text-cnf-accent">You&rsquo;ve Read?</span>
        </>} description={<>
          Every story on this page was made possible by people who believed in
          CNF&rsquo;s mission. You can be part of the next chapter.
        </>} actions={<>
          <ButtonLink href="/donate" variant="accent" size="lg">
            Donate Today
          </ButtonLink>
          <ButtonLink href="/get-involved" variant="dark-outline" size="lg">
            Get Involved
          </ButtonLink>
        </>}/>);
}
