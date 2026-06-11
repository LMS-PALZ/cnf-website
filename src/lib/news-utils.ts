export function formatNewsDate(iso: string) {
    return new Intl.DateTimeFormat("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(iso));
}

export type NewsParagraphSegment =
    | { type: "text"; content: string }
    | { type: "link"; label: string; href: string };

/** Splits paragraph text into plain text and bare `https://...` URL link segments. */
export function parseNewsParagraphSegments(text: string): NewsParagraphSegment[] {
    const pattern = /https?:\/\/[^\s)]+/g;
    const segments: NewsParagraphSegment[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(text)) !== null) {
        if (match.index > lastIndex) {
            segments.push({ type: "text", content: text.slice(lastIndex, match.index) });
        }
        const href = match[0].replace(/[.,;:!?)]+$/, "");
        segments.push({ type: "link", label: href, href });
        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        segments.push({ type: "text", content: text.slice(lastIndex) });
    }

    return segments.length > 0 ? segments : [{ type: "text", content: text }];
}
