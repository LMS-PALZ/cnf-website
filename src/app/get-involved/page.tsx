import { CareersSection } from "@/components/sections/get-involved/CareersSection";
import { GetInvolvedHero } from "@/components/sections/get-involved/GetInvolvedHero";
import { NotSureWhereSection } from "@/components/sections/get-involved/NotSureWhereSection";
import { PartnershipSection } from "@/components/sections/get-involved/PartnershipSection";
import { VolunteerSection } from "@/components/sections/get-involved/VolunteerSection";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Get Involved, Partner, Volunteer, Careers", "Partner with CNF, volunteer your skills, or register interest in careers, every contribution helps us reach more communities.");
export default function GetInvolvedPage() {
    return (<>
      <GetInvolvedHero />
      <PartnershipSection />
      <VolunteerSection />
      <CareersSection />
      <NotSureWhereSection />
    </>);
}
