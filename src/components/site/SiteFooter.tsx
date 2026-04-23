import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { mainNav, site } from "@/lib/site";

const social = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "Facebook", href: "#" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-cnf-primary/10 bg-cnf-ink text-cnf-cream">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cnf-cream/80">
              {site.description}
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-sm font-semibold uppercase tracking-wide text-cnf-cream/70">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-cnf-cream/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="text-cnf-cream/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                  href="/donate"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  className="text-cnf-cream/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cnf-cream/70">
              Contact
            </p>
            <p className="mt-4 text-sm text-cnf-cream/90">
              Email:{" "}
              <a
                className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                href={`mailto:${site.contactEmail}`}
              >
                {site.contactEmail}
              </a>
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-cnf-cream/70">
              Social
            </p>
            <ul className="mt-3 flex flex-wrap gap-3 text-sm">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    className="rounded-sm text-cnf-cream/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                    href={s.href}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-cnf-cream/60">
              Social links are placeholders until official profiles are published.
            </p>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-cnf-cream/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
