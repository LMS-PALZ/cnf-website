import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Skeleton } from "@/components/ui/Skeleton";
import { PageBannerSkeleton } from "../PageBannerSkeleton";
import { SectionHeaderSkeleton } from "../SectionHeaderSkeleton";
import { TeamMemberCardSkeleton } from "../TeamMemberCardSkeleton";

export function AboutPageSkeleton() {
    return (
        <div role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <PageBannerSkeleton />

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <SectionHeaderSkeleton />
                        <Skeleton variant="paragraph" announce={false} count={6} className="gap-2" />
                    </div>
                </Container>
            </Section>

            <Section tone="cream" padding="lg" aria-hidden>
                <Container>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <Skeleton variant="image" announce={false} itemClassName="min-h-[280px] rounded-xl" />
                        <Skeleton variant="card" announce={false} itemClassName="h-48" />
                    </div>
                </Container>
            </Section>

            <Section tone="surface" padding="lg" aria-hidden>
                <Container>
                    <SectionHeaderSkeleton />
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <TeamMemberCardSkeleton key={i} />
                        ))}
                    </div>
                </Container>
            </Section>

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <SectionHeaderSkeleton />
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} variant="stat" announce={false} itemClassName="h-28" />
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
