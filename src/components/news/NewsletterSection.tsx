import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";

export function NewsletterSection() {
    return (
        <section
            id="stay-connected"
            aria-labelledby="stay-connected-title"
            className="bg-white px-4 py-12 sm:px-6 md:py-14 lg:px-8"
        >
            <Container>
                <div className="rounded-2xl bg-cnf-primary px-6 py-10 sm:px-10 md:px-14 md:py-12">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                                Stay connected
                            </p>
                            <h2
                                id="stay-connected-title"
                                className={`${fontDisplay.className} mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl`}
                            >
                                Get CFO Updates
                                <br />
                                <span className="text-cnf-accent">Delivered to You</span>
                            </h2>
                            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
                                Join our mailing list for programme updates, impact stories, and
                                news from the communities we serve. No spam &mdash; just the
                                stories that matter.
                            </p>
                        </div>

                        <div className="w-full lg:max-w-xl lg:justify-self-end">
                            <NewsletterForm />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
