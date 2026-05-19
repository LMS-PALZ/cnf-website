import { PAGE_BANNER_INNER, PAGE_BANNER_SHELL } from "@/components/sections/PageBanner";
import { cn } from "@/lib/cn";
import { Skeleton } from "@/components/ui/Skeleton";

type Props = {
    className?: string;
};

export function PageBannerSkeleton({ className }: Props) {
    return (
        <section
            className={cn(PAGE_BANNER_SHELL, "bg-cnf-surface", className)}
            aria-hidden
        >
            <Skeleton
                variant="banner"
                announce={false}
                className="absolute inset-0 gap-0"
                itemClassName="h-full min-h-0 rounded-none"
            />
            <div className={PAGE_BANNER_INNER}>
                <div className="flex items-center gap-2">
                    <Skeleton variant="eyebrow" announce={false} itemClassName="w-12" />
                    <Skeleton variant="text" announce={false} itemClassName="h-2 w-2 rounded-full" />
                    <Skeleton variant="eyebrow" announce={false} itemClassName="w-24" />
                </div>
                <Skeleton
                    variant="title"
                    announce={false}
                    className="mt-8"
                    itemClassName="h-12 w-4/5 max-w-xl md:h-16"
                />
                <Skeleton
                    variant="paragraph"
                    announce={false}
                    className="mt-6 gap-2"
                    count={2}
                    itemClassName="max-w-2xl"
                />
            </div>
        </section>
    );
}
