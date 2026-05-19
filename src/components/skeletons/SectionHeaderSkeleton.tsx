import { cn } from "@/lib/cn";
import { Skeleton } from "@/components/ui/Skeleton";

type Props = {
    className?: string;
    centered?: boolean;
};

export function SectionHeaderSkeleton({ className, centered }: Props) {
    return (
        <div
            className={cn(
                "flex max-w-2xl flex-col gap-3",
                centered && "mx-auto items-center text-center",
                className,
            )}
            aria-hidden
        >
            <Skeleton variant="eyebrow" announce={false} />
            <Skeleton variant="title" announce={false} itemClassName="h-9 w-full max-w-md" />
            <Skeleton variant="paragraph" announce={false} count={2} className="gap-2" />
        </div>
    );
}
