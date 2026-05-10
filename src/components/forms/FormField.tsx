import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
type Props = {
    id: string;
    label: string;
    hint?: string;
    error?: string;
    required?: boolean;
    hideLabel?: boolean;
    children: ReactNode;
};
export function FormField({ id, label, hint, error, required, hideLabel, children, }: Props) {
    return (<div className="space-y-2">
      <label htmlFor={id} className={cn("block text-sm font-semibold text-cnf-ink", hideLabel && "sr-only")}>
        {label}
        {required ? (<span aria-hidden className="ml-0.5 text-cnf-accent-hover">
            *
          </span>) : null}
      </label>
      {children}
      {hint ? <p className="text-sm text-cnf-muted">{hint}</p> : null}
      {error ? (<p className="text-sm font-medium text-red-700" role="alert">
          {error}
        </p>) : null}
    </div>);
}
