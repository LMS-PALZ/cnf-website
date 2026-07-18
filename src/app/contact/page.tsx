import {
    ContactConnectSection,
    ContactHero,
    ContactMapSection,
    ContactReachSection,
} from "@/components/sections/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
    "Contact Us",
    "Get in touch with the Chiggy Foundation for Opportunity. Visit our Abuja office, call, email, or send a message.",
);

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactConnectSection />
            <ContactReachSection />
            <ContactMapSection />
        </>
    );
}
