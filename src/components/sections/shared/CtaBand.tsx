import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
type Tone = "dark" | "primary";
type Props = {
    tone?: Tone;
    title: ReactNode;
    description: ReactNode;
    actions: ReactNode;
    as?: "h2" | "h3";
    id?: string;
};
const toneStyles: Record<Tone, string> = {
    dark: "bg-cnf-night",
    primary: "bg-cnf-primary-soft",
};
export function CtaBand({ tone = "dark", title, description, actions, as: Tag = "h2", id, }: Props) {
    return (<section aria-labelledby={id} className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <Container>
        <div className={cn("rounded-2xl px-6 py-10 sm:px-10 md:px-14 md:py-12", toneStyles[tone])}>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <Tag id={id} className={cn(fontDisplay.className, "text-3xl font-semibold leading-tight text-white md:text-4xl")}>
                {title}
              </Tag>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end lg:flex-row">
              {actions}
            </div>
          </div>
        </div>
      </Container>
    </section>);
}
