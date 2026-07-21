import type { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { contactSocialIds } from "@/data/contact/contact";
import { siteSocialLinks, type SocialLinkId } from "@/data/social-links";

const socialIcons: Record<SocialLinkId, IconType> = {
    instagram: FaInstagram,
    facebook: FaFacebook,
    linkedin: FaLinkedin,
    x: FaXTwitter,
    tiktok: FaTiktok,
    youtube: FaYoutube,
};

const contactLinks = siteSocialLinks.filter((link) =>
    contactSocialIds.includes(link.id),
);

export function ContactReachSection() {
    return (
        <section
            aria-labelledby="contact-reach-title"
            className="border-b border-cnf-border bg-white py-14 md:py-20"
        >
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                    <div>
                        <h2
                            id="contact-social-title"
                            className={cn(
                                fontDisplay.className,
                                "text-2xl font-bold leading-snug text-cnf-ink md:text-3xl",
                            )}
                        >
                            <span className="text-cnf-accent">Reach</span> us on social
                            media
                        </h2>
                        <ul className="mt-8 flex flex-wrap gap-3">
                            {contactLinks.map((link) => {
                                const Icon = socialIcons[link.id];
                                return (
                                    <li key={link.id}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`CFO on ${link.label}`}
                                            className="inline-flex size-12 items-center justify-center rounded-full bg-cnf-ink text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
                                        >
                                            <Icon className="size-5" aria-hidden />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div>
                        <h2
                            id="contact-reach-title"
                            className={cn(
                                fontDisplay.className,
                                "text-2xl font-bold leading-snug text-cnf-ink md:text-3xl",
                            )}
                        >
                            <span className="text-cnf-accent">Reach </span> &amp; Get in Touch
                            With Us !
                        </h2>
                        <div className="mt-8">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
