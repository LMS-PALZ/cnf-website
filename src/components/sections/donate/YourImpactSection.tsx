import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { donationTiers } from "@/data/donate/donation-tiers";
import { DonationTierCard } from "./DonationTierCard";

/**
 * "What Your Gift Funds" — four donation tier cards (Starter, Builder,
 * Champion, Custom). Each tier maps a concrete amount to specific impact
 * outcomes.
 */
export function YourImpactSection() {
  return (
    <section
      id="your-impact"
      aria-labelledby="your-impact-title"
      className="scroll-mt-24 bg-white py-16 md:py-24"
    >
      <Container>
        <SectionHeader
          eyebrow="Your impact"
          title="What Your"
          titleAccent="Gift Funds"
          accent="primary"
          description="We are specific about what donations achieve because we believe you deserve to know exactly what your generosity makes possible."
          id="your-impact-title"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {donationTiers.map((tier) => (
            <li key={tier.id} className="flex">
              <DonationTierCard tier={tier} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
