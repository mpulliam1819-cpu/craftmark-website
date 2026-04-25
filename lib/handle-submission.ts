import { notifyEmailStub } from "@/lib/email-stub";
import { createLead, createRemnantRequest } from "@/lib/sharepoint-stub";
import { saveLead } from "@/lib/storage";

export async function persistLeadForm(form: string, payload: Record<string, unknown>) {
  await saveLead(form, payload);
  await notifyEmailStub(`Craftmark: ${form}`, JSON.stringify(payload, null, 2));
  await createLead(payload);
}

export async function persistRemnantRequest(payload: Record<string, unknown>) {
  await saveLead("remnant-request", payload);
  await notifyEmailStub("Craftmark: remnant request", JSON.stringify(payload, null, 2));
  await createRemnantRequest(payload);
}
