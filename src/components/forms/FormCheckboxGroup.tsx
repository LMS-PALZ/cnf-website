import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type CheckboxOption = {
  value: string;
  label: string;
};

type Props = {
  /** Group label (rendered as `legend` for accessibility). */
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  options: CheckboxOption[];
  /** Optional layout — defaults to single column on mobile, two cols on md+. */
  cols?: 1 | 2;
  /** Spread `register("name")` here so each checkbox is correctly registered. */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

/**
 * Multi-checkbox group used by the Partnership form ("Which pillars would
 * you like to partner on?"). All checkboxes share the same `name` so
 * `react-hook-form` returns the value as a string array.
 */
export const FormCheckboxGroup = forwardRef<HTMLInputElement, Props>(
  function FormCheckboxGroup(
    { label, required, hint, error, options, cols = 1, inputProps },
    ref
  ) {
    return (
      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-cnf-ink">
          {label}
          {required ? <span aria-hidden className="ml-0.5 text-cnf-accent-hover">*</span> : null}
        </legend>
        <div
          className={cn(
            "grid gap-2",
            cols === 2 ? "sm:grid-cols-2" : "grid-cols-1"
          )}
        >
          {options.map((opt) => (
            <label
              key={opt.value}
              className="inline-flex items-center gap-2.5 text-sm text-cnf-ink"
            >
              <input
                ref={ref}
                type="checkbox"
                value={opt.value}
                aria-invalid={error ? true : undefined}
                className="h-4 w-4 rounded border-cnf-border text-cnf-primary focus:ring-2 focus:ring-cnf-primary/40"
                {...inputProps}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
        {hint ? <p className="text-sm text-cnf-muted">{hint}</p> : null}
        {error ? (
          <p className="text-sm font-medium text-red-700" role="alert">
            {error}
          </p>
        ) : null}
      </fieldset>
    );
  }
);
