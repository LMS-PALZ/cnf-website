import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export function NewsArticlePageSkeleton() {
    return (
        <article className="py-16 md:py-24" role="status" aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading page…</span>
            <Container className="max-w-3xl" aria-hidden>
                <Skeleton variant="eyebrow" announce={false} itemClassName="w-32" />
                <Skeleton variant="eyebrow" announce={false} className="mt-2" itemClassName="w-24" />
                <Skeleton
                    variant="title"
                    announce={false}
                    className="mt-6"
                    itemClassName="h-10 w-full md:h-12"
                />
                <Skeleton variant="text" announce={false} className="mt-4" itemClassName="w-36" />
                <Skeleton variant="paragraph" announce={false} className="mt-10 gap-3" count={6} />
            </Container>
        </article>
    );
}
