import { CnfImage } from "@/components/ui/CnfImage";
import { newsCategoryCardArt } from "@/constants/news-card-styles";
import type { NewsItem } from "@/data/news";
import { cn } from "@/lib/cn";

type Props = {
    item: Pick<NewsItem, "category" | "ribbon" | "imageSrc" | "imageAlt" | "title">;
    className?: string;
    imageClassName?: string;
    priority?: boolean;
    /** Defaults to card thumbnail ratio; use h-full min-h-* for featured hero column */
    mediaClassName?: string;
};

export function NewsCardMedia({
    item,
    className,
    imageClassName,
    priority = false,
    mediaClassName = "aspect-[16/10]",
}: Props) {
    const art = newsCategoryCardArt[item.category];

    if (item.imageSrc) {
        return (
            <div
                className={cn(
                    "relative w-full overflow-hidden bg-cnf-surface",
                    mediaClassName,
                    className,
                )}
            >
                <CnfImage
                    src={item.imageSrc}
                    alt={item.imageAlt ?? item.title}
                    fill
                    priority={priority}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={cn("object-cover", imageClassName)}
                />
                <span
                    className={cn(
                        "absolute left-4 top-4 z-[2] inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide",
                        art.ribbonBg,
                        art.ribbonText,
                    )}
                >
                    {item.ribbon}
                </span>
            </div>
        );
    }

    return (
        <div className={cn("relative flex flex-col gap-2 p-4", art.bg, className)}>
            <span
                className={cn(
                    "inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide",
                    art.ribbonBg,
                    art.ribbonText,
                )}
            >
                {item.ribbon}
            </span>
        </div>
    );
}
