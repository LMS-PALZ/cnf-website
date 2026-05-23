import fs from "node:fs/promises";
import path from "node:path";

export type SubmissionKind =
    | "donate-intent"
    | "partnership"
    | "volunteer"
    | "careers-newsletter"
    | "careers-profile"
    | "newsletter"
    | "contact";

/**
 * Append a submission to a local JSONL log (dev / self-hosted only).
 * On Vercel the project filesystem is read-only, so this is a no-op there.
 * Failures are logged but never block email delivery.
 */
export async function appendSubmission(kind: SubmissionKind, payload: Record<string, unknown>): Promise<void> {
    if (process.env.VERCEL === "1") {
        return;
    }

    try {
        const dir = path.join(process.cwd(), "data");
        await fs.mkdir(dir, { recursive: true });
        const line =
            JSON.stringify({
                ts: new Date().toISOString(),
                kind,
                payload,
            }) + "\n";
        await fs.appendFile(path.join(dir, `submissions-${kind}.log.jsonl`), line, "utf8");
    } catch (error) {
        console.error(`[forms/persist] ${kind}`, error);
    }
}
