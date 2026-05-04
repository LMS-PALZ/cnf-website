import {
  CnfInActionSection,
  FollowOurJourneySection,
  InspiredCtaSection,
  ProjectsHero,
  ProjectsStatsBand,
  WhatWeveDoneSection,
} from "@/components/sections/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Projects — Our work in action",
  "Browse Chiggy Nsofor Foundation projects across Skills Development, Education, and Humanitarian Aid & Healthcare — every project a real community, a real intervention, a real outcome.",
);

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsStatsBand />

      <WhatWeveDoneSection />

      <CnfInActionSection />

      <FollowOurJourneySection />

      <InspiredCtaSection />
    </>
  );
}
