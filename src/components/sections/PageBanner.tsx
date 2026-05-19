import Link from "next/link";
import type { ReactNode } from "react";
import { PageBannerBackground } from "@/components/sections/PageBannerBackground";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import type { PageBannerImage } from "@/data/page-banners";

/** Matches Projects page banner proportions across inner pages. */
export const PAGE_BANNER_SHELL =
    "relative flex min-h-[22rem] flex-col justify-end overflow-hidden sm:min-h-[24rem] lg:min-h-[26rem]";

export const PAGE_BANNER_INNER =
    "cnf-hero-page-enter-once relative z-[3] w-full px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-16 lg:py-24";

type Props = {
    id: string;
    breadcrumbLabel: string;
    title: ReactNode;
    description?: ReactNode;
    image: PageBannerImage;
    children?: ReactNode;
    className?: string;
};

export function PageBanner({
    id,
    breadcrumbLabel,
    title,
    description,
    image,
    children,
    className,
}: Props) {
    return (
        <section
            aria-labelledby={id}
            data-cnf-skip-enter="true"
            className={cn(PAGE_BANNER_SHELL, className)}
        >
            <PageBannerBackground src={image.src} alt={image.alt} />

            <div className={PAGE_BANNER_INNER}>
                <nav
                    aria-label="Breadcrumb"
                    className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]"
                >
                    <Link
                        href="/"
                        className="text-white/80 transition-colors hover:text-white"
                    >
                        Home
                    </Link>
                    <span aria-hidden className="text-white/45">
                        /
                    </span>
                    <span className="font-bold text-cnf-accent">{breadcrumbLabel}</span>
                </nav>

                <h1
                    id={id}
                    className={cn(
                        fontDisplay.className,
                        "mt-8 text-5xl font-bold leading-[1.04] text-white drop-shadow-sm md:text-6xl lg:text-7xl",
                    )}
                >
                    {title}
                </h1>

                {description ? (
                    <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/90 md:text-lg">
                        {description}
                    </p>
                ) : null}

                {children ? <div className="relative z-10 mt-8 w-full">{children}</div> : null}
            </div>
        </section>
    );
}
