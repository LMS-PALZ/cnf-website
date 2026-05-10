import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
export default function NotFound() {
    return (<section className="py-24">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-cnf-primary">404</p>
        <h1 className={`${fontDisplay.className} mt-3 text-4xl font-semibold text-cnf-ink`}>
          Page not found
        </h1>
        <p className="mt-4 text-base text-cnf-muted">
          The page you requested does not exist or may have moved. Try the home page or the site menu.
        </p>
        <Link className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-cnf-primary-light px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-cnf-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent" href="/">
          Return home
        </Link>
      </Container>
    </section>);
}
