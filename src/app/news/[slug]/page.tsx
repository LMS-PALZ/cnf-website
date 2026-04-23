import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getNewsBySlug, newsItems } from "@/data/news";
import { fontDisplay } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return pageMetadata(item.title, item.excerpt);
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const paragraphs = item.body.split("\n\n").filter(Boolean);

  return (
    <article className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-cnf-primary">{item.ribbon}</p>
        {item.detailSubtitle ? (
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-cnf-muted">
            {item.detailSubtitle}
          </p>
        ) : (
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-cnf-muted">{item.tag}</p>
        )}
        <h1 className={`${fontDisplay.className} mt-3 text-4xl font-semibold text-cnf-ink md:text-5xl`}>
          {item.title}
        </h1>
        <p className="mt-3 text-sm text-cnf-muted">{formatDate(item.date)}</p>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-cnf-muted">
          {paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
        <Link
          className="mt-10 inline-flex min-h-11 items-center text-base font-semibold text-cnf-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
          href="/news"
        >
          ← Back to all news and impact stories
        </Link>
      </Container>
    </article>
  );
}
