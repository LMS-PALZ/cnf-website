import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export function PillarHomeCardSkeleton() {
    return (
        <Card tone="elevated" padding="none" className="flex h-full flex-col" as="div" aria-hidden>
            <Skeleton
                variant="image"
                announce={false}
                className="gap-0"
                itemClassName="min-h-[13rem] rounded-none rounded-t-xl sm:min-h-[15rem] md:min-h-[17rem]"
            />
            <div className="flex flex-col gap-4 p-6">
                <Skeleton variant="paragraph" announce={false} count={3} className="gap-2" />
                <Skeleton variant="text" announce={false} itemClassName="mt-2 h-4 w-24" />
            </div>
        </Card>
    );
}
