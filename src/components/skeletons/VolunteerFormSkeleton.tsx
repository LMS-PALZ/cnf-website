import { cn } from "@/lib/cn";
import { FormFieldSkeleton } from "./FormFieldSkeleton";
import { Skeleton } from "@/components/ui/Skeleton";

export function VolunteerFormSkeleton({ className }: { className?: string }) {
    return (
        <div className={cn("space-y-5", className)} aria-hidden>
            <div className="grid gap-5 sm:grid-cols-2">
                <FormFieldSkeleton />
                <FormFieldSkeleton />
            </div>
            <FormFieldSkeleton />
            <FormFieldSkeleton />
            <div className="grid gap-5 sm:grid-cols-2">
                <FormFieldSkeleton />
                <FormFieldSkeleton />
            </div>
            <FormFieldSkeleton type="select" />
            <FormFieldSkeleton type="select" />
            <FormFieldSkeleton />
            <FormFieldSkeleton type="select" />
            <FormFieldSkeleton type="select" />
            <Skeleton variant="button" announce={false} itemClassName="h-11 w-full" />
        </div>
    );
}
