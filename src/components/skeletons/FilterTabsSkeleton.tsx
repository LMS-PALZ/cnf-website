import { cn } from "@/lib/cn";
import { Skeleton } from "@/components/ui/Skeleton";

type Props = {
    count?: number;
    className?: string;
};

export function FilterTabsSkeleton({ count = 4, className }: Props) {
    return (
        <div className={cn("flex flex-wrap gap-2", className)} aria-hidden>
            {Array.from({ length: count }).map((_, i) => (
                <Skeleton
                    key={i}
                    variant="badge"
                    announce={false}
                    itemClassName="h-9 w-24 rounded-full"
                />
            ))}
        </div>
    );
}
