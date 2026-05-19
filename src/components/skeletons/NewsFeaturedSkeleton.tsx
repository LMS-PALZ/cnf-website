import { Skeleton } from "@/components/ui/Skeleton";

export function NewsFeaturedSkeleton() {
    return (
        <article
            className="overflow-hidden rounded-2xl border border-cnf-border bg-white shadow-sm"
            aria-hidden
        >
            <div className="grid md:grid-cols-2">
                <Skeleton
                    variant="image"
                    announce={false}
                    className="gap-0"
                    itemClassName="min-h-[260px] rounded-none md:min-h-[320px]"
                />
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <Skeleton variant="eyebrow" announce={false} itemClassName="w-40" />
                    <Skeleton variant="title" announce={false} itemClassName="h-8 w-full md:h-9" />
                    <Skeleton variant="paragraph" announce={false} count={4} className="gap-2" />
                    <div className="mt-auto flex justify-between pt-4">
                        <Skeleton variant="text" announce={false} itemClassName="h-3 w-28" />
                        <Skeleton variant="text" announce={false} itemClassName="h-3 w-32" />
                    </div>
                </div>
            </div>
        </article>
    );
}
