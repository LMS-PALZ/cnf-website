import { GetInvolvedSubHero } from "@/components/sections/get-involved/GetInvolvedSubHero";
import { NotSureWhereSection } from "@/components/sections/get-involved/NotSureWhereSection";
import { VolunteerSection } from "@/components/sections/get-involved/VolunteerSection";
import { getInvolvedRoutes } from "@/data/get-involved/nav";
import { volunteerPageHero } from "@/data/get-involved/page-heroes";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
    "Volunteer",
    "Volunteer with the Chiggy Foundation for Opportunity and use your time and skills to support communities across Nigeria.",
);

export default function VolunteerPage() {
    return (
        <>
            <GetInvolvedSubHero
                hero={volunteerPageHero}
                currentHref={getInvolvedRoutes.volunteer.href}
            />
            <VolunteerSection />
            <NotSureWhereSection />
        </>
    );
}
