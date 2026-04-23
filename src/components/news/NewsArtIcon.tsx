type IconName = "tree" | "scope" | "cap" | "heart" | "pill";

const common = "h-14 w-14 text-white/35";

export function NewsArtIcon({ name, className = "" }: { name: IconName; className?: string }) {
  const cls = `${common} ${className}`;
  switch (name) {
    case "tree":
      return (
        <svg className={cls} viewBox="0 0 64 64" fill="currentColor" aria-hidden>
          <path d="M32 8 L44 28 H38 V52 H26 V28 H20 Z" />
          <path d="M32 4 L40 20 H24 Z" opacity="0.7" />
        </svg>
      );
    case "scope":
      return (
        <svg className={cls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <path d="M14 36c0-10 8-18 18-18s18 8 18 18-8 18-18 18-18-8-18-18z" />
          <path d="M38 38l12 12" strokeLinecap="round" />
          <path d="M26 32h12M32 26v12" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case "cap":
      return (
        <svg className={cls} viewBox="0 0 64 64" fill="currentColor" aria-hidden>
          <path d="M8 28 L32 16 56 28 32 36 Z" />
          <path d="M16 30v14c0 4 7 8 16 8s16-4 16-8V30" opacity="0.85" />
        </svg>
      );
    case "heart":
      return (
        <svg className={cls} viewBox="0 0 64 64" fill="currentColor" aria-hidden>
          <path d="M32 54S8 38 8 24c0-8 6-14 14-14 5 0 10 3 10 8 0-5 5-8 10-8 8 0 14 6 14 14 0 14-24 30-24 30z" />
        </svg>
      );
    case "pill":
      return (
        <svg className={cls} viewBox="0 0 64 64" fill="currentColor" aria-hidden>
          <rect x="12" y="24" width="40" height="16" rx="8" opacity="0.9" />
        </svg>
      );
    default:
      return null;
  }
}
