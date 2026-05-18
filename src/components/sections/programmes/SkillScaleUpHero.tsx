import { PageBanner } from "@/components/sections/PageBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageBannerImages } from "@/data/page-banners";

export function SkillScaleUpHero() {
    return (
        <PageBanner
            id="ssu-hero-title"
            breadcrumbLabel="SSU Programme"
            image={pageBannerImages.skillScaleUp}
            title={
                <>
                    Skill Scale-Up
                    <br />
                    <span className="text-cnf-accent">Programme.</span>
                </>
            }
            description="Free, cohort-based training for Nigerian youth aged 15 to 30 — digital skills, vocational trades, and the support to turn learning into real income."
        >
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/get-involved#volunteer" variant="accent" size="lg">
                    Apply or volunteer
                </ButtonLink>
                <ButtonLink href="/our-work#skills" variant="dark-outline" size="lg">
                    View skills pillar
                </ButtonLink>
            </div>
        </PageBanner>
    );
}
