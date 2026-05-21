import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Skeleton } from "@/components/ui/Skeleton";
import { PageBannerSkeleton } from "../PageBannerSkeleton";
import { FormSkeleton } from "../FormSkeleton";

export function ContactPageSkeleton() {
    return (
        <div role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <PageBannerSkeleton />

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <Skeleton
                        variant="title"
                        announce={false}
                        itemClassName="mx-auto h-9 w-64"
                    />
                    <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <li key={i}>
                                <Skeleton variant="card" announce={false} itemClassName="h-36" />
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>

            <Section tone="light" padding="lg" aria-hidden>
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <Skeleton variant="title" announce={false} itemClassName="h-9 w-56" />
                        <Card tone="elevated" padding="lg">
                            <FormSkeleton
                                fields={["input", "input", "input", "input", "textarea"]}
                            />
                        </Card>
                    </div>
                </Container>
            </Section>

            <Section tone="surface" padding="lg" aria-hidden>
                <Container>
                    <Skeleton
                        variant="image"
                        announce={false}
                        itemClassName="aspect-[16/9] min-h-[280px] rounded-2xl"
                    />
                </Container>
            </Section>
        </div>
    );
}
