import {
    HomeHero,
    ImpactSection,
    JoinUsSection,
    OurWorkSection,
    VoicesSection,
    WhoWeAreSection,
} from "@/components/sections/home";

export default function HomePage() {
    return (
        <>
            <HomeHero
                eyebrow="Est. 2024 · Abuja, Nigeria"
                title="Potential"
                titleAccent="doesn't choose"
                titleTrailing="where it's born."
                description="We turn potential into opportunity for underserved Nigerians through economic empowerment, education, and care. Where you start should not decide where you finish."
            />

            <WhoWeAreSection />

            <OurWorkSection />

            <ImpactSection />

            <VoicesSection />

            <JoinUsSection />
        </>
    );
}
