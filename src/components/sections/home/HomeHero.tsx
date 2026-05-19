"use client";
import { CnfImage } from "@/components/ui/CnfImage";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { homeEyebrowClassName } from "@/components/sections/home/homeEyebrow";
import { HOME_HERO_CAROUSEL_SLIDES } from "@/data/home/carousel-images";
const AUTOPLAY_INTERVAL_MS = 3600;
const SLIDE_CROSSFADE_MS = 550;
type Props = {
    eyebrow?: string;
    title: string;
    titleAccent: string;
    titleTrailing?: string;
    description: string;
};
export function HomeHero({ eyebrow = "Est. 2024 · Abuja, Nigeria", title, titleAccent, titleTrailing, description, }: Props) {
    const slides = HOME_HERO_CAROUSEL_SLIDES;
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (slides.length <= 1)
            return;
        const id = window.setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, AUTOPLAY_INTERVAL_MS);
        return () => window.clearInterval(id);
    }, [slides.length]);
    return (<section aria-labelledby="home-hero-title" aria-roledescription="carousel" data-cnf-skip-enter="true" className="relative isolate flex min-h-[min(100svh,56rem)] flex-col justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-cnf-primary" aria-hidden>
        {slides.map((slide, i) => {
            const active = i === index;
            return (<div key={slide.src} className={cn("absolute inset-0 ease-in-out", active ? "z-[1] opacity-100" : "z-0 opacity-0")} style={{
                    transitionDuration: `${SLIDE_CROSSFADE_MS}ms`,
                    transitionProperty: "opacity",
                }}>
              
              <div className="relative h-full w-full overflow-hidden bg-cnf-surface">
                <CnfImage src={slide.src} alt={active ? slide.alt : ""} fill sizes="100vw" priority={i === 0} className="object-cover object-center" style={{ objectPosition: "center center" }} aria-hidden={!active}/>
              </div>
            </div>);
        })}
        
        <div className="absolute inset-0 z-[2] bg-gradient-to-br from-cnf-primary/52 via-cnf-primary/34 to-black/26" aria-hidden/>
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_top_right,rgba(244,146,33,0.07),transparent_60%)]" aria-hidden/>
      </div>

      
      <div className={cn("relative z-[3] px-6 py-16 sm:px-10 md:px-14 md:py-24 lg:px-16 lg:py-28", slides.length > 1 && "pb-24 sm:pb-28")}>
        
        <div className="max-w-2xl cnf-hero-page-enter-once">
          <p
            className={cn(
              "font-semibold uppercase text-cnf-accent",
              homeEyebrowClassName,
            )}
          >
            {eyebrow}
          </p>
          <h1 id="home-hero-title" className={`${fontDisplay.className} mt-8 text-5xl font-semibold leading-[1.04] text-white md:text-6xl lg:text-7xl`}>
            {title}
            <br />
            <span className="text-cnf-accent">{titleAccent}</span>
            {titleTrailing ? (<>
                <br />
                {titleTrailing}
              </>) : null}
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
            {description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/our-work" variant="accent" size="lg" className="cnf-hero-btn-breathe inline-flex will-change-transform">
              Explore our work
            </ButtonLink>
            <ButtonLink href="/get-involved" variant="dark-outline" size="lg" className="cnf-hero-btn-breathe-outline inline-flex will-change-transform">
              <span className="inline-flex items-center gap-2">
                Get involved
                <span aria-hidden className="text-base leading-none">&rarr;</span>
              </span>
            </ButtonLink>
          </div>
        </div>
      </div>

      
      {slides.length > 1 ? (<>
          <div className="absolute bottom-7 left-1/2 z-[4] flex -translate-x-1/2 gap-1.5 sm:bottom-10" aria-hidden>
            {slides.map((slide, i) => (<span key={slide.src} className={cn("h-1.5 rounded-full transition-all duration-300 ease-out", i === index ? "w-8 bg-cnf-accent" : "w-1.5 bg-white/40")}/>))}
          </div>
          <p className="sr-only" aria-live="polite">
            Slide {index + 1} of {slides.length}
          </p>
        </>) : null}
    </section>);
}
