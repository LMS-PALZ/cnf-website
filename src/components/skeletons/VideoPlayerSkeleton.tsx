import { Skeleton } from "@/components/ui/Skeleton";

export function VideoPlayerSkeleton() {
    return (
        <div className="space-y-6" aria-hidden>
            <Skeleton
                variant="image"
                announce={false}
                className="gap-0"
                itemClassName="aspect-video min-h-[16rem] rounded-xl sm:min-h-[18rem] md:min-h-[20rem]"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton
                        key={i}
                        variant="image"
                        announce={false}
                        itemClassName="aspect-video min-h-[10.5rem] rounded-lg"
                    />
                ))}
            </div>
        </div>
    );
}
