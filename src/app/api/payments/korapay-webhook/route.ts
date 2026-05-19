import { NextResponse } from "next/server";

/**
 * Korapay posts payment notifications here when `notification_url` is set on initialize.
 * Verify signatures per Korapay docs before trusting payload in production.
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.info("[korapay-webhook]", JSON.stringify(body));
    } catch {
        console.warn("[korapay-webhook] received non-JSON body");
    }

    return NextResponse.json({ received: true });
}
