export type FormPostResult = {
    ok: true;
} | {
    ok: false;
    error: string;
    fieldErrors?: Record<string, string[] | undefined>;
};
export async function postJson(url: string, body: unknown): Promise<FormPostResult> {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            credentials: "same-origin",
        });

        const data = (await res.json().catch(() => ({}))) as {
            ok?: boolean;
            error?: string;
            fieldErrors?: Record<string, string[] | undefined>;
        };

        if (data.ok === true) {
            return { ok: true };
        }

        return {
            ok: false,
            error:
                typeof data.error === "string"
                    ? data.error
                    : res.ok
                      ? "Something went wrong"
                      : `Request failed (${res.status})`,
            fieldErrors: data.fieldErrors,
        };
    } catch {
        return {
            ok: false,
            error: "Network error. Check your connection and try again.",
        };
    }
}
