import { cn } from "@/lib/cn";
import { Skeleton } from "@/components/ui/Skeleton";

type Props = {
    count?: number;
    className?: string;
    /** Wider pills for mobile stacked layout */
    stacked?: boolean;
};

export function NavSkeleton({ count = 6, className, stacked = false }: Props) {
    return (
        <div
            className={cn(
                stacked ? "flex flex-col gap-2 py-1" : "flex flex-wrap items-center justify-center gap-6",
                className,
            )}
            aria-hidden
        >
            {Array.from({ length: count }).map((_, i) => (
                <Skeleton
                    key={i}
                    variant="text"
                    announce={false}
                    itemClassName={cn(
                        "h-4 rounded-md",
                        stacked ? "w-full max-w-[12rem]" : "w-16 lg:w-20",
                    )}
                />
            ))}
        </div>
    );
}
