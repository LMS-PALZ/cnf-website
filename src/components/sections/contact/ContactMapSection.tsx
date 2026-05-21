import { Container } from "@/components/ui/Container";
import { contactInfo, contactMapEmbedUrl } from "@/data/contact/contact";

export function ContactMapSection() {
    return (
        <section aria-label="Office location map" className="bg-cnf-surface py-14 md:py-20">
            <Container>
                <div className="overflow-hidden rounded-2xl border border-cnf-border bg-white shadow-sm">
                    <iframe
                        title={`Map showing ${contactInfo.addressLine}`}
                        src={contactMapEmbedUrl}
                        className="aspect-[16/9] w-full min-h-[280px] border-0 sm:min-h-[360px] md:min-h-[420px]"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </Container>
        </section>
    );
}
