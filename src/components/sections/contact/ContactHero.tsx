import { PageBanner } from "@/components/sections/PageBanner";
import { pageBannerImages } from "@/data/page-banners";

export function ContactHero() {
    return (
        <PageBanner
            id="contact-hero-title"
            breadcrumbLabel="Contact"
            image={pageBannerImages.contact}
            title={
                <>
                    Get in <span className="text-cnf-accent">Touch</span>
                </>
            }
            description="We would love to hear from you. Reach out for partnerships, volunteering, media enquiries, or general questions about our work."
        />
    );
}
