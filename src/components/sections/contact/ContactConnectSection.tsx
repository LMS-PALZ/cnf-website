import type { IconType } from "react-icons";
import { HiClock, HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { contactInfo } from "@/data/contact/contact";

type ContactCard = {
    title: string;
    icon: IconType;
    children: React.ReactNode;
};

function ContactInfoCard({ title, icon: Icon, children }: ContactCard) {
    return (
        <Card
            tone="outlined"
            padding="lg"
            className="h-full min-h-[9.5rem] rounded-2xl border-cnf-border/70 shadow-[0_8px_24px_rgba(15,23,42,0.12),0_20px_56px_rgba(15,23,42,0.18),0_32px_80px_rgba(15,23,42,0.14)] md:min-h-[10.5rem]"
        >
            <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 shrink-0 text-cnf-accent md:h-7 md:w-7" aria-hidden />
                <h3 className="text-base font-bold text-cnf-accent md:text-lg">{title}</h3>
            </div>
            <div className="mt-4 space-y-1.5 text-base leading-relaxed text-cnf-muted md:text-lg">
                {children}
            </div>
        </Card>
    );
}

export function ContactConnectSection() {
    const telHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`;

    return (
        <section
            aria-labelledby="contact-connect-title"
            className="border-b border-cnf-border bg-white py-14 md:py-20"
        >
            <Container>
                <h2
                    id="contact-connect-title"
                    className={cn(
                        fontDisplay.className,
                        "text-center text-4xl font-bold text-cnf-ink md:text-5xl lg:text-6xl",
                    )}
                >
                    Connect with us today
                </h2>

                <ul className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
                    <li>
                        <ContactInfoCard title="Visit us At" icon={HiMapPin}>
                            <p>{contactInfo.addressLine}</p>
                        </ContactInfoCard>
                    </li>
                    <li>
                        <ContactInfoCard title="Call us on" icon={HiPhone}>
                            <p>
                                Tel:{" "}
                                <a
                                    href={telHref}
                                    className="font-medium text-cnf-ink hover:text-cnf-primary"
                                >
                                    {contactInfo.phone}
                                </a>
                            </p>
                            <p>
                                Cell:{" "}
                                <a
                                    href={telHref}
                                    className="font-medium text-cnf-ink hover:text-cnf-primary"
                                >
                                    {contactInfo.phone}
                                </a>
                            </p>
                        </ContactInfoCard>
                    </li>
                    <li>
                        <ContactInfoCard title="Email" icon={HiEnvelope}>
                            <p>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="font-semibold text-cnf-ink hover:text-cnf-primary"
                                >
                                    {contactInfo.email}
                                </a>
                            </p>
                        </ContactInfoCard>
                    </li>
                    <li>
                        <ContactInfoCard title="Office Hours" icon={HiClock}>
                            {contactInfo.officeHours.map((row) => (
                                <p key={row.label}>
                                    {row.label}: {row.value}
                                </p>
                            ))}
                        </ContactInfoCard>
                    </li>
                </ul>
            </Container>
        </section>
    );
}
