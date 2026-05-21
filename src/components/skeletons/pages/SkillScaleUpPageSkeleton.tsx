import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";
import { PageBannerSkeleton } from "../PageBannerSkeleton";

export function SkillScaleUpPageSkeleton() {
    return (
        <div role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <PageBannerSkeleton />

            <section className="py-16 md:py-24" aria-hidden>
                <Container className="max-w-4xl space-y-6 text-center">
                    <Skeleton variant="title" announce={false} itemClassName="mx-auto h-10 w-3/4" />
                    <Skeleton variant="paragraph" announce={false} count={2} />
                    <div className="flex flex-wrap justify-center gap-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton
                                key={i}
                                variant="badge"
                                announce={false}
                                itemClassName="h-9 w-48 rounded-full"
                            />
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-14 md:py-20" aria-hidden>
                <Container>
                    <Skeleton variant="title" announce={false} itemClassName="h-8 w-64" />
                    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <li key={i}>
                                <Skeleton variant="card" announce={false} itemClassName="h-40" />
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>
        </div>
    );
}
