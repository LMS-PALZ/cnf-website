/**
 * Renders a single colourful emoji as the card-art motif. Each news item
 * supplies its own emoji via `NewsItem.emoji`, giving every story a
 * distinct visual without needing photography.
 *
 * Sized via the wrapping `text-*` utility (the parent decides whether
 * this appears small inside a list card or extra-large inside the
 * featured card).
 */
export function NewsArtIcon({
  emoji,
  className = "",
}: {
  emoji: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      role="img"
      className={`select-none leading-none drop-shadow-sm ${className}`}
      style={{
        fontFamily:
          '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Twemoji Mozilla", "EmojiOne Color", system-ui, sans-serif',
      }}
    >
      {emoji}
    </span>
  );
}
