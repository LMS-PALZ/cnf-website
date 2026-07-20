import { DonatePageClient } from "@/app/donate/DonatePageClient";
import { DonateHero } from "@/components/sections/donate/DonateHero";
import { EveryGiftCtaSection } from "@/components/sections/donate/EveryGiftCtaSection";
import { HowToGiveSection } from "@/components/sections/donate/HowToGiveSection";
import { TestimonialSection } from "@/components/sections/donate/TestimonialSection";
import { TrustStripSection } from "@/components/sections/donate/TrustStripSection";
import { WhereItGoesSection } from "@/components/sections/donate/WhereItGoesSection";
import { YourImpactSection } from "@/components/sections/donate/YourImpactSection";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
    "Donate",
    "Support the Chiggy Foundation for Opportunity \u2014 every naira goes directly into skills training, education, and humanitarian programmes across Nigeria.",
);

export default function DonatePage() {
    return (
        <DonatePageClient>
            <DonateHero />
            <YourImpactSection />
            <HowToGiveSection />
            <WhereItGoesSection />
            <TrustStripSection />
            <TestimonialSection />
            <EveryGiftCtaSection />
        </DonatePageClient>
    );
}
