"use client";

import { KoraPaymentScript } from "@/components/payments/KoraPaymentModal";

/** Load Korapay once for all DonatePayButton instances. */
export function PaymentScripts() {
    return <KoraPaymentScript />;
}
