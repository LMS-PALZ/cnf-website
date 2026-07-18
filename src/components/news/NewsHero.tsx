import { PageBanner } from "@/components/sections/PageBanner";
import { pageBannerImages } from "@/data/page-banners";

export function NewsHero() {
    return (
        <PageBanner
            id="news-hero-title"
            breadcrumbLabel="News"
            image={pageBannerImages.news}
            title={
                <>
                    Stories, Updates
                    <br />
                    &amp; <span className="text-cnf-accent">Impact.</span>
                </>
            }
            description="Stay up to date with everything happening at CFO, from programme milestones and community outreaches to new partnerships and announcements."
        />
    );
}
