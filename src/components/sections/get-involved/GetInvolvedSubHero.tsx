import Link from "next/link";
import { PageBanner } from "@/components/sections/PageBanner";
import { pageBannerImages } from "@/data/page-banners";
import { getInvolvedNavChildren } from "@/data/get-involved/nav";
import type { GetInvolvedPageHero } from "@/data/get-involved/page-heroes";

const pillDots = [
    "bg-cnf-accent",
    "bg-cnf-pillar-education",
    "bg-cnf-muted",
] as const;

type Props = {
    hero: GetInvolvedPageHero;
    currentHref: string;
};

export function GetInvolvedSubHero({ hero, currentHref }: Props) {
    return (
        <PageBanner
            id={hero.id}
            breadcrumbLabel={hero.breadcrumbLabel}
            image={pageBannerImages.getInvolved}
            title={hero.title}
            description={hero.description}
        >
            <ul className="flex flex-wrap gap-3">
                {getInvolvedNavChildren.map((item, index) => {
                    const isCurrent = item.href === currentHref;
                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                aria-current={isCurrent ? "page" : undefined}
                                className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent ${
                                    isCurrent
                                        ? "border-white/40 bg-white/20 text-white"
                                        : "border-white/15 bg-white/10 text-white hover:border-white/30 hover:bg-white/15"
                                }`}
                            >
                                <span
                                    aria-hidden
                                    className={`h-2 w-2 rounded-full ${pillDots[index] ?? pillDots[0]}`}
                                />
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </PageBanner>
    );
}
