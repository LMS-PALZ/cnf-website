import { CareersSection } from "@/components/sections/get-involved/CareersSection";
import { GetInvolvedSubHero } from "@/components/sections/get-involved/GetInvolvedSubHero";
import { NotSureWhereSection } from "@/components/sections/get-involved/NotSureWhereSection";
import { getInvolvedRoutes } from "@/data/get-involved/nav";
import { careersPageHero } from "@/data/get-involved/page-heroes";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
    "Careers — Get Involved",
    "Explore careers at the Chiggy Nsofor Foundation and join a team committed to purpose-driven work in Nigeria.",
);

export default function CareersPage() {
    return (
        <>
            <GetInvolvedSubHero
                hero={careersPageHero}
                currentHref={getInvolvedRoutes.careers.href}
            />
            <CareersSection />
            <NotSureWhereSection />
        </>
    );
}
