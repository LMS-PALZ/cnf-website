import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageBannerSkeleton } from "../PageBannerSkeleton";
import { ProjectCardSkeleton } from "../ProjectCardSkeleton";
import { FilterTabsSkeleton } from "../FilterTabsSkeleton";
import { SectionHeaderSkeleton } from "../SectionHeaderSkeleton";
import { CtaBandSkeleton } from "../CtaBandSkeleton";
import { VideoPlayerSkeleton } from "../VideoPlayerSkeleton";

export function ProjectsPageSkeleton() {
    return (
        <div role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <PageBannerSkeleton />

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <SectionHeaderSkeleton />
                    <FilterTabsSkeleton className="mt-8" count={4} />
                    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <li key={i}>
                                <ProjectCardSkeleton />
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>

            <Section tone="cream" padding="lg" aria-hidden>
                <Container>
                    <CtaBandSkeleton />
                </Container>
            </Section>

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <SectionHeaderSkeleton />
                    <div className="mt-10">
                        <VideoPlayerSkeleton />
                    </div>
                </Container>
            </Section>

            <Section tone="surface" padding="lg" aria-hidden>
                <Container>
                    <CtaBandSkeleton />
                </Container>
            </Section>
        </div>
    );
}
