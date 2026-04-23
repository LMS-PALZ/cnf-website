import { DonateIntentForm } from "@/components/forms/DonateIntentForm";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "Donate — support Nigerian communities",
  "Support the Chiggy Nsofor Foundation with transparent giving options and a donor interest form.",
);

export default function DonatePage() {
  const bankName = process.env.NEXT_PUBLIC_DONATE_BANK_NAME ?? "Provided after finance verification";
  const accountName = process.env.NEXT_PUBLIC_DONATE_ACCOUNT_NAME ?? "Chiggy Nsofor Foundation";
  const accountNumber = process.env.NEXT_PUBLIC_DONATE_ACCOUNT_NUMBER ?? "0000000000";

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Support Nigerian communities."
        description="Your giving funds training, learning materials, and humanitarian response. We publish how funds are used and welcome questions from donors at any time."
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink`}>
              Transparency
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cnf-muted">
              Donations are allocated across programme delivery, safeguarding, monitoring, and minimal
              administrative overhead. Online card payments will be added once approved by finance and
              legal counsel — this page currently lists bank instructions and a donor interest form.
            </p>

            <h3 className={`${fontDisplay.className} mt-10 text-xl font-semibold text-cnf-ink`}>
              Bank transfer (NGN)
            </h3>
            <dl className="mt-4 space-y-3 rounded-xl border border-cnf-primary/10 bg-cnf-surface p-6 text-sm text-cnf-muted">
              <div>
                <dt className="font-semibold text-cnf-ink">Bank name</dt>
                <dd>{bankName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cnf-ink">Account name</dt>
                <dd>{accountName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cnf-ink">Account number</dt>
                <dd>{accountNumber}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-cnf-muted">
              Prefer to confirm details first? Email{" "}
              <a className="font-semibold text-cnf-primary underline-offset-2 hover:underline" href={`mailto:${site.contactEmail}`}>
                {site.contactEmail}
              </a>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-cnf-primary/10 bg-white p-6 shadow-sm md:p-8">
            <h2 className={`${fontDisplay.className} text-2xl font-semibold text-cnf-ink`}>
              Donor interest form
            </h2>
            <p className="mt-3 text-sm text-cnf-muted">
              Tell us how you would like to give. Submissions are validated on the server; we never store
              card details on this site.
            </p>
            <div className="mt-8">
              <DonateIntentForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
