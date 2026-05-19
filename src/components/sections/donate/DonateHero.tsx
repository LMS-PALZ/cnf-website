"use client";

import { PageBanner } from "@/components/sections/PageBanner";
import { DonatePayButton } from "@/components/payments/DonatePayButton";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { pageBannerImages } from "@/data/page-banners";
import { donateHeroStats } from "@/data/donate/hero-stats";
export function DonateHero() {
    return (
        <>
            <PageBanner
                id="donate-hero-title"
                breadcrumbLabel="Donate"
                image={pageBannerImages.donate}
                title={
                    <>
                        Your Gift
                        <br />
                        Changes a <span className="text-cnf-accent">Life.</span>
                    </>
                }
                description="Every naira given to CNF goes directly into programmes that train young people, keep children in school, feed underserved families, and bring healthcare to those who cannot afford it. No overhead fluff. Real impact, documented and reported."
            >
                <DonatePayButton variant="accent" size="lg" purpose="Donate page">
                    Donate Now via Korapay
                </DonatePayButton>
            </PageBanner>

            <section
                aria-label="Programme reach"
                className="border-b border-cnf-border bg-cnf-night py-10 md:py-12"
            >
                <Container>
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {donateHeroStats.map((s) => (
                            <li key={s.value}>
                                <p
                                    className={`${fontDisplay.className} text-4xl font-semibold leading-none text-white md:text-5xl`}
                                >
                                    {s.value}
                                </p>
                                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                                    {s.label}
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-white/55">
                                    {s.detail}
                                </p>
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>
        </>
    );
}
