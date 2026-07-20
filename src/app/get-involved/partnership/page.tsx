import { GetInvolvedSubHero } from "@/components/sections/get-involved/GetInvolvedSubHero";
import { NotSureWhereSection } from "@/components/sections/get-involved/NotSureWhereSection";
import { PartnershipSection } from "@/components/sections/get-involved/PartnershipSection";
import { getInvolvedRoutes } from "@/data/get-involved/nav";
import { partnershipPageHero } from "@/data/get-involved/page-heroes";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
    "Partnership",
    "Partner with the Chiggy Foundation for Opportunity to support evidence-based, community-centred impact across Nigeria.",
);

export default function PartnershipPage() {
    return (
        <>
            <GetInvolvedSubHero
                hero={partnershipPageHero}
                currentHref={getInvolvedRoutes.partnership.href}
            />
            <PartnershipSection />
            <NotSureWhereSection />
        </>
    );
}
