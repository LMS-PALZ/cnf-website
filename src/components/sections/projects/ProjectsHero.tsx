import { PageBanner } from "@/components/sections/PageBanner";
import { pageBannerImages } from "@/data/page-banners";

export function ProjectsHero() {
    return (
        <PageBanner
            id="projects-hero-title"
            breadcrumbLabel="Projects"
            image={pageBannerImages.projects}
            title={
                <>
                    Our Work.
                    <br />
                    <span className="text-cnf-accent">In Action.</span>
                </>
            }
            description="Every project below represents real people, real communities, and real outcomes. Browse our work across all three pillars, and watch us in action."
        />
    );
}
