export type LeadPayload = Record<string, unknown>;

export interface SubmissionAdapter {
  saveLead(form: string, payload: LeadPayload): Promise<void>;
}
