"use client";

import { CnfImage } from "@/components/ui/CnfImage";
import {
    containImageClass,
    containImagePosition,
    coverImageTopClass,
    coverImageTopPosition,
} from "@/lib/image-fit";
import type { PageBannerImage } from "@/data/page-banners";

type Props = Pick<PageBannerImage, "src" | "alt" | "objectFit" | "objectPosition">;

export function PageBannerBackground({
    src,
    alt,
    objectFit = "cover",
    objectPosition,
}: Props) {
    const contain = objectFit === "contain";
    const imageClass = contain ? containImageClass : coverImageTopClass;
    const position = objectPosition ?? (contain ? containImagePosition : coverImageTopPosition);

    return (
        <div className="absolute inset-0 bg-cnf-primary" aria-hidden>
            <CnfImage
                src={src}
                alt={alt}
                fill
                priority
                sizes="100vw"
                className={imageClass}
                style={{ objectPosition: position }}
            />

            <div
                className="absolute inset-0 z-[2] bg-gradient-to-br from-cnf-primary/52 via-cnf-primary/34 to-black/26"
                aria-hidden
            />
            <div
                className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_top_right,rgba(244,146,33,0.07),transparent_60%)]"
                aria-hidden
            />
            <div
                className="cnf-dot-pattern absolute inset-0 z-[2] opacity-[0.14]"
                aria-hidden
            />
        </div>
    );
}
