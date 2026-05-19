"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { Skeleton } from "./Skeleton";

type Props = ImageProps & {
    containerClassName?: string;
    showSkeleton?: boolean;
};

export function CnfImage({
    className,
    containerClassName,
    showSkeleton = true,
    onLoad,
    onLoadingComplete,
    alt,
    ...props
}: Props) {
    const [loaded, setLoaded] = useState(false);

    function handleLoad(event: React.SyntheticEvent<HTMLImageElement>) {
        setLoaded(true);
        onLoad?.(event);
    }

    function handleLoadingComplete(img: HTMLImageElement) {
        setLoaded(true);
        onLoadingComplete?.(img);
    }

    const fill = props.fill;

    return (
        <div
            className={cn(
                "overflow-hidden bg-cnf-surface",
                fill ? "absolute inset-0" : "relative",
                containerClassName,
            )}
        >
            {showSkeleton && !loaded ? (
                <Skeleton
                    variant="image"
                    announce={false}
                    className="absolute inset-0 z-[1] gap-0"
                    itemClassName="h-full min-h-0 w-full rounded-none"
                />
            ) : null}
            <Image
                {...props}
                alt={alt}
                className={cn(
                    "transition-opacity duration-300 ease-out",
                    loaded ? "opacity-100" : "opacity-0",
                    className,
                )}
                onLoad={handleLoad}
                onLoadingComplete={handleLoadingComplete}
            />
        </div>
    );
}
