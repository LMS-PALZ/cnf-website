import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export function ProjectCardSkeleton() {
    return (
        <Card tone="elevated" padding="none" className="flex h-full flex-col" as="div" aria-hidden>
            <Skeleton
                variant="image"
                announce={false}
                className="gap-0"
                itemClassName="aspect-[16/10] rounded-none rounded-t-xl"
            />
            <div className="flex flex-col gap-3 p-5">
                <Skeleton variant="badge" announce={false} />
                <Skeleton variant="title" announce={false} itemClassName="h-6 w-4/5" />
                <Skeleton variant="paragraph" announce={false} count={3} className="gap-2" />
            </div>
        </Card>
    );
}
