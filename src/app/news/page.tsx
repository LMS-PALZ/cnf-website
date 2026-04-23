import { NewsHero } from "@/components/news/NewsHero";
import { NewsListing } from "@/components/news/NewsListing";
import { newsItems } from "@/data/news";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "News and impact stories",
  "Updates from the Chiggy Nsofor Foundation on programmes, partnerships, and humanitarian response in Nigeria.",
);

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsListing items={newsItems} />
    </>
  );
}
