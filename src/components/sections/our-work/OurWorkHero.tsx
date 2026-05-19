import Link from "next/link";
import { PageBanner } from "@/components/sections/PageBanner";
import { cn } from "@/lib/cn";
import { pageBannerImages } from "@/data/page-banners";
import { pillarTheme } from "@/lib/pillar-theme";
import type { PillarBlockData } from "@/data/our-work/pillars";

type Props = {
    pillars: Pick<PillarBlockData, "id" | "theme" | "heading">[];
};

const labels: Record<string, string> = {
    skills: "Skill Development",
    education: "Education",
    humanitarian: "Humanitarian Aid & Healthcare",
};

export function OurWorkHero({ pillars }: Props) {
    return (
        <PageBanner
            id="our-work-hero-title"
            breadcrumbLabel="Our work"
            image={pageBannerImages.ourWork}
            title={
                <>
                    Three Pillars.
                    <br />
                    <span className="text-cnf-accent">One Mission.</span>
                </>
            }
            description="Everything CNF does sits under one of three interconnected pillars. Together, they form a holistic response to the challenges facing underserved Nigerians, equipping people with skills, knowledge, and the support they need to thrive."
        >
            <ul className="flex flex-wrap gap-3">
                {pillars.map((p) => (
                    <li key={p.id}>
                        <Link
                            href={`#${p.id}`}
                            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                        >
                            <span
                                aria-hidden
                                className={cn("h-2 w-2 rounded-full", pillarTheme[p.theme].dot)}
                            />
                            {labels[p.theme] ?? p.heading}
                        </Link>
                    </li>
                ))}
            </ul>
        </PageBanner>
    );
}
