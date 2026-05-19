import { cn } from "@/lib/cn";
import { Skeleton } from "@/components/ui/Skeleton";

type Props = {
    count?: number;
    className?: string;
};

export function StatBandSkeleton({ count = 3, className }: Props) {
    return (
        <div
            className={cn(
                "grid gap-4",
                count === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3",
                className,
            )}
            aria-hidden
        >
            {Array.from({ length: count }).map((_, i) => (
                <Skeleton key={i} variant="stat" announce={false} />
            ))}
        </div>
    );
}
