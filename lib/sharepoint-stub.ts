/**
 * SharePoint / CRM adapter stub — swap implementation without changing routes.
 * Never hardcode credentials; read from environment variables.
 */

export interface SharePointConfig {
  siteUrl: string | undefined;
  listIdLeads: string | undefined;
  listIdRemnants: string | undefined;
}

export function readSharePointEnv(): SharePointConfig {
  return {
    siteUrl: process.env.SHAREPOINT_SITE_URL,
    listIdLeads: process.env.SHAREPOINT_LIST_LEADS_ID,
    listIdRemnants: process.env.SHAREPOINT_LIST_REMNANTS_ID,
  };
}

export async function createLead(_payload: Record<string, unknown>): Promise<void> {
  const cfg = readSharePointEnv();
  if (!cfg.siteUrl || !cfg.listIdLeads) {
    if (process.env.NODE_ENV === "development") {
      console.info("[sharepoint stub] createLead skipped — env not configured");
    }
    return;
  }
  // Future: Microsoft Graph create item on listIdLeads
}

export async function createRemnantRequest(_payload: Record<string, unknown>): Promise<void> {
  const cfg = readSharePointEnv();
  if (!cfg.siteUrl || !cfg.listIdRemnants) {
    if (process.env.NODE_ENV === "development") {
      console.info("[sharepoint stub] createRemnantRequest skipped — env not configured");
    }
    return;
  }
  // Future: Microsoft Graph create item on listIdRemnants
}
