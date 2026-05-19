import { cn } from "@/lib/cn";
import { Skeleton } from "@/components/ui/Skeleton";

type Props = {
    className?: string;
    dark?: boolean;
};

export function CtaBandSkeleton({ className, dark }: Props) {
    return (
        <div
            className={cn(
                "flex flex-col items-center gap-6 text-center",
                className,
            )}
            aria-hidden
        >
            <Skeleton
                variant="title"
                announce={false}
                itemClassName={cn("mx-auto h-9 max-w-md", dark && "opacity-80")}
            />
            <Skeleton variant="paragraph" announce={false} itemClassName="mx-auto max-w-lg" />
            <div className="flex flex-wrap justify-center gap-3">
                <Skeleton variant="button" announce={false} itemClassName="h-11 w-36" />
                <Skeleton variant="button" announce={false} itemClassName="h-11 w-36" />
            </div>
        </div>
    );
}
