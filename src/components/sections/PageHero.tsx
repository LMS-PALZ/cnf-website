import type { ReactNode } from "react";
import { fontDisplay } from "@/lib/fonts";
type Props = {
    eyebrow?: string;
    title: string;
    description?: string;
    children?: ReactNode;
};
export function PageHero({ eyebrow, title, description, children }: Props) {
    return (<section className="border-b border-cnf-primary/10 bg-gradient-to-b from-cnf-surface to-white">
      <div className="px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-16 lg:py-24">
        {eyebrow ? (<p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cnf-primary">
            {eyebrow}
          </p>) : null}
        <h1 className={`${fontDisplay.className} max-w-3xl text-4xl font-semibold leading-tight text-cnf-ink md:text-5xl`}>
          {title}
        </h1>
        {description ? (<p className="mt-5 max-w-2xl text-lg leading-relaxed text-cnf-muted md:text-xl">
            {description}
          </p>) : null}
        {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div> : null}
      </div>
    </section>);
}
