import { mkdir, writeFile } from "fs/promises";
import path from "path";
import type { LeadPayload, SubmissionAdapter } from "./types";

function canUseFileStorage(): boolean {
  if (process.env.SUBMISSIONS_DISABLE_FILE === "1") return false;
  return process.env.NODE_ENV === "development" || process.env.SUBMISSIONS_FILE === "1";
}

export class FileSubmissionAdapter implements SubmissionAdapter {
  async saveLead(form: string, payload: LeadPayload): Promise<void> {
    if (!canUseFileStorage()) return;
    const dir = path.join(process.cwd(), "data", "submissions");
    await mkdir(dir, { recursive: true });
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const file = path.join(dir, `${form}-${id}.json`);
    const body = JSON.stringify(
      { form, receivedAt: new Date().toISOString(), payload },
      null,
      2,
    );
    await writeFile(file, body, "utf8");
  }
}
