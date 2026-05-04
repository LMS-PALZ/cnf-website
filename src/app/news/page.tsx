import { InspiredByWhatSection } from "@/components/news/InspiredByWhatSection";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsListing } from "@/components/news/NewsListing";
import { NewsletterSection } from "@/components/news/NewsletterSection";
import { newsItems } from "@/data/news";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "News \u2014 Stories, Updates & Impact",
  "Updates from the Chiggy Nsofor Foundation on programmes, partnerships, and humanitarian response in Nigeria.",
);

/**
 * News page composition. Sections (in order):
 *   1. Hero
 *   2. Tabs + cards (filtering + Load More pagination handled inside)
 *   3. Stay Connected (newsletter signup)
 *   4. Inspired by What You\u2019ve Read? (final CTA)
 */
export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsListing items={newsItems} />
      <NewsletterSection />
      <InspiredByWhatSection />
    </>
  );
}
