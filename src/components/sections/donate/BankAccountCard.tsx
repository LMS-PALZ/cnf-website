"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { CheckIcon, CopyIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type Row = {
  label: string;
  value: string;
  /** When true, the value gets a Copy button next to it. */
  copyable?: boolean;
};

type Props = {
  /** Bank-detail rows to render inside the dark account-info panel. */
  rows: Row[];
};

/**
 * Inline bank-details panel with a copy button on the account number.
 * Lives inside the "Bank Transfer" card on the donate page.
 *
 * Marked `"use client"` because we need clipboard access + a tiny piece of
 * "just-copied" UI state.
 */
export function BankAccountCard({ rows }: Props) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(label);
      toast.success(`${label} copied`);
      setTimeout(() => setCopiedKey((k) => (k === label ? null : k)), 1500);
    } catch {
      toast.error("Could not copy. Please copy manually.");
    }
  };

  return (
    <div className="rounded-xl bg-cnf-night p-5 text-sm text-white/85">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cnf-accent">
        CNF Account Details
      </p>
      <dl className="mt-3 divide-y divide-white/10">
        {rows.map((row) => {
          const isPlaceholder =
            row.value.toLowerCase().startsWith("add ") ||
            row.value.trim().length === 0;
          const isCopied = copiedKey === row.label;
          return (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0"
            >
              <dt className="text-white/60">{row.label}</dt>
              <dd className="flex items-center gap-2 text-right">
                <span
                  className={cn(
                    "font-semibold",
                    isPlaceholder ? "text-cnf-accent" : "text-white"
                  )}
                >
                  {row.value}
                </span>
                {row.copyable && !isPlaceholder ? (
                  <button
                    type="button"
                    onClick={() => handleCopy(row.label, row.value)}
                    className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-accent"
                    aria-label={`Copy ${row.label}`}
                  >
                    {isCopied ? (
                      <CheckIcon className="h-3.5 w-3.5" />
                    ) : (
                      <CopyIcon className="h-3.5 w-3.5" />
                    )}
                    <span>{isCopied ? "Copied" : "Copy"}</span>
                  </button>
                ) : null}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
