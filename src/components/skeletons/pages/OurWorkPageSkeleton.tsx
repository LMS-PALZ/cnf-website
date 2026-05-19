import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageBannerSkeleton } from "../PageBannerSkeleton";
import { PillarMediaCardSkeleton } from "../PillarMediaCardSkeleton";
import { SectionHeaderSkeleton } from "../SectionHeaderSkeleton";
import { CtaBandSkeleton } from "../CtaBandSkeleton";
import { Skeleton } from "@/components/ui/Skeleton";

export function OurWorkPageSkeleton() {
    return (
        <div role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <PageBannerSkeleton />

            {[0, 1, 2].map((i) => (
                <Section key={i} tone={i % 2 === 0 ? "cream" : "light"} padding="lg" aria-hidden>
                    <Container>
                        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                            <SectionHeaderSkeleton />
                            <PillarMediaCardSkeleton />
                        </div>
                        <div className="mt-10 grid gap-6 md:grid-cols-2">
                            <Skeleton variant="card" announce={false} />
                            <Skeleton variant="card" announce={false} />
                        </div>
                    </Container>
                </Section>
            ))}

            <Section tone="surface" padding="lg" aria-hidden>
                <Container>
                    <SectionHeaderSkeleton />
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} variant="stat" announce={false} itemClassName="h-24" />
                        ))}
                    </div>
                </Container>
            </Section>

            <Section tone="primary" padding="lg" aria-hidden>
                <Container>
                    <CtaBandSkeleton dark />
                </Container>
            </Section>
        </div>
    );
}
