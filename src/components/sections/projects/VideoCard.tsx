import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ImageOffIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import type { VideoItem } from "@/data/projects/videos";

type Props = {
  video: VideoItem;
};

const themeBadge = {
  skills: "skills" as const,
  education: "education" as const,
  humanitarian: "humanitarian" as const,
};

/**
 * Video card with a placeholder thumbnail (light gray rectangle with a
 * broken-image icon) and a small content footer (badge + title).
 *
 * If `video.featured` is true the card renders taller — the parent grid
 * adds `lg:row-span-2` to make it occupy two rows.
 */
export function VideoCard({ video }: Props) {
  const inner: ReactNode = (
    <>
      <div
        className={cn(
          "relative flex flex-1 items-center justify-center overflow-hidden bg-cnf-border/70",
          video.featured ? "min-h-[280px]" : "min-h-[160px]"
        )}
      >
        <ImageOffIcon className="h-10 w-10 text-cnf-muted/70" />
      </div>

      <div className="flex flex-col gap-2 p-5">
        <Badge
          tone={video.theme ? themeBadge[video.theme] : "accent-on-dark"}
        >
          {video.badge}
        </Badge>
        <p
          className={cn(
            fontDisplay.className,
            "text-sm font-semibold leading-snug text-white md:text-base"
          )}
        >
          {video.title}
        </p>
      </div>
    </>
  );

  return (
    <Card
      tone="dark-soft"
      padding="none"
      className={cn(
        "group flex h-full flex-col overflow-hidden border-white/10 bg-cnf-night-soft",
        video.featured && "lg:row-span-2"
      )}
      as="article"
    >
      {video.href ? (
        <Link href={video.href} className="flex h-full flex-col">
          {inner}
        </Link>
      ) : (
        <div className="flex h-full flex-col">{inner}</div>
      )}
    </Card>
  );
}
