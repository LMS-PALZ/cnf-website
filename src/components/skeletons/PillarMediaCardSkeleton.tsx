import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export function PillarMediaCardSkeleton() {
    return (
        <div className="flex flex-col gap-6" aria-hidden>
            <div className="relative overflow-hidden rounded-2xl bg-cnf-surface ring-1 ring-black/5">
                <Skeleton
                    variant="image"
                    announce={false}
                    className="gap-0"
                    itemClassName="min-h-[22rem] rounded-none sm:min-h-[28rem] md:min-h-[34rem]"
                />
                <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                    <Card tone="dark" padding="md" className="bg-cnf-night/95">
                        <Skeleton variant="eyebrow" announce={false} itemClassName="bg-white/20" />
                        <Skeleton
                            variant="title"
                            announce={false}
                            className="mt-2"
                            itemClassName="h-10 w-32 bg-white/20 md:h-12"
                        />
                        <Skeleton
                            variant="paragraph"
                            announce={false}
                            className="mt-2"
                            itemClassName="bg-white/15"
                        />
                    </Card>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
                <Skeleton variant="stat" announce={false} />
                <Skeleton variant="stat" announce={false} />
            </div>
        </div>
    );
}
