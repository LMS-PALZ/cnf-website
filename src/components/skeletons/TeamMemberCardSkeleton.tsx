import { Skeleton } from "@/components/ui/Skeleton";

export function TeamMemberCardSkeleton() {
    return (
        <div className="flex flex-col items-center text-center" aria-hidden>
            <Skeleton variant="avatar" announce={false} itemClassName="h-28 w-28" />
            <Skeleton variant="title" announce={false} className="mt-4" itemClassName="h-5 w-32" />
            <Skeleton variant="eyebrow" announce={false} className="mt-2" itemClassName="w-24" />
            <Skeleton variant="paragraph" announce={false} className="mt-3 w-full" count={2} />
        </div>
    );
}
