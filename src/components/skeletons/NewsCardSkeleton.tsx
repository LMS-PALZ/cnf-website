import { Skeleton } from "@/components/ui/Skeleton";

export function NewsCardSkeleton() {
    return (
        <article
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-cnf-border bg-white shadow-sm"
            aria-hidden
        >
            <Skeleton
                variant="image"
                announce={false}
                className="gap-0"
                itemClassName="aspect-auto h-20 rounded-none"
            />
            <div className="flex flex-1 flex-col gap-3 p-5">
                <Skeleton variant="title" announce={false} itemClassName="h-5 w-full" />
                <Skeleton variant="paragraph" announce={false} count={3} className="gap-2" />
                <div className="mt-auto flex justify-between pt-4">
                    <Skeleton variant="text" announce={false} itemClassName="h-3 w-24" />
                    <Skeleton variant="text" announce={false} itemClassName="h-3 w-16" />
                </div>
            </div>
        </article>
    );
}
