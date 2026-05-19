import { site } from "@/lib/site";

export const KORAPAY_COLLECTIONS_SCRIPT_URL =
    "https://korablobstorage.blob.core.windows.net/modal-bucket/korapay-collections.min.js";

export const korapayConfig = {
    publicKey: (process.env.NEXT_PUBLIC_KORAPAY_KEY ?? "").trim(),
    notificationUrl:
        process.env.NEXT_PUBLIC_KORAPAY_NOTIFICATION_URL ??
        `${site.url.replace(/\/$/, "")}/api/payments/korapay-webhook`,
    currency: "NGN" as const,
    minAmountNaira: 100,
};
