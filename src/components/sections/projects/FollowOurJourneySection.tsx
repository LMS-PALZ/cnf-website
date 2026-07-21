import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { pageContentWidthClass } from "@/lib/layout";
import { siteSocialLinks, type SocialLinkId } from "@/data/social-links";

const accentTone: Partial<Record<SocialLinkId, string>> = {
    instagram: "text-[#e1306c]",
    facebook: "text-[#1877f2]",
    linkedin: "text-[#0a66c2]",
    x: "text-white",
    tiktok: "text-white",
    youtube: "text-[#ff0000]",
};

export function FollowOurJourneySection() {
    return (
        <section aria-labelledby="follow-our-journey-title" className="w-full bg-white py-12 md:py-14">
            <div
                className={cn(
                    pageContentWidthClass,
                    "rounded-2xl bg-cnf-night px-6 py-12 text-center sm:px-10 md:px-14 md:py-14",
                )}
            >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cnf-accent">
                    Follow our journey
                </p>
                <h2
                    id="follow-our-journey-title"
                    className={cn(
                        fontDisplay.className,
                        "mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl",
                    )}
                >
                    See It <span className="text-cnf-accent">As It Happens</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                    Follow CFO on social media for live updates, behind-the-scenes moments, and the stories
                    that don&apos;t make it into the reports.
                </p>

                <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    {siteSocialLinks.map((s) => (
                        <li key={s.id}>
                            <a
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`CFO on ${s.label}`}
                                className={cn(
                                    "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent",
                                    accentTone[s.id],
                                )}
                            >
                                {s.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
