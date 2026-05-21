"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { parseNewsBody } from "@/data/news";

const PREVIEW_PARAGRAPH_COUNT = 5;

type Props = {
    body: string;
};

export function NewsArticleBody({ body }: Props) {
    const paragraphs = parseNewsBody(body);
    const [expanded, setExpanded] = useState(false);
    const hasMore = paragraphs.length > PREVIEW_PARAGRAPH_COUNT;
    const visible = expanded
        ? paragraphs
        : paragraphs.slice(0, PREVIEW_PARAGRAPH_COUNT);

    return (
        <Card tone="elevated" padding="lg" className="mt-10 border-cnf-border shadow-sm">
            <div className="space-y-5 text-base leading-relaxed text-cnf-muted">
                {visible.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            {hasMore && !expanded ? (
                <div className="mt-8 flex justify-center border-t border-cnf-border pt-6">
                    <Button
                        type="button"
                        variant="secondary"
                        size="lg"
                        onClick={() => setExpanded(true)}
                    >
                        Continue reading
                    </Button>
                </div>
            ) : null}

        </Card>
    );
}
