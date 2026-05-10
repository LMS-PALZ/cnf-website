export async function notifyInbox(subject: string, text: string): Promise<void> {
    const to = process.env.NOTIFICATIONS_EMAIL;
    if (!to)
        return;
    const key = process.env.RESEND_API_KEY;
    if (!key) {
        console.info("[email] NOTIFICATIONS_EMAIL set but RESEND_API_KEY missing; skip send");
        return;
    }
    const from = process.env.RESEND_FROM ?? "CNF Website <onboarding@resend.dev>";
    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to, subject, text }),
    });
    if (!res.ok) {
        const errText = await res.text().catch(() => "");
        console.error("[email] Resend error", res.status, errText);
    }
}
