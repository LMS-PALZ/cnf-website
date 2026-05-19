import Link from "next/link";
import { PageBanner } from "@/components/sections/PageBanner";
import { pageBannerImages } from "@/data/page-banners";

const anchorPills = [
    { href: "#partnership", label: "Partner With Us", dot: "bg-cnf-accent" },
    { href: "#volunteer", label: "Volunteer", dot: "bg-cnf-pillar-education" },
    { href: "#careers", label: "Careers", dot: "bg-cnf-muted" },
] as const;

export function GetInvolvedHero() {
    return (
        <PageBanner
            id="get-involved-hero-title"
            breadcrumbLabel="Get Involved"
            image={pageBannerImages.getInvolved}
            title={
                <>
                    Join the
                    <br />
                    <span className="text-cnf-accent">Movement.</span>
                </>
            }
            description="CNF's work is only possible because people choose to show up, with their resources, their time, and their skills. Whether you are an organisation, an individual, or a professional looking for purpose-driven work, there is a place for you here."
        >
            <ul className="flex flex-wrap gap-3">
                {anchorPills.map((pill) => (
                    <li key={pill.href}>
                        <Link
                            href={pill.href}
                            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                        >
                            <span
                                aria-hidden
                                className={`h-2 w-2 rounded-full ${pill.dot}`}
                            />
                            {pill.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </PageBanner>
    );
}
