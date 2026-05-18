export type GoogleDriveEmbedOptions = {
    autoplay?: boolean;
    /** Best-effort start time in seconds (Drive player support varies). */
    startSeconds?: number;
};

/** Google Drive share/view URL → embed URL that plays inside an iframe. */
export function googleDriveEmbedUrl(
    shareOrViewUrl: string,
    options: GoogleDriveEmbedOptions = {},
): string | null {
    const idMatch =
        shareOrViewUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ??
        shareOrViewUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);

    const id = idMatch?.[1];
    if (!id) {
        return null;
    }

    const url = new URL(`https://drive.google.com/file/d/${id}/preview`);

    if (options.autoplay) {
        url.searchParams.set("autoplay", "1");
    }

    if (options.startSeconds != null && options.startSeconds > 0) {
        url.searchParams.set("t", String(options.startSeconds));
    }

    let href = url.toString();

    if (options.startSeconds != null && options.startSeconds > 0) {
        href += `#t=${options.startSeconds}s`;
    }

    return href;
}

export function isGoogleDriveUrl(url: string): boolean {
    return url.includes("drive.google.com");
}
