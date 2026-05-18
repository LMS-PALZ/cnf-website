import Image from "next/image";
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
    { href: "/our-work#skills", label: "Skill Development" },
    { href: "/our-work#education", label: "Education" },
    { href: "/our-work#humanitarian", label: "Humanitarian Aid & Healthcare" },
    { href: "/programmes/skill-scale-up", label: "SSU Programme" },
] as const;
const orgLinks = [
    { href: "/about", label: "About Us" },
    { href: "/about#team", label: "Our Team" },
    { href: "/news", label: "News" },
    { href: "/get-involved#careers", label: "Careers" },
] as const;
export function SiteFooter() {
    return (<footer className="bg-cnf-primary text-cnf-footer-muted">
      <Container className="py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full border border-cnf-border/80 bg-cnf-primary-soft p-2 shadow-sm sm:h-32 sm:w-32 sm:p-2.5">
              <Image src="/CNFLogo.png" alt={site.name} width={240} height={120} className="h-auto max-h-[3.75rem] w-auto max-w-[92%] object-contain object-center sm:max-h-[4.5rem]"/>
            </div>
            <p className="mt-4 max-w-xs whitespace-pre-line text-sm leading-relaxed">{site.footerTagline}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {siteSocialLinks.map((s) => {
                  const Icon = socialIcons[s.id];
                  return (<li key={s.id}>
                      <a aria-label={s.label} className="inline-flex size-11 items-center justify-center rounded-full bg-white/5 text-cnf-footer-muted transition-colors hover:bg-white/10 hover:text-cnf-footer-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent" href={s.href} rel="noopener noreferrer" target="_blank">
                        <Icon aria-hidden className="size-5"/>
                      </a>
                    </li>);
                })}
            </ul>
          </div>

          <nav aria-label="Our work">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cnf-footer-muted">
              Our work
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {workLinks.map((l) => (<li key={l.href + l.label}>
                  <Link className="hover:text-cnf-footer-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent" href={l.href}>
                    {l.label}
                  </Link>
                </li>))}
            </ul>
          </nav>

          <nav aria-label="Organisation">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cnf-footer-muted">
              Organisation
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {orgLinks.map((l) => (<li key={l.href}>
                  <Link className="hover:text-cnf-footer-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent" href={l.href}>
                    {l.label}
                  </Link>
                </li>))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cnf-footer-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a className="hover:text-cnf-footer-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent" href={`mailto:${site.contactEmail}`}>
                  {site.contactEmail}
                </a>
              </li>
              <li>
                <a className="hover:text-cnf-footer-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
              </li>
              <li className="max-w-[240px] leading-relaxed">{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-cnf-footer-muted sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved. {site.registrationLine}
          </p>
          <p className="text-cnf-footer-heading/90">Registered NGO · Abuja, Nigeria</p>
        </div>
      </Container>
    </footer>);
}
