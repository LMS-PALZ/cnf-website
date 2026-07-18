import { OurWorkHero, PillarBlock, ReadyToSupportSection, SdgSection, } from "@/components/sections/our-work";
import { ourWorkPillars } from "@/data/our-work/pillars";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Our work", "Three interconnected pillars, Skills Development, Education, and Humanitarian Aid & Healthcare, and how the Chiggy Foundation for Opportunity delivers programmes across Nigeria.");
export default function OurWorkPage() {
    return (<>
      <OurWorkHero pillars={ourWorkPillars}/>

      {ourWorkPillars.map((pillar, index) => (<PillarBlock key={pillar.id} pillar={pillar} surface={index % 2 === 0 ? "cream" : "light"}/>))}

      <SdgSection />

      <ReadyToSupportSection />
    </>);
}
