"use client";

import { useState, type ReactNode } from "react";
import { KoraPaymentModal } from "@/components/payments/KoraPaymentModal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
    buttonBase,
    buttonSizes,
    buttonVariants,
    type ButtonSize,
    type ButtonVariant,
} from "@/components/ui/buttonStyles";
import type { PaymentIntent } from "@/lib/payments/payment-types";

type Props = {
    children: ReactNode;
    amountNaira?: number;
    lockAmount?: boolean;
    purpose?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
};

function buildIntent(
    amountNaira: number | undefined,
    lockAmount: boolean | undefined,
    purpose: string | undefined,
): PaymentIntent | undefined {
    const intent: PaymentIntent = {};
    if (purpose) {
        intent.label = purpose;
    }
    if (lockAmount && amountNaira != null) {
        intent.amountNaira = amountNaira;
        intent.lockAmount = true;
    }
    return Object.keys(intent).length > 0 ? intent : undefined;
}

export function DonatePayButton({
    children,
    amountNaira,
    lockAmount,
    purpose,
    variant = "primary",
    size = "md",
    className,
    disabled,
    fullWidth,
}: Props) {
    const [open, setOpen] = useState(false);
    const intent = buildIntent(amountNaira, lockAmount, purpose);

    return (
        <>
            <Button
                type="button"
                variant={variant}
                size={size}
                disabled={disabled}
                className={cn(fullWidth && "w-full", className)}
                onClick={() => setOpen(true)}
            >
                {children}
            </Button>
            <KoraPaymentModal open={open} onClose={() => setOpen(false)} intent={intent} />
        </>
    );
}

export function DonatePayLinkButton({
    children,
    amountNaira,
    lockAmount,
    purpose,
    className,
    size = "md",
}: Pick<Props, "children" | "amountNaira" | "lockAmount" | "purpose" | "className" | "size">) {
    const [open, setOpen] = useState(false);
    const intent = buildIntent(amountNaira, lockAmount, purpose);

    return (
        <>
            <button
                type="button"
                className={cn(
                    buttonBase,
                    buttonVariants["dark-outline"],
                    buttonSizes[size],
                    className,
                )}
                onClick={() => setOpen(true)}
            >
                {children}
            </button>
            <KoraPaymentModal open={open} onClose={() => setOpen(false)} intent={intent} />
        </>
    );
}
