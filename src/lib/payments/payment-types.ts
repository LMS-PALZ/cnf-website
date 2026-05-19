export type PaymentIntent = {
    amountNaira?: number;
    /** When true, amount is prefilled and cannot be changed (tier card CTAs only) */
    lockAmount?: boolean;
    /** Passed to Korapay metadata */
    label?: string;
};
