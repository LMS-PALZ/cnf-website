import Link from "next/link";
import type { IconType } from "react-icons";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { siteSocialLinks, type SocialLinkId } from "@/data/social-links";
import { site } from "@/lib/site";

const socialIcons: Record<SocialLinkId, IconType> = {
    tiktok: FaTiktok,
    instagram: FaInstagram,
    x: FaXTwitter,
    youtube: FaYoutube,
    linkedin: FaLinkedin,
};

const workLinks = [
    { href: "/our-work#skills", label: "Economic Empowerment" },
    { href: "/our-work#education", label: "Education" },
    { href: "/our-work#humanitarian", label: "Humanitarian Aid" },
] as const;

const orgLinks = [
    { href: "/about#team", label: "Our Team" },
    { href: "/get-involved/partnership", label: "Partnership" },
    { href: "/get-involved/volunteer", label: "Volunteer" },
    { href: "/get-involved/careers", label: "Careers" },
];

const footerLinkClassName =
    "font-semibold text-cnf-footer-heading/90 transition-colors hover:text-cnf-footer-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent";

const footerHeadingClassName =
    "text-xs font-bold uppercase tracking-[0.2em] text-cnf-footer-heading";

export function SiteFooter() {
    return (
        <footer className="w-full bg-cnf-primary font-semibold text-cnf-footer-heading/90">
            <Container width="full" className="py-12 sm:py-14 md:py-16">
                <div className="flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-12">
                    {/* Brand */}
                    <div className="flex flex-col items-center text-center lg:max-w-xs lg:items-start lg:text-left">
                        <Link
                            href="/"
                            className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/logo/logo-footer.png"
                                alt={site.name}
                                width={320}
                                height={246}
                                className="mx-auto block h-20 w-auto sm:h-24 lg:mx-0"
                            />
                        </Link>
                        <p className="mt-4 max-w-sm text-sm font-semibold leading-relaxed text-cnf-footer-heading/95">
                            Turning potential into 
                            <br className="lg:hidden" />{" "}
                            opportunity for underserved Nigerians.
                        </p>
                        <ul className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                            {siteSocialLinks.map((s) => {
                                const Icon = socialIcons[s.id];
                                return (
                                    <li key={s.id}>
                                        <a
                                            aria-label={s.label}
                                            className="inline-flex size-10 items-center justify-center rounded-full bg-white/5 text-cnf-footer-heading/90 transition-colors hover:bg-white/10 hover:text-cnf-footer-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent sm:size-11"
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

                    {/* Link columns: Our work → Organisation → Contact */}
                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 text-center sm:gap-10 lg:col-span-3 lg:grid-cols-3 lg:border-t-0 lg:pt-0 lg:text-left">
                        <nav aria-label="Our work">
                            <p className={footerHeadingClassName}>Our work</p>
                            <ul className="mt-4 space-y-2.5 text-sm sm:space-y-3">
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
                            <ul className="mt-4 space-y-2.5 text-sm sm:space-y-3">
                                {orgLinks.map((l) => (
                                    <li key={`${l.href}-${l.label}`}>
                                        <Link className={footerLinkClassName} href={l.href}>
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="col-span-2 border-t border-white/10 pt-8 lg:col-span-1 lg:border-t-0 lg:pt-0">
                            <p className={footerHeadingClassName}>Contact</p>
                            <ul className="mt-4 space-y-2.5 text-sm sm:space-y-3">
                                <li>
                                    <a
                                        className={`${footerLinkClassName} break-all`}
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
                                <li className="mx-auto max-w-[240px] font-semibold leading-relaxed text-cnf-footer-heading/90 lg:mx-0">
                                    {site.address}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12 sm:pt-8">
                    <p className={`text-center text-xs leading-relaxed sm:text-sm ${footerLinkClassName}`}>
                        © {new Date().getFullYear()} {site.name}. All rights reserved.
                        <span className="mt-1 block sm:mt-0 sm:inline">
                            {" "}
                            {site.registrationLine}
                        </span>
                    </p>
                </div>
            </Container>
        </footer>
    );
}
