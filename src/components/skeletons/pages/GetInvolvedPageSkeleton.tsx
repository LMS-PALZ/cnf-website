import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Skeleton } from "@/components/ui/Skeleton";
import { PageBannerSkeleton } from "../PageBannerSkeleton";
import { PartnershipFormSkeleton } from "../PartnershipFormSkeleton";
import { VolunteerFormSkeleton } from "../VolunteerFormSkeleton";
import { CareersProfileFormSkeleton } from "../CareersProfileFormSkeleton";
import { SectionHeaderSkeleton } from "../SectionHeaderSkeleton";
import { CtaBandSkeleton } from "../CtaBandSkeleton";

export function GetInvolvedPageSkeleton() {
    return (
        <div role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <PageBannerSkeleton />

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                        <SectionHeaderSkeleton />
                        <Card tone="elevated" padding="lg">
                            <PartnershipFormSkeleton />
                        </Card>
                    </div>
                </Container>
            </Section>

            <Section tone="surface" padding="lg" aria-hidden>
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                        <div>
                            <SectionHeaderSkeleton />
                            <div className="mt-10 grid gap-3 sm:grid-cols-2">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <Skeleton key={i} variant="card" announce={false} itemClassName="h-24" />
                                ))}
                            </div>
                        </div>
                        <Card tone="elevated" padding="lg">
                            <VolunteerFormSkeleton />
                        </Card>
                    </div>
                </Container>
            </Section>

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <SectionHeaderSkeleton />
                        <Card tone="elevated" padding="lg">
                            <CareersProfileFormSkeleton />
                        </Card>
                    </div>
                </Container>
            </Section>

            <Section tone="cream" padding="lg" aria-hidden>
                <Container>
                    <CtaBandSkeleton />
                </Container>
            </Section>
        </div>
    );
}
