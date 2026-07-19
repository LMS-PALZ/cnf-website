import { CnfInActionSection, FollowOurJourneySection, InspiredCtaSection, ProjectsHero, WhatWeveDoneSection, } from "@/components/sections/projects";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Projects, Our work in action", "Browse Chiggy Foundation for Opportunity projects across Economic Empowerment, Education, and Humanitarian Aid & Healthcare, every project a real community, a real intervention, a real outcome.");
export default function ProjectsPage() {
    return (<>
      <ProjectsHero />

      <WhatWeveDoneSection />

      <InspiredCtaSection />

      <CnfInActionSection />

      <FollowOurJourneySection />
    </>);
}
