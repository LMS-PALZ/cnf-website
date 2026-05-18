import { HomeHero, ImpactSection, JoinUsSection, OurWorkSection, VoicesSection, WhoWeAreSection, } from "@/components/sections/home";
export default function HomePage() {
    return (<>
      <HomeHero eyebrow="Est. 2024 · Abuja, Nigeria" title="Providing" titleAccent="Opportunities," titleTrailing="Impacting Lives." description="We equip underserved Nigerians with skills, education, and humanitarian support, building futures from the ground up."/>

      <WhoWeAreSection />

      <OurWorkSection />

      <ImpactSection />

      <VoicesSection />

      <JoinUsSection />
    </>);
}
