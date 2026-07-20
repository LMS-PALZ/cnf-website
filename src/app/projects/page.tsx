import { CnfInActionSection, FollowOurJourneySection, InspiredCtaSection, ProjectsHero, WhatWeveDoneSection, } from "@/components/sections/projects";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Projects", "Browse Chiggy Foundation for Opportunity projects across Economic Empowerment, Education, and Humanitarian Aid, every project a real community, a real intervention, a real outcome.");
export default function ProjectsPage() {
    return (<>
      <ProjectsHero />

      <WhatWeveDoneSection />

      <InspiredCtaSection />

      <CnfInActionSection />

      <FollowOurJourneySection />
    </>);
}
