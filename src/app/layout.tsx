import type { Metadata } from "next";
import "./globals.css";
import { ToasterProvider } from "@/components/providers/ToasterProvider";
import { SiteShell } from "@/components/site/SiteShell";
import { fontSans } from "@/lib/fonts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} min-h-screen bg-white text-cnf-ink antialiased`}>
        <SiteShell>{children}</SiteShell>
        <ToasterProvider />
      </body>
    </html>
  );
}
