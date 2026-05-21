"use client";

import { useEffect, useId, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { countries, defaultCountryIso2, getCountryByIso2 } from "@/data/countries";
import { countryFlagEmoji } from "@/lib/country-flag";
import { cn } from "@/lib/cn";
import { displayDialCode, formatPhoneE164, parsePhoneE164 } from "@/lib/phone";
import { FormField } from "./FormField";
import { inputBase } from "./formStyles";

const phoneCountryList = [
    ...countries.filter((c) => c.iso2 === defaultCountryIso2),
    ...countries.filter((c) => c.iso2 !== defaultCountryIso2),
];

type Props = {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    error?: string;
    hint?: string;
    required?: boolean;
};

export function FormPhoneInput({
    id,
    label,
    value,
    onChange,
    onBlur,
    error,
    hint,
    required,
}: Props) {
    const listId = useId();
    const rootRef = useRef<HTMLDivElement>(null);
    const parsed = parsePhoneE164(value);
    const [iso2, setIso2] = useState(parsed.iso2);
    const [national, setNational] = useState(parsed.national);
    const [open, setOpen] = useState(false);

    const selected = getCountryByIso2(iso2) ?? getCountryByIso2(defaultCountryIso2)!;

    useEffect(() => {
        const next = parsePhoneE164(value);
        setIso2(next.iso2);
        setNational(next.national);
    }, [value]);

    useEffect(() => {
        function handlePointerDown(event: MouseEvent) {
            if (!rootRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handlePointerDown);
        return () => document.removeEventListener("mousedown", handlePointerDown);
    }, []);

    function emit(nextIso2: string, nextNational: string) {
        const country = getCountryByIso2(nextIso2);
        if (!country) {
            return;
        }

        onChange(formatPhoneE164(country.dialCode, nextNational));
    }

    function selectCountry(nextIso2: string) {
        setIso2(nextIso2);
        setOpen(false);
        emit(nextIso2, national);
    }

    function handleNationalChange(nextNational: string) {
        const digits = nextNational.replace(/\D/g, "").slice(0, 15);
        setNational(digits);
        emit(iso2, digits);
    }

    return (
        <FormField id={id} label={label} hint={hint} error={error} required={required}>
            <div ref={rootRef} className="flex gap-2">
                <div className="relative shrink-0 overflow-visible">
                    <button
                        type="button"
                        id={`${id}-country`}
                        aria-haspopup="listbox"
                        aria-expanded={open}
                        aria-controls={listId}
                        onClick={() => setOpen((prev) => !prev)}
                        className={cn(
                            inputBase,
                            "flex w-[5.5rem] items-center gap-1 px-2 py-2.5",
                            error && "border-red-400 focus:border-red-500 focus:ring-red-500/20",
                        )}
                    >
                        <span className="text-lg leading-none" aria-hidden>
                            {countryFlagEmoji(selected.iso2)}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-sm font-medium tabular-nums text-cnf-ink">
                            {displayDialCode(selected.iso2)}
                        </span>
                        <HiChevronDown
                            className={cn(
                                "h-3.5 w-3.5 shrink-0 text-cnf-muted transition",
                                open && "rotate-180",
                            )}
                            aria-hidden
                        />
                    </button>

                    {open ? (
                        <ul
                            id={listId}
                            role="listbox"
                            aria-label="Country calling code"
                            className="absolute top-full left-0 z-30 mt-1 max-h-56 w-[min(18rem,calc(100vw-2rem))] overflow-y-auto rounded-md border border-cnf-border bg-white py-1 shadow-lg"
                        >
                            {phoneCountryList.map((country) => (
                                <li key={country.iso2} role="presentation">
                                    <button
                                        type="button"
                                        role="option"
                                        aria-selected={country.iso2 === iso2}
                                        onClick={() => selectCountry(country.iso2)}
                                        className={cn(
                                            "flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-cnf-ink hover:bg-cnf-surface",
                                            country.iso2 === iso2 && "bg-cnf-primary/5 font-medium",
                                        )}
                                    >
                                        <span className="text-base leading-none" aria-hidden>
                                            {countryFlagEmoji(country.iso2)}
                                        </span>
                                        <span className="min-w-0 flex-1 truncate">{country.name}</span>
                                        <span className="shrink-0 tabular-nums text-cnf-muted">
                                            +{country.dialCode}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>

                <input
                    id={id}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    aria-invalid={error ? true : undefined}
                    aria-required={required ? true : undefined}
                    placeholder="813 332 2567"
                    value={national}
                    onChange={(event) => handleNationalChange(event.target.value)}
                    onBlur={onBlur}
                    className={cn(
                        inputBase,
                        "min-w-0 flex-1",
                        error && "border-red-400 focus:border-red-500 focus:ring-red-500/20",
                    )}
                />
            </div>
        </FormField>
    );
}
