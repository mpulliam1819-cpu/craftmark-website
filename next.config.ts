import type { NextConfig } from "next";
import { appendFileSync, existsSync } from "fs";
import { join } from "path";

// #region agent log
(() => {
  const root = process.cwd();
  const logPath = join(root, "debug-8e94d5.log");
  const payload = {
    sessionId: "8e94d5",
    runId: "config-load",
    hypothesisId: "A",
    location: "next.config.ts:probe",
    message: "Webpack server chunk path probe",
    timestamp: Date.now(),
    data: {
      cwd: root,
      server331: existsSync(join(root, ".next", "server", "331.js")),
      chunks331: existsSync(join(root, ".next", "server", "chunks", "331.js")),
      webpackRuntime: existsSync(join(root, ".next", "server", "webpack-runtime.js")),
    },
  };
  try {
    appendFileSync(logPath, `${JSON.stringify(payload)}\n`);
  } catch {
    /* ignore */
  }
  fetch("http://127.0.0.1:7908/ingest/d40e6728-d5ef-4ac3-b960-784a5369a887", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "8e94d5" },
    body: JSON.stringify(payload),
  }).catch(() => {});
})();
// #endregion

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
