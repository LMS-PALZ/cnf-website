import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { FormField } from "./FormField";
import { inputBase } from "./formStyles";
type Props = InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    label: string;
    required?: boolean;
    hint?: string;
    error?: string;
    hideLabel?: boolean;
};
export const FormInput = forwardRef<HTMLInputElement, Props>(function FormInput({ id, label, required, hint, error, hideLabel, className, type = "text", ...rest }, ref) {
    return (<FormField id={id} label={label} hint={hint} error={error} required={required} hideLabel={hideLabel}>
      <input ref={ref} id={id} type={type} aria-invalid={error ? true : undefined} aria-required={required ? true : undefined} className={cn(inputBase, className)} {...rest}/>
    </FormField>);
});
