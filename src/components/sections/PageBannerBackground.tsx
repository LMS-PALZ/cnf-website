"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
    src: string;
    alt: string;
};

export function PageBannerBackground({ src, alt }: Props) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="absolute inset-0 bg-cnf-ink" aria-hidden>
            {/* Instant paint while the optimized image loads */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${src}")` }}
            />

            <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="100vw"
                className={cn(
                    "object-cover object-center transition-opacity duration-500 ease-out",
                    loaded ? "opacity-100" : "opacity-0",
                )}
                onLoad={() => setLoaded(true)}
            />

            <div
                className="absolute inset-0 bg-gradient-to-br from-cnf-primary/80 via-cnf-primary/65 to-cnf-ink/50"
                aria-hidden
            />
            <div
                className="cnf-dot-pattern absolute inset-0 opacity-[0.14]"
                aria-hidden
            />
        </div>
    );
}
