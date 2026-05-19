import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Skeleton } from "@/components/ui/Skeleton";
import { PageBannerSkeleton } from "../PageBannerSkeleton";
import { GiveOptionCardSkeleton } from "../GiveOptionCardSkeleton";
import { SectionHeaderSkeleton } from "../SectionHeaderSkeleton";
import { StatBandSkeleton } from "../StatBandSkeleton";
import { CtaBandSkeleton } from "../CtaBandSkeleton";

export function DonatePageSkeleton() {
    return (
        <div role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <PageBannerSkeleton />

            <Section tone="surface" padding="lg" aria-hidden>
                <Container>
                    <SectionHeaderSkeleton />
                    <ul className="mt-12 grid gap-6 md:grid-cols-3">
                        <li><GiveOptionCardSkeleton /></li>
                        <li><GiveOptionCardSkeleton /></li>
                        <li><GiveOptionCardSkeleton /></li>
                    </ul>
                </Container>
            </Section>

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <SectionHeaderSkeleton />
                    <StatBandSkeleton className="mt-10" count={3} />
                </Container>
            </Section>

            <Section tone="cream" padding="lg" aria-hidden>
                <Container>
                    <SectionHeaderSkeleton />
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton key={i} variant="card" announce={false} itemClassName="h-40" />
                        ))}
                    </div>
                </Container>
            </Section>

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <Skeleton variant="card" announce={false} itemClassName="h-32" />
                </Container>
            </Section>

            <Section tone="surface" padding="lg" aria-hidden>
                <Container>
                    <Skeleton variant="card" announce={false} itemClassName="h-48" />
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
