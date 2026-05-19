export type KorapayCustomer = {
    name: string;
    email: string;
};

export type KorapayInitializeOptions = {
    key: string;
    reference: string;
    amount: number;
    currency: string;
    customer: KorapayCustomer;
    notification_url?: string;
    metadata?: Record<string, string>;
    onSuccess?: () => void;
    onFailed?: () => void;
    onClose?: () => void;
};

export type Korapay = {
    initialize: (options: KorapayInitializeOptions) => void;
};

declare global {
    interface Window {
        Korapay?: Korapay;
    }
}

export {};
