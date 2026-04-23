import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy policy",
  "How the Chiggy Nsofor Foundation website collects, uses, and retains personal data submitted through forms.",
);

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-3xl space-y-6 text-base leading-relaxed text-cnf-muted">
        <h1 className={`${fontDisplay.className} text-4xl font-semibold text-cnf-ink`}>Privacy policy</h1>
        <p>
          This policy describes the personal data collected through {site.name}&apos;s website forms and
          how we use it. For questions, contact{" "}
          <a className="font-semibold text-cnf-primary underline-offset-2 hover:underline" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>
          .
        </p>
        <h2 className={`${fontDisplay.className} pt-4 text-2xl font-semibold text-cnf-ink`}>What we collect</h2>
        <p>
          Donor interest, volunteer, and careers forms collect the fields you submit (for example name,
          email, and free-text messages). Technical logs may include IP address and user agent for
          security monitoring.
        </p>
        <h2 className={`${fontDisplay.className} pt-4 text-2xl font-semibold text-cnf-ink`}>Why we collect it</h2>
        <p>
          We use submissions to respond to enquiries, coordinate volunteering, and improve website
          reliability. We do not sell personal data.
        </p>
        <h2 className={`${fontDisplay.className} pt-4 text-2xl font-semibold text-cnf-ink`}>Retention</h2>
        <p>
          Form submissions are retained only as long as needed to fulfil the purpose you contacted us
          about, unless a longer period is required by law or legitimate safeguarding practice.
        </p>
        <h2 className={`${fontDisplay.className} pt-4 text-2xl font-semibold text-cnf-ink`}>Cookies</h2>
        <p>
          This marketing site may use strictly necessary cookies for security and basic analytics. If we
          add optional analytics cookies later, we will update this page and, where required, collect
          consent.
        </p>
      </Container>
    </section>
  );
}
