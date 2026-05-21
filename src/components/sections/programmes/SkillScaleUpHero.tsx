import { PageBanner } from "@/components/sections/PageBanner";
import { pageBannerImages } from "@/data/page-banners";
import { ssuHero } from "@/data/programmes/skill-scale-up";

export function SkillScaleUpHero() {
    return (
        <PageBanner
            id="ssu-hero-title"
            breadcrumbLabel="SSU Programme"
            image={pageBannerImages.skillScaleUp}
            title={
                <>
                    {ssuHero.title.line1}
                    <br />
                    {ssuHero.title.line2}{" "}
                    <span className="text-cnf-accent">{ssuHero.title.accent}</span>
                </>
            }
            description={ssuHero.description}
        />
    );
}
