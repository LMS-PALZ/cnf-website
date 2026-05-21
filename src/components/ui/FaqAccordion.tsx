"use client";

import { useId, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { cn } from "@/lib/cn";

export type FaqAccordionItem = {
    question: string;
    answer: string;
};

type Props = {
    items: FaqAccordionItem[];
    /** Index of the panel open on first render; `null` for all closed */
    defaultOpenIndex?: number | null;
    className?: string;
};

function isListLine(line: string) {
    return line.startsWith("–") || line.startsWith("-");
}

function formatAnswer(answer: string) {
    const blocks = answer.split("\n\n").filter(Boolean);
    return blocks.map((block, blockIndex) => {
        const lines = block.split("\n").filter(Boolean);
        const listLines = lines.filter(isListLine);
        const hasList = listLines.length > 0;

        if (!hasList) {
            return (
                <p key={blockIndex} className={blockIndex > 0 ? "mt-3" : undefined}>
                    {block}
                </p>
            );
        }

        const introLines = lines.filter((line) => !isListLine(line) && lines.indexOf(line) < lines.findIndex(isListLine));
        const outroLines = lines.filter((line) => !isListLine(line) && lines.indexOf(line) > lines.findLastIndex(isListLine));

        return (
            <div key={blockIndex} className={blockIndex > 0 ? "mt-3" : undefined}>
                {introLines.length > 0 ? (
                    <p className="mb-2">{introLines.join(" ")}</p>
                ) : null}
                <ul className="list-none space-y-1.5 pl-0">
                    {listLines.map((line) => (
                        <li key={line} className="flex gap-2">
                            <span aria-hidden className="text-cnf-primary">
                                –
                            </span>
                            <span>{line.replace(/^[–-]\s*/, "")}</span>
                        </li>
                    ))}
                </ul>
                {outroLines.length > 0 ? (
                    <p className="mt-3">{outroLines.join(" ")}</p>
                ) : null}
            </div>
        );
    });
}

export function FaqAccordion({
    items,
    defaultOpenIndex = 0,
    className,
}: Props) {
    const baseId = useId();
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    return (
        <div className={cn("divide-y divide-cnf-border/80", className)}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `${baseId}-panel-${index}`;
                const buttonId = `${baseId}-button-${index}`;

                return (
                    <div key={item.question} className="bg-cnf-surface/60 first:rounded-t-lg last:rounded-b-lg">
                        <h3>
                            <button
                                id={buttonId}
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() =>
                                    setOpenIndex((current) =>
                                        current === index ? null : index,
                                    )
                                }
                                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-cnf-ink transition-colors hover:bg-cnf-surface md:px-6 md:text-base"
                            >
                                <span>{item.question}</span>
                                <HiChevronDown
                                    className={cn(
                                        "h-5 w-5 shrink-0 text-cnf-muted transition-transform duration-200",
                                        isOpen && "rotate-180",
                                    )}
                                    aria-hidden
                                />
                            </button>
                        </h3>
                        <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            hidden={!isOpen}
                            className="px-5 pb-4 text-sm leading-relaxed text-cnf-muted md:px-6"
                        >
                            {formatAnswer(item.answer)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
