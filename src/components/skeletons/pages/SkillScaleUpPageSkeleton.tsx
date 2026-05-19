import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";
import { PageBannerSkeleton } from "../PageBannerSkeleton";

export function SkillScaleUpPageSkeleton() {
    return (
        <div role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <PageBannerSkeleton />

            <section className="py-16 md:py-24" aria-hidden>
                <Container className="max-w-3xl space-y-10">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="space-y-4">
                            <Skeleton variant="title" announce={false} itemClassName="h-7 w-48" />
                            <Skeleton variant="paragraph" announce={false} count={3} className="gap-2" />
                        </div>
                    ))}
                    <Skeleton variant="button" announce={false} itemClassName="h-11 w-40" />
                </Container>
            </section>
        </div>
    );
}
