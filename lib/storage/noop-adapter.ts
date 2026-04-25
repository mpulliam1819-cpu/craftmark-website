import type { LeadPayload, SubmissionAdapter } from "./types";

export class NoopSubmissionAdapter implements SubmissionAdapter {
  async saveLead(_form: string, _payload: LeadPayload): Promise<void> {
    /* intentionally empty — production can swap to CRM/email-only */
  }
}
