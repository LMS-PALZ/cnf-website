import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Skeleton } from "@/components/ui/Skeleton";
import { PageBannerSkeleton } from "../PageBannerSkeleton";
import { NewsFeaturedSkeleton } from "../NewsFeaturedSkeleton";
import { NewsCardSkeleton } from "../NewsCardSkeleton";
import { FilterTabsSkeleton } from "../FilterTabsSkeleton";

export function NewsPageSkeleton() {
    return (
        <div role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <PageBannerSkeleton />

            <Section tone="surface" padding="lg" aria-hidden>
                <Container>
                    <FilterTabsSkeleton count={4} />
                    <div className="mt-10">
                        <NewsFeaturedSkeleton />
                    </div>
                    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <li key={i}>
                                <NewsCardSkeleton />
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <Skeleton variant="card" announce={false} itemClassName="h-40" />
                </Container>
            </Section>
        </div>
    );
}
