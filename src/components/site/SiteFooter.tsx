import Link from "next/link";
import type { IconType } from "react-icons";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { siteSocialLinks, type SocialLinkId } from "@/data/social-links";
import { mainNav, site } from "@/lib/site";

const socialIcons: Record<SocialLinkId, IconType> = {
    tiktok: FaTiktok,
    instagram: FaInstagram,
    x: FaXTwitter,
    youtube: FaYoutube,
    linkedin: FaLinkedin,
};
const workLinks = [
    { href: "/our-work#skills", label: "Skill Development" },
    { href: "/our-work#education", label: "Education" },
    { href: "/our-work#humanitarian", label: "Humanitarian Aid" },
] as const;
/** Primary nav links plus footer-only organisation links. */
const orgLinks = [
    // ...mainNav,
    { href: "/about#team", label: "Our Team" },
    { href: "/about", label: "About Us" },
    { href: "/programmes/skill-scale-up", label: "SSU Programme" },
    { href: "/projects", label: "Projects" },
    { href: "/get-involved/partnership", label: "Partnership" },
    { href: "/get-involved/volunteer", label: "Volunteer" },
    { href: "/get-involved/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
    { href: "/news", label: "News" },
];

const footerLinkClassName =
    "font-semibold text-cnf-footer-heading/90 transition-colors hover:text-cnf-footer-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent";

const footerHeadingClassName =
    "text-xs font-bold uppercase tracking-[0.2em] text-cnf-footer-heading";

export function SiteFooter() {
    return (
        <footer className="w-full bg-cnf-primary font-semibold text-cnf-footer-heading/90">
            <Container width="full" className="py-14 md:py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="max-w-xs">
                        <Link
                            href="/"
                            className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/logo/logo-footer.png"
                                alt={site.name}
                                width={200}
                                height={154}
                                className="block h-12 w-auto sm:h-14"
                            />
                        </Link>
                        <p className="mt-4 whitespace-pre-line text-sm font-semibold leading-relaxed text-cnf-footer-heading/95">
                            {site.footerTagline}
                        </p>
                        <ul className="mt-6 flex flex-wrap gap-2">
                            {siteSocialLinks.map((s) => {
                                const Icon = socialIcons[s.id];
                                return (
                                    <li key={s.id}>
                                        <a
                                            aria-label={s.label}
                                            className="inline-flex size-11 items-center justify-center rounded-full bg-white/5 text-cnf-footer-heading/90 transition-colors hover:bg-white/10 hover:text-cnf-footer-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                                            href={s.href}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <Icon aria-hidden className="size-5" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <nav aria-label="Our work">
                        <p className={footerHeadingClassName}>Our work</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            {workLinks.map((l) => (
                                <li key={l.href + l.label}>
                                    <Link className={footerLinkClassName} href={l.href}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Organisation">
                        <p className={footerHeadingClassName}>Organisation</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            {orgLinks.map((l) => (
                                <li key={`${l.href}-${l.label}`}>
                                    <Link className={footerLinkClassName} href={l.href}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <p className={footerHeadingClassName}>Contact</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a
                                    className={footerLinkClassName}
                                    href={`mailto:${site.contactEmail}`}
                                >
                                    {site.contactEmail}
                                </a>
                            </li>
                            <li>
                                <a
                                    className={footerLinkClassName}
                                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                                >
                                    {site.phone}
                                </a>
                            </li>
                            <li className="max-w-[240px] font-semibold leading-relaxed text-cnf-footer-heading/90">
                                {site.address}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-xs font-semibold">
                    <p className={`mt-3 text-center text-sm ${footerLinkClassName}`}>
                        © {new Date().getFullYear()} {site.name}. Formerly Chiggy Nsofor Foundation. All rights reserved.{" "}
                        {site.registrationLine}
                    </p>
                </div>
            </Container>
        </footer>
    );
}
