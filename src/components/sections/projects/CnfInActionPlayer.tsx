"use client";

import { useMemo, useState } from "react";
import { HiPlay } from "react-icons/hi2";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { googleDriveEmbedUrl, isGoogleDriveUrl } from "@/lib/google-drive";
import type { VideoItem } from "@/data/projects/videos";
import { videos } from "@/data/projects/videos";

const themeBadge = {
    skills: "skills" as const,
    education: "education" as const,
    humanitarian: "humanitarian" as const,
};

type EmbedOptions = {
    autoplay?: boolean;
    startSeconds?: number;
};

function resolveEmbedSrc(video: VideoItem, options: EmbedOptions = {}): string | null {
    if (!video.videoUrl) {
        return null;
    }

    if (isGoogleDriveUrl(video.videoUrl)) {
        const startSeconds = options.startSeconds ?? video.previewOffsetSeconds ?? 0;
        return googleDriveEmbedUrl(video.videoUrl, {
            autoplay: options.autoplay,
            startSeconds: startSeconds > 0 ? startSeconds : undefined,
        });
    }

    return video.videoUrl;
}

function VideoEmbed({
    video,
    autoplay,
    startSeconds,
}: {
    video: VideoItem;
    autoplay: boolean;
    startSeconds?: number;
}) {
    const driveEmbed =
        video.videoUrl && isGoogleDriveUrl(video.videoUrl)
            ? resolveEmbedSrc(video, { autoplay, startSeconds })
            : null;
    const directSrc = video.videoUrl && !isGoogleDriveUrl(video.videoUrl) ? video.videoUrl : null;

    if (driveEmbed) {
        return (
            <iframe
                key={`${video.id}-${autoplay ? "play" : "idle"}-${startSeconds ?? 0}`}
                src={driveEmbed}
                title={video.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        );
    }

    if (directSrc) {
        return (
            <video
                key={video.id}
                controls
                autoPlay={autoplay}
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                aria-label={video.title}
            >
                <source src={directSrc} type="video/mp4" />
            </video>
        );
    }

    return null;
}

function VideoPreviewThumb({ video, onSelect }: { video: VideoItem; onSelect: () => void }) {
    const previewSrc = resolveEmbedSrc(video, {
        startSeconds: video.previewOffsetSeconds,
    });

    return (
        <button
            type="button"
            onClick={onSelect}
            className="group flex w-full flex-col overflow-hidden rounded-lg border border-cnf-border/80 bg-white text-left shadow-sm transition-colors hover:border-cnf-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
        >
            <div className="relative aspect-video min-h-[10.5rem] w-full overflow-hidden bg-black sm:min-h-[12rem] md:min-h-[13.5rem]">
                {previewSrc ? (
                    <iframe
                        src={previewSrc}
                        title={`Preview: ${video.title}`}
                        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] border-0"
                        loading="lazy"
                        tabIndex={-1}
                        aria-hidden
                    />
                ) : null}
                <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/40">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cnf-accent text-cnf-accent-ink shadow-lg">
                        <HiPlay className="h-5 w-5 translate-x-0.5" aria-hidden />
                    </span>
                </span>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <Badge tone={video.theme ? themeBadge[video.theme] : "neutral"} className="w-fit">
                    {video.badge}
                </Badge>
                <p
                    className={cn(
                        fontDisplay.className,
                        "line-clamp-2 text-sm font-semibold leading-snug text-cnf-ink",
                    )}
                >
                    {video.title}
                </p>
            </div>
        </button>
    );
}

const initialActiveId = videos.find((v) => v.featured)?.id ?? videos[0]?.id ?? "";

export function CnfInActionPlayer() {
    const [activeId, setActiveId] = useState(initialActiveId);
    const [playOnLoad, setPlayOnLoad] = useState(false);

    const activeVideo = useMemo(() => videos.find((v) => v.id === activeId) ?? videos[0], [activeId]);
    const previews = useMemo(() => videos.filter((v) => v.id !== activeVideo?.id), [activeVideo?.id]);

    if (!activeVideo) {
        return null;
    }

    function handleSelect(id: string) {
        setPlayOnLoad(true);
        setActiveId(id);
    }

    const mainStartSeconds = playOnLoad ? activeVideo.previewOffsetSeconds : undefined;

    return (
        <div className="mt-10 flex flex-col gap-5 md:gap-6">
            <article className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg border border-cnf-border/80 bg-white shadow-sm lg:max-w-5xl">
                <div className="relative aspect-video min-h-[16rem] w-full overflow-hidden bg-black sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[22rem]">
                    <VideoEmbed
                        key={activeVideo.id}
                        video={activeVideo}
                        autoplay={playOnLoad}
                        startSeconds={mainStartSeconds}
                    />
                </div>
                <div className="flex flex-col gap-2 p-4 md:p-5">
                    <Badge tone={activeVideo.theme ? themeBadge[activeVideo.theme] : "neutral"} className="w-fit">
                        {activeVideo.badge}
                    </Badge>
                    <h3
                        className={cn(
                            fontDisplay.className,
                            "text-base font-semibold leading-snug text-cnf-ink md:text-lg",
                        )}
                    >
                        {activeVideo.title}
                    </h3>
                </div>
            </article>

            {previews.length > 0 ? (
                <div
                    className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:max-w-5xl lg:gap-6"
                    role="list"
                    aria-label="More videos"
                >
                    {previews.map((video) => (
                        <div key={video.id} role="listitem">
                            <VideoPreviewThumb video={video} onSelect={() => handleSelect(video.id)} />
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}
