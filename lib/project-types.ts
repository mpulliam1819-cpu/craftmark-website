// #region agent log
fetch("http://127.0.0.1:7908/ingest/d40e6728-d5ef-4ac3-b960-784a5369a887", {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f5fbdf" },
  body: JSON.stringify({
    sessionId: "f5fbdf",
    runId: "repro-2",
    hypothesisId: "H2",
    location: "lib/project-types.ts:1",
    message: "project-types module loaded",
    data: {},
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

export type ProjectEntry = {
  id: string;
  projectName: string;
  category: string;
  caption: string;
  image: string;
  imagePosition?: string;
  completedAt?: string;
};

export function projectRowKey(p: ProjectEntry): string {
  // #region agent log
  fetch("http://127.0.0.1:7908/ingest/d40e6728-d5ef-4ac3-b960-784a5369a887", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f5fbdf" },
    body: JSON.stringify({
      sessionId: "f5fbdf",
      runId: "repro-2",
      hypothesisId: "H2",
      location: "lib/project-types.ts:24",
      message: "projectRowKey called",
      data: { id: p.id },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
  return p.id;
}
