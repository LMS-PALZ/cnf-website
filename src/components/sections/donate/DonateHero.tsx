import { PageBanner } from "@/components/sections/PageBanner";
import { pageBannerImages } from "@/data/page-banners";

export function DonateHero() {
    return (
        <PageBanner
            id="donate-hero-title"
            breadcrumbLabel="Donate"
            image={pageBannerImages.donate}
            title={
                <>
                    Your Gift
                    <br />
                    Changes a <span className="text-cnf-accent">Life.</span>
                </>
            }
            description="Every naira given to CFO goes directly into programmes that train young people, keep children in school, feed underserved families, and bring healthcare to those who cannot afford it. No overhead fluff. Real impact, documented and reported."
        />
    );
}
