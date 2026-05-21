"use client";

import { useEffect, useId, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { countrySelectOptionsWithDefaultFirst } from "@/data/countries";
import { cn } from "@/lib/cn";
import { FormField } from "./FormField";
import { inputBase } from "./formStyles";

type Props = {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    required?: boolean;
    hint?: string;
    error?: string;
    hideLabel?: boolean;
    placeholder?: string;
};

export function FormCountrySelect({
    id,
    label,
    value,
    onChange,
    onBlur,
    required,
    hint,
    error,
    hideLabel,
    placeholder = "Select country",
}: Props) {
    const listId = useId();
    const rootRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handlePointerDown(event: MouseEvent) {
            if (!rootRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handlePointerDown);
        return () => document.removeEventListener("mousedown", handlePointerDown);
    }, []);

    function selectCountry(name: string) {
        onChange(name);
        setOpen(false);
        onBlur?.();
    }

    return (
        <FormField id={id} label={label} hint={hint} error={error} required={required} hideLabel={hideLabel}>
            <div ref={rootRef} className="relative overflow-visible">
                <button
                    type="button"
                    id={id}
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    aria-controls={listId}
                    aria-invalid={error ? true : undefined}
                    aria-required={required ? true : undefined}
                    onClick={() => setOpen((prev) => !prev)}
                    onBlur={onBlur}
                    className={cn(
                        inputBase,
                        "flex w-full items-center justify-between gap-2 pr-3 text-left",
                        error && "border-red-400 focus:border-red-500 focus:ring-red-500/20",
                    )}
                >
                    <span className={cn("min-w-0 truncate", !value && "text-cnf-muted/70")}>
                        {value || placeholder}
                    </span>
                    <HiChevronDown
                        className={cn(
                            "h-4 w-4 shrink-0 text-cnf-muted transition",
                            open && "rotate-180",
                        )}
                        aria-hidden
                    />
                </button>

                {open ? (
                    <ul
                        id={listId}
                        role="listbox"
                        aria-label="Country"
                        className="absolute top-full left-0 right-0 z-30 mt-1 max-h-56 overflow-y-auto rounded-md border border-cnf-border bg-white py-1 shadow-lg"
                    >
                        {countrySelectOptionsWithDefaultFirst.map((option) => (
                            <li key={option.value} role="presentation">
                                <button
                                    type="button"
                                    role="option"
                                    aria-selected={option.value === value}
                                    onClick={() => selectCountry(option.value)}
                                    className={cn(
                                        "flex w-full px-3 py-2 text-left text-sm text-cnf-ink hover:bg-cnf-surface",
                                        option.value === value && "bg-cnf-primary/5 font-medium",
                                    )}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </FormField>
    );
}
