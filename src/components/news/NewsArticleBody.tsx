"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { parseNewsBody } from "@/data/news";
import { parseNewsParagraphSegments } from "@/lib/news-utils";

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
                    <p key={index} className="whitespace-pre-line">
                        {parseNewsParagraphSegments(paragraph).map((segment, segmentIndex) =>
                            segment.type === "link" ? (
                                <a
                                    key={segmentIndex}
                                    className="break-all font-semibold text-cnf-primary underline underline-offset-2 hover:text-cnf-primary-light"
                                    href={segment.href}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {segment.label}
                                </a>
                            ) : (
                                <span key={segmentIndex}>{segment.content}</span>
                            ),
                        )}
                    </p>
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
