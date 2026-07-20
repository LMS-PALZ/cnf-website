import { InspiredByWhatSection } from "@/components/news/InspiredByWhatSection";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsListing } from "@/components/news/NewsListing";
import { NewsletterSection } from "@/components/news/NewsletterSection";
import { newsItems } from "@/data/news";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("News", "Updates from the Chiggy Foundation for Opportunity on programmes, partnerships, and humanitarian response in Nigeria.");
export default function NewsPage() {
    return (<>
      <NewsHero />
      <NewsListing items={newsItems}/>
      <NewsletterSection />
      <InspiredByWhatSection />
    </>);
}
