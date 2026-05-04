import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRightIcon } from "@/components/ui/icons";
import { giveOptions } from "@/data/donate/give-options";
import { donateConfig, site } from "@/lib/site";
import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/cn";
import { BankAccountCard } from "./BankAccountCard";

const hrefForOption: Record<string, string> = {
  online: donateConfig.korapayUrl,
  abroad: `mailto:${site.contactEmail}?subject=International donation enquiry`,
};

/**
 * "Three Ways to Donate" — three equal-width cards showing each giving
 * channel: Korapay, bank transfer (with inline copy-able account details),
 * and an outline link for international donors.
 */
export function HowToGiveSection() {
  const bankRows = [
    { label: "Account Name", value: donateConfig.bank.accountName },
    {
      label: "Account Number",
      value: donateConfig.bank.accountNumber,
      copyable: true,
    },
    { label: "Bank", value: donateConfig.bank.bankName },
  ];

  return (
    <section
      id="how-to-give"
      aria-labelledby="how-to-give-title"
      className="scroll-mt-24 bg-cnf-surface py-16 md:py-24"
    >
      <Container>
        <SectionHeader
          eyebrow="How to give"
          title="Three Ways to"
          titleAccent="Donate"
          accent="primary"
          description="Choose the option that works best for you. All donations are processed securely and go directly to CNF\u2019s programmes."
          id="how-to-give-title"
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {giveOptions.map((opt) => (
            <li key={opt.id} className="flex">
              <Card
                tone="elevated"
                padding="lg"
                className="flex w-full flex-col text-center"
              >
                <div className="flex flex-col items-center">
                  <IconTile
                    iconKey={opt.iconKey}
                    tone={opt.iconTone}
                    size="lg"
                  />
                  <h3
                    className={cn(
                      fontDisplay.className,
                      "mt-4 text-2xl font-semibold text-cnf-ink"
                    )}
                  >
                    {opt.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cnf-muted">
                    {opt.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-1 flex-col justify-end">
                  {opt.action === "primary" ? (
                    <ButtonLink
                      href={hrefForOption[opt.id]}
                      variant="primary"
                      size="md"
                      className="w-full"
                    >
                      <span className="inline-flex items-center gap-2">
                        {opt.ctaLabel}
                        <ArrowRightIcon className="h-4 w-4" />
                      </span>
                    </ButtonLink>
                  ) : null}

                  {opt.action === "outline" ? (
                    <ButtonLink
                      href={hrefForOption[opt.id]}
                      variant="secondary"
                      size="md"
                      className="w-full"
                    >
                      <span className="inline-flex items-center gap-2">
                        {opt.ctaLabel}
                        <ArrowRightIcon className="h-4 w-4" />
                      </span>
                    </ButtonLink>
                  ) : null}

                  {opt.action === "bank-card" ? (
                    <BankAccountCard rows={bankRows} />
                  ) : null}
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
