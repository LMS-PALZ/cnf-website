import { cn } from "@/lib/cn";
import { FormFieldSkeleton } from "./FormFieldSkeleton";
import { Skeleton } from "@/components/ui/Skeleton";

export function DonateIntentFormSkeleton({ className }: { className?: string }) {
    return (
        <div className={cn("space-y-6", className)} aria-hidden>
            <FormFieldSkeleton />
            <FormFieldSkeleton />
            <FormFieldSkeleton />
            <div className="grid gap-5 sm:grid-cols-2">
                <FormFieldSkeleton />
                <FormFieldSkeleton />
            </div>
            <FormFieldSkeleton type="textarea" />
            <div className="flex items-center gap-3">
                <Skeleton variant="input" announce={false} itemClassName="h-5 w-5 shrink-0 rounded" />
                <Skeleton variant="text" announce={false} itemClassName="h-3 flex-1" />
            </div>
            <Skeleton variant="button" announce={false} itemClassName="h-11 w-full" />
        </div>
    );
}
