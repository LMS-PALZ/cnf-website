import { cn } from "@/lib/cn";
import { FormFieldSkeleton } from "./FormFieldSkeleton";
import { Skeleton } from "@/components/ui/Skeleton";

export function PartnershipFormSkeleton({ className }: { className?: string }) {
    return (
        <div className={cn("space-y-5", className)} aria-hidden>
            <div className="grid gap-5 sm:grid-cols-2">
                <FormFieldSkeleton />
                <FormFieldSkeleton />
            </div>
            <FormFieldSkeleton />
            <FormFieldSkeleton />
            <FormFieldSkeleton />
            <FormFieldSkeleton />
            <div className="space-y-2">
                <Skeleton variant="text" announce={false} itemClassName="h-3.5 w-48" />
                <div className="grid gap-2 sm:grid-cols-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton
                            key={i}
                            variant="input"
                            announce={false}
                            itemClassName="h-10"
                        />
                    ))}
                </div>
            </div>
            <FormFieldSkeleton type="textarea" />
            <Skeleton variant="button" announce={false} itemClassName="h-11 w-full" />
        </div>
    );
}
