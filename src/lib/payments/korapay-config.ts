export const KORAPAY_COLLECTIONS_SCRIPT_URL =
    "https://korablobstorage.blob.core.windows.net/modal-bucket/korapay-collections.min.js";

/** Only env used for payments - Korapay public key (pk_test_... / pk_live_...). */
export const korapayConfig = {
    publicKey: (process.env.NEXT_PUBLIC_KORAPAY_KEY ?? "").trim(),
    currency: "NGN" as const,
    minAmountNaira: 100,
};
