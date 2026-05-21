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

type Variant = "partnership" | "volunteer" | "careers";

type Props = {
    variant: Variant;
};

export function GetInvolvedSubPageSkeleton({ variant }: Props) {
    const tone = variant === "volunteer" ? "surface" : "light";

    return (
        <div role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <PageBannerSkeleton />

            <Section tone={tone} padding="lg" aria-hidden>
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                        {variant === "volunteer" ? (
                            <div>
                                <SectionHeaderSkeleton />
                                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <Skeleton
                                            key={i}
                                            variant="card"
                                            announce={false}
                                            itemClassName="h-24"
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <SectionHeaderSkeleton />
                        )}
                        <Card tone="elevated" padding="lg">
                            {variant === "partnership" ? (
                                <PartnershipFormSkeleton />
                            ) : variant === "volunteer" ? (
                                <VolunteerFormSkeleton />
                            ) : (
                                <CareersProfileFormSkeleton />
                            )}
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
