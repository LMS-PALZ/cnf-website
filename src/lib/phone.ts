import { countries, defaultCountryIso2, getCountryByIso2 } from "@/data/countries";

/** E.164-style value stored in forms (e.g. +2348133322567). */
export function formatPhoneE164(dialCode: string, national: string): string {
    const digits = national.replace(/\D/g, "").replace(/^0+/, "");
    if (!digits) {
        return "";
    }

    return `+${dialCode}${digits}`;
}

export function parsePhoneE164(value: string): { iso2: string; national: string } {
    const trimmed = value.trim();
    if (!trimmed) {
        return { iso2: defaultCountryIso2, national: "" };
    }

    const digits = trimmed.startsWith("+") ? trimmed.slice(1).replace(/\D/g, "") : trimmed.replace(/\D/g, "");

    if (!digits) {
        return { iso2: defaultCountryIso2, national: "" };
    }

    const byDialLength = [...countries].sort((a, b) => b.dialCode.length - a.dialCode.length);

    for (const country of byDialLength) {
        if (digits.startsWith(country.dialCode)) {
            return {
                iso2: country.iso2,
                national: digits.slice(country.dialCode.length),
            };
        }
    }

    return { iso2: defaultCountryIso2, national: digits };
}

export function displayDialCode(iso2: string): string {
    const country = getCountryByIso2(iso2);
    return country ? `+${country.dialCode}` : "";
}
