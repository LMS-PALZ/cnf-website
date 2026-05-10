export function NewsArtIcon({ emoji, className = "", }: {
    emoji: string;
    className?: string;
}) {
    return (<span aria-hidden role="img" className={`select-none leading-none drop-shadow-sm ${className}`} style={{
            fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Twemoji Mozilla", "EmojiOne Color", system-ui, sans-serif',
        }}>
      {emoji}
    </span>);
}
