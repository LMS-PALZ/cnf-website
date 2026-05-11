import { Container } from "@/components/ui/Container";
import { trustPoints } from "@/data/donate/trust-points";

export function TrustStripSection() {
    return (<section aria-label="Why donors trust CNF" className="bg-cnf-primary py-10 md:py-12">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (<li key={point.id} className="text-center text-white">
              <h3 className="text-sm font-semibold text-white">
                {point.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-white/75">
                {point.description}
              </p>
            </li>))}
        </ul>
      </Container>
    </section>);
}
