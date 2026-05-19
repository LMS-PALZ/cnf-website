import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Skeleton } from "@/components/ui/Skeleton";
import { CtaBandSkeleton } from "../CtaBandSkeleton";
import { PillarHomeCardSkeleton } from "../PillarHomeCardSkeleton";
import { SectionHeaderSkeleton } from "../SectionHeaderSkeleton";

export function HomePageSkeleton() {
    return (
        <div role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>

            <section
                className="relative flex min-h-[min(100svh,56rem)] flex-col justify-center overflow-hidden bg-cnf-surface"
                aria-hidden
            >
                <Skeleton
                    variant="banner"
                    announce={false}
                    className="absolute inset-0 gap-0"
                    itemClassName="h-full min-h-0 rounded-none"
                />
                <div className="relative z-[1] px-6 py-16 sm:px-10 md:px-14 md:py-24 lg:px-16">
                    <Skeleton variant="eyebrow" announce={false} itemClassName="w-48" />
                    <Skeleton
                        variant="title"
                        announce={false}
                        className="mt-8"
                        itemClassName="h-14 w-full max-w-xl md:h-16"
                    />
                    <Skeleton variant="paragraph" announce={false} className="mt-8 max-w-md gap-2" count={2} />
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <Skeleton variant="button" announce={false} itemClassName="h-12 w-40" />
                        <Skeleton variant="button" announce={false} itemClassName="h-12 w-36" />
                    </div>
                </div>
            </section>

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <SectionHeaderSkeleton />
                        <Skeleton variant="paragraph" announce={false} count={5} className="gap-2" />
                    </div>
                </Container>
            </Section>

            <Section tone="surface" padding="lg" aria-hidden>
                <Container>
                    <SectionHeaderSkeleton className="mx-auto text-center" centered />
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        <PillarHomeCardSkeleton />
                        <PillarHomeCardSkeleton />
                        <PillarHomeCardSkeleton />
                    </div>
                </Container>
            </Section>

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <SectionHeaderSkeleton className="mx-auto text-center" centered />
                    <Skeleton
                        variant="image"
                        announce={false}
                        className="mt-10"
                        itemClassName="h-[400px] rounded-xl sm:h-[520px] lg:h-[600px]"
                    />
                </Container>
            </Section>

            <Section tone="cream" padding="lg" aria-hidden>
                <Container>
                    <SectionHeaderSkeleton />
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <Skeleton variant="card" announce={false} />
                        <Skeleton variant="card" announce={false} />
                        <Skeleton variant="card" announce={false} />
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
