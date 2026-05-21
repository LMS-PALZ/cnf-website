import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import { HiChevronDown } from "react-icons/hi2";
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
    placeholder?: string;
};

export const FormSelect = forwardRef<HTMLSelectElement, Props>(function FormSelect(
    { id, label, required, hint, error, hideLabel, options, placeholder, className, ...rest },
    ref,
) {
    return (
        <FormField id={id} label={label} hint={hint} error={error} required={required} hideLabel={hideLabel}>
            <div className="relative">
                <select
                    ref={ref}
                    id={id}
                    aria-invalid={error ? true : undefined}
                    aria-required={required ? true : undefined}
                    className={cn(inputBase, "appearance-none bg-white pr-9", className)}
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
                <HiChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cnf-muted"
                    aria-hidden
                />
            </div>
        </FormField>
    );
});
