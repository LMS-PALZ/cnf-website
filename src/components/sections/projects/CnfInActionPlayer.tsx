"use client";

import { useState } from "react";
import { HiPlay } from "react-icons/hi2";
import { Badge } from "@/components/ui/Badge";
import { CnfImage } from "@/components/ui/CnfImage";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { coverImageTopClass } from "@/lib/image-fit";
import { googleDriveEmbedUrl, isGoogleDriveUrl } from "@/lib/google-drive";
import { isYouTubeUrl, youtubeEmbedUrl } from "@/lib/youtube";
import type { VideoItem } from "@/data/projects/videos";
import { videos } from "@/data/projects/videos";

const themeBadge = {
    skills: "skills" as const,
    education: "education" as const,
    humanitarian: "humanitarian" as const,
    civic: "education" as const,
};

function resolveEmbedSrc(video: VideoItem): string | null {
    const startSeconds = video.previewOffsetSeconds ?? 0;
    const start = startSeconds > 0 ? startSeconds : undefined;

    if (isGoogleDriveUrl(video.videoUrl)) {
        return googleDriveEmbedUrl(video.videoUrl, { startSeconds: start });
    }

    if (isYouTubeUrl(video.videoUrl)) {
        return youtubeEmbedUrl(video.videoUrl, { startSeconds: start });
    }

    return video.videoUrl;
}

function VideoEmbed({ video }: { video: VideoItem }) {
    const [playing, setPlaying] = useState(!video.previewImageSrc);
    const embedSrc = resolveEmbedSrc(video);

    if (video.previewImageSrc && !playing) {
        return (
            <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 flex h-full w-full items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                aria-label={`Play ${video.title}`}
            >
                <CnfImage
                    src={video.previewImageSrc}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className={cn(coverImageTopClass, "transition duration-300 group-hover:scale-[1.02]")}
                    aria-hidden
                />
                <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35" aria-hidden />
                <span
                    className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-cnf-primary shadow-lg transition group-hover:scale-105"
                    aria-hidden
                >
                    <HiPlay className="ml-0.5 h-7 w-7" />
                </span>
            </button>
        );
    }

    if (embedSrc && (isGoogleDriveUrl(video.videoUrl) || isYouTubeUrl(video.videoUrl))) {
        return (
            <iframe
                src={embedSrc}
                title={video.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
            />
        );
    }

    if (embedSrc) {
        return (
            <video
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                aria-label={video.title}
            >
                <source src={embedSrc} type="video/mp4" />
            </video>
        );
    }

    return (
        <div className="flex h-full min-h-[10rem] items-center justify-center bg-cnf-surface px-4 text-center text-sm text-cnf-muted">
            Video unavailable
        </div>
    );
}

function VideoActionBox({ video }: { video: VideoItem }) {
    const badgeTone = video.badgeTone ?? (video.theme ? themeBadge[video.theme] : "neutral");

    return (
        <article className="flex h-full flex-col overflow-hidden rounded-lg border border-cnf-border/80 bg-white shadow-sm">
            <div className="relative aspect-video w-full overflow-hidden bg-black">
                <VideoEmbed video={video} />
            </div>
            <div className="flex flex-col gap-2 p-4">
                <Badge tone={badgeTone} className="w-fit">
                    {video.badge}
                </Badge>
                <h3
                    className={cn(
                        fontDisplay.className,
                        "text-sm font-semibold leading-snug text-cnf-ink md:text-base",
                    )}
                >
                    {video.title}
                </h3>
            </div>
        </article>
    );
}

export function CnfInActionPlayer() {
    if (videos.length === 0) {
        return null;
    }

    return (
        <div
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
            role="list"
            aria-label="CNF videos"
        >
            {videos.map((video) => (
                <div key={video.id} role="listitem" className="min-w-0">
                    <VideoActionBox video={video} />
                </div>
            ))}
        </div>
    );
}
