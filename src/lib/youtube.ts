export type YouTubeEmbedOptions = {
    autoplay?: boolean;
    /** Start time in seconds (shown when the player loads). */
    startSeconds?: number;
};

export function isYouTubeUrl(url: string): boolean {
    return /youtube\.com|youtu\.be/i.test(url);
}

export function youtubeVideoId(url: string): string | null {
    const shorts = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shorts?.[1]) {
        return shorts[1];
    }

    const watch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watch?.[1]) {
        return watch[1];
    }

    const shortLink = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortLink?.[1]) {
        return shortLink[1];
    }

    const embed = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
    if (embed?.[1]) {
        return embed[1];
    }

    return null;
}

/** YouTube watch / Shorts URL → embed URL for iframe. */
export function youtubeEmbedUrl(
    watchOrShortsUrl: string,
    options: YouTubeEmbedOptions = {},
): string | null {
    const id = youtubeVideoId(watchOrShortsUrl);
    if (!id) {
        return null;
    }

    const url = new URL(`https://www.youtube.com/embed/${id}`);
    url.searchParams.set("rel", "0");
    url.searchParams.set("modestbranding", "1");

    if (options.startSeconds != null && options.startSeconds > 0) {
        url.searchParams.set("start", String(Math.floor(options.startSeconds)));
    }

    if (options.autoplay) {
        url.searchParams.set("autoplay", "1");
        url.searchParams.set("mute", "1");
    }

    return url.toString();
}
