import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { FormField } from "./FormField";
import { inputBase } from "./formStyles";

export type SelectOption = {
  value: string;
  label: string;
};

type Props = Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> & {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  hideLabel?: boolean;
  options: SelectOption[];
  /** Optional placeholder text shown as a disabled first option. */
  placeholder?: string;
};

/** Labeled `<select>` — same wrapper API as `FormInput`. */
export const FormSelect = forwardRef<HTMLSelectElement, Props>(function FormSelect(
  {
    id,
    label,
    required,
    hint,
    error,
    hideLabel,
    options,
    placeholder,
    className,
    ...rest
  },
  ref
) {
  return (
    <FormField
      id={id}
      label={label}
      hint={hint}
      error={error}
      required={required}
      hideLabel={hideLabel}
    >
      <select
        ref={ref}
        id={id}
        aria-invalid={error ? true : undefined}
        aria-required={required ? true : undefined}
        className={cn(inputBase, "appearance-none bg-white pr-10", className)}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FormField>
  );
});
