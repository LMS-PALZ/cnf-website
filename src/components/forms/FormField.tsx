import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
};

export function FormField({ id, label, hint, error, children }: Props) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-cnf-ink">
        {label}
      </label>
      {children}
      {hint ? <p className="text-sm text-cnf-muted">{hint}</p> : null}
      {error ? (
        <p className="text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
