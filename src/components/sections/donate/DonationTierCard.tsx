import { DonatePayButton } from "@/components/payments/DonatePayButton";
import { type DonationTier, type DonationTierVariant, } from "@/data/donate/donation-tiers";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
type Variants = Record<DonationTierVariant, {
    headerBg: string;
    headerAmount: string;
    headerSubtitle: string;
    cardBorder: string;
    buttonClassName: string;
}>;
const variants: Variants = {
    "soft-green": {
        headerBg: "bg-cnf-pillar-skills-soft",
        headerAmount: "text-cnf-primary",
        headerSubtitle: "text-cnf-primary/70",
        cardBorder: "border-cnf-border",
        buttonClassName: "bg-cnf-primary-light text-white hover:bg-cnf-primary",
    },
    "soft-gold": {
        headerBg: "bg-cnf-accent/15",
        headerAmount: "text-cnf-accent-hover",
        headerSubtitle: "text-cnf-accent-hover/80",
        cardBorder: "border-cnf-accent/40",
        buttonClassName: "bg-cnf-accent text-cnf-accent-ink hover:bg-cnf-accent-hover",
    },
    "solid-green": {
        headerBg: "bg-cnf-primary",
        headerAmount: "text-white",
        headerSubtitle: "text-white/75",
        cardBorder: "border-cnf-border",
        buttonClassName: "bg-cnf-primary-light text-white hover:bg-cnf-primary",
    },
    "solid-dark": {
        headerBg: "bg-cnf-night",
        headerAmount: "text-white",
        headerSubtitle: "text-white/70",
        cardBorder: "border-cnf-border",
        buttonClassName: "bg-cnf-primary text-white hover:bg-cnf-primary-light border border-white/25",
    },
};
type Props = {
    tier: DonationTier;
};
export function DonationTierCard({ tier }: Props) {
    const v = variants[tier.variant];
    return (<article className={cn("relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white", v.cardBorder)}>
      {tier.badge ? (<span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-cnf-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cnf-accent-ink">
          {tier.badge}
        </span>) : null}

      
      <div className={cn("px-6 pb-5 pt-7", v.headerBg)}>
        <p className={cn(fontDisplay.className, "text-3xl font-semibold leading-none md:text-4xl", v.headerAmount)}>
          {tier.amount}
        </p>
        {tier.amountSubtitle ? (
          <p className={cn("mt-2 text-[11px] font-semibold uppercase tracking-[0.22em]", v.headerSubtitle)}>
            {tier.amountSubtitle}
          </p>
        ) : null}
      </div>

      
      <div className="flex flex-1 flex-col p-6">
        <h3 className={cn(fontDisplay.className, "text-lg font-semibold text-cnf-ink")}>
          {tier.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-cnf-muted">
          {tier.description}
        </p>

        <ul className="mt-5 space-y-2 text-sm text-cnf-muted">
          {tier.bullets.map((b) => (<li key={b} className="flex items-start gap-2">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cnf-primary"/>
              <span>{b}</span>
            </li>))}
        </ul>

        <div className="mt-6 flex flex-1 flex-col justify-end">
          <DonatePayButton
            amountNaira={tier.amountNaira}
            lockAmount={tier.amountNaira != null}
            purpose={tier.title}
            size="md"
            fullWidth
            className={v.buttonClassName}
          >
            {tier.ctaLabel}
          </DonatePayButton>
        </div>
      </div>
    </article>);
}
