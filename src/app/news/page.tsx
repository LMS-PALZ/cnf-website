import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { newsItems } from "@/data/news";
import { fontDisplay } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "News and impact stories",
  "Updates from the Chiggy Nsofor Foundation on programmes, partnerships, and humanitarian response in Nigeria.",
);

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & impact"
        title="Stories from trainings, schools, and relief programmes."
        description="These notes are editorial snapshots. For formal reporting, partners can request our latest impact pack."
      />

      <section className="py-16 md:py-24">
        <Container>
          <ul className="grid gap-8 md:grid-cols-2">
            {newsItems.map((item) => (
              <li key={item.slug}>
                <article className="flex h-full flex-col rounded-xl border border-cnf-primary/10 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cnf-primary">
                    {item.tag}
                  </p>
                  <h2 className={`${fontDisplay.className} mt-3 text-2xl font-semibold text-cnf-ink`}>
                    <Link
                      className="text-cnf-ink underline-offset-4 hover:text-cnf-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                      href={`/news/${item.slug}`}
                    >
                      {item.title}
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm text-cnf-muted">{formatDate(item.date)}</p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-cnf-muted">{item.excerpt}</p>
                  <Link
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-cnf-primary/20 px-4 py-2 text-base font-semibold text-cnf-primary transition-colors hover:border-cnf-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                    href={`/news/${item.slug}`}
                  >
                    Read more about this story
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
