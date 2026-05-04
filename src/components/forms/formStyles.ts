/**
 * Shared Tailwind class fragments for form fields. Centralised here so all
 * inputs across all forms stay visually consistent — and so we can re-skin
 * the forms by editing one file.
 */

/** Base text-input look used by `<FormInput>` and `<FormTextarea>`. */
export const inputBase =
  "w-full rounded-md border border-cnf-border bg-white px-3 py-2.5 text-base text-cnf-ink placeholder:text-cnf-muted/70 shadow-sm focus:border-cnf-primary focus:outline-none focus:ring-2 focus:ring-cnf-primary/20 disabled:cursor-not-allowed disabled:bg-cnf-surface disabled:text-cnf-muted";

/** Slimmer variant for inline / quick signup inputs. */
export const inputCompact =
  "w-full rounded-md border border-cnf-border bg-white px-3 py-2 text-sm text-cnf-ink placeholder:text-cnf-muted/70 focus:border-cnf-primary focus:outline-none focus:ring-2 focus:ring-cnf-primary/20";

/** Outer card surface used to wrap a form on the Get Involved page. */
export const formCardSurface =
  "rounded-2xl border border-cnf-border bg-cnf-surface p-6 shadow-sm md:p-8";
