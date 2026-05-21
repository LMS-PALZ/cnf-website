import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { ssuCta } from "@/data/programmes/skill-scale-up";
import { SsuWaitlistButton } from "./SsuWaitlistButton";

export function SsuCtaSection() {
    return (
        <section
            aria-labelledby="ssu-cta-title"
            className="bg-white py-14 md:py-20"
        >
            <Container>
                <div className="rounded-2xl bg-[#f8f6f1] px-6 py-12 text-center md:px-12 md:py-14">
                    <h2
                        id="ssu-cta-title"
                        className={`${fontDisplay.className} mx-auto max-w-[24rem] text-2xl font-bold leading-snug text-cnf-ink sm:max-w-[28rem] md:max-w-[34rem] md:text-3xl`}
                    >
                        {ssuCta.title}
                    </h2>
                    <div className="mt-8 flex justify-center">
                        <SsuWaitlistButton />
                    </div>
                </div>
            </Container>
        </section>
    );
}
