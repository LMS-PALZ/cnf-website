import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export function PrivacyPageSkeleton() {
    return (
        <section className="py-16 md:py-24" role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <Container className="max-w-3xl space-y-6" aria-hidden>
                <Skeleton variant="title" announce={false} itemClassName="h-10 w-56" />
                <Skeleton variant="paragraph" announce={false} count={5} className="gap-3" />
                <Skeleton variant="title" announce={false} className="pt-4" itemClassName="h-7 w-40" />
                <Skeleton variant="paragraph" announce={false} count={3} className="gap-2" />
                <Skeleton variant="title" announce={false} className="pt-4" itemClassName="h-7 w-44" />
                <Skeleton variant="paragraph" announce={false} count={3} className="gap-2" />
            </Container>
        </section>
    );
}
