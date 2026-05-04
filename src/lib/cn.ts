/**
 * Join class names while skipping falsy values. Lightweight alternative
 * to `clsx` so we don't add a dependency for one helper.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
