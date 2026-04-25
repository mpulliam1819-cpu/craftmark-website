import { FileSubmissionAdapter } from "./file-adapter";
import { NoopSubmissionAdapter } from "./noop-adapter";
import type { SubmissionAdapter } from "./types";

let adapter: SubmissionAdapter | null = null;

export function getSubmissionAdapter(): SubmissionAdapter {
  if (!adapter) {
    adapter =
      process.env.NODE_ENV === "development" || process.env.SUBMISSIONS_FILE === "1"
        ? new FileSubmissionAdapter()
        : new NoopSubmissionAdapter();
  }
  return adapter;
}

export async function saveLead(form: string, payload: Record<string, unknown>) {
  await getSubmissionAdapter().saveLead(form, payload);
}
