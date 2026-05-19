import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export function GiveOptionCardSkeleton() {
    return (
        <Card tone="elevated" padding="lg" className="flex h-full w-full flex-col" as="div" aria-hidden>
            <div className="flex flex-col items-center gap-3">
                <Skeleton variant="title" announce={false} itemClassName="h-7 w-2/3" />
                <Skeleton variant="paragraph" announce={false} count={2} className="w-full gap-2" />
            </div>
            <Skeleton
                variant="button"
                announce={false}
                className="mt-6"
                itemClassName="h-10 w-full"
            />
        </Card>
    );
}
