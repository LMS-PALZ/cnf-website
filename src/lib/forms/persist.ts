import fs from "node:fs/promises";
import path from "node:path";

export type SubmissionKind =
  | "donate-intent"
  | "partnership"
  | "volunteer"
  | "careers-newsletter"
  | "careers-profile";

export async function appendSubmission(
  kind: SubmissionKind,
  payload: Record<string, unknown>,
): Promise<void> {
  const dir = path.join(process.cwd(), "data");
  await fs.mkdir(dir, { recursive: true });
  const line =
    JSON.stringify({
      ts: new Date().toISOString(),
      kind,
      payload,
    }) + "\n";
  await fs.appendFile(path.join(dir, `submissions-${kind}.log.jsonl`), line, "utf8");
}
