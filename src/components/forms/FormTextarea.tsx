import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { FormField } from "./FormField";
import { inputBase } from "./formStyles";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  hideLabel?: boolean;
};

/** Labeled textarea — same wrapper API as `FormInput`. */
export const FormTextarea = forwardRef<HTMLTextAreaElement, Props>(
  function FormTextarea(
    { id, label, required, hint, error, hideLabel, className, rows = 4, ...rest },
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
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          aria-invalid={error ? true : undefined}
          aria-required={required ? true : undefined}
          className={cn(inputBase, "min-h-24 resize-y", className)}
          {...rest}
        />
      </FormField>
    );
  }
);
