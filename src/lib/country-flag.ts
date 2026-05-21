/** Regional-indicator flag emoji from ISO 3166-1 alpha-2 (e.g. NG → 🇳🇬). */
export function countryFlagEmoji(iso2: string): string {
    const code = iso2.toUpperCase();
    if (!/^[A-Z]{2}$/.test(code)) {
        return "";
    }

    return String.fromCodePoint(
        ...[...code].map((char) => 0x1f1e6 + char.charCodeAt(0) - 65),
    );
}
