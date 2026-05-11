"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { mainNav, site } from "@/lib/site";
import { fontDisplay } from "@/lib/fonts";
function NavLink({ href, label }: {
    href: string;
    label: string;
}) {
    const pathname = usePathname();
    const active = pathname === href || (href !== "/" && pathname.startsWith(href));
    return (<Link className={`rounded-md px-2.5 py-2 text-base font-medium tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary lg:text-lg ${active ? "text-cnf-primary" : "text-cnf-muted hover:text-cnf-primary"}`} href={href}>
      {label}
    </Link>);
}
export function SiteHeader() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setOpen(false);
    }, [pathname]);
    return (<header className="sticky top-0 z-40 border-b border-cnf-border bg-white">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary">
          <span className="sr-only">{site.name}, home</span>
          <Image src="/CNFLogo.png" alt={site.name} width={96} height={48} className="h-12 w-24"/>
        </Link>

        <nav aria-label="Primary" className="hidden flex-1 flex-wrap items-center justify-center gap-6 lg:flex">
          {mainNav.map((item) => (<NavLink key={item.href} href={item.href} label={item.label}/>))}
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <ButtonLink href="/donate" variant="accent">
            Donate
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ButtonLink href="/donate" variant="accent" size="sm">
            Donate
          </ButtonLink>
          <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-cnf-border text-cnf-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((v) => !v)}>
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-5 w-5">
              {open ? (<>
                  <span className="absolute left-0 top-2.5 block h-0.5 w-5 rotate-45 rounded-full bg-current"/>
                  <span className="absolute left-0 top-2.5 block h-0.5 w-5 -rotate-45 rounded-full bg-current"/>
                </>) : (<>
                  <span className="absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current"/>
                  <span className="absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-current"/>
                  <span className="absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current"/>
                </>)}
            </span>
          </button>
        </div>
      </Container>

      {open ? (<div className="border-t border-cnf-border bg-white lg:hidden" id="mobile-nav">
          <Container as="div" className="py-3">
            <nav aria-label="Mobile primary" className="flex flex-col">
              {mainNav.map((item) => (<NavLink key={item.href} href={item.href} label={item.label}/>))}
            </nav>
          </Container>
        </div>) : null}
    </header>);
}
