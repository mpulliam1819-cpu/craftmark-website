import type { ProjectEntry } from "@/lib/project-types";
import Link from "next/link";

type ProjectImageStripProps = {
  projects: ProjectEntry[];
  title?: string;
  subtitle?: string;
  category?: string;
  count?: number;
  offset?: number;
  ctaHref?: string;
  ctaLabel?: string;
};

export function ProjectImageStrip({
  projects,
  title = "Completed project highlights",
  subtitle = "A quick look at recent work across kitchen, bath, and large-scope projects.",
  category,
  count = 3,
  offset = 0,
  ctaHref = "/projects",
  ctaLabel = "View all projects",
}: ProjectImageStripProps) {
  // #region agent log
  fetch("http://127.0.0.1:7908/ingest/d40e6728-d5ef-4ac3-b960-784a5369a887", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f5fbdf" },
    body: JSON.stringify({
      sessionId: "f5fbdf",
      runId: "repro-1",
      hypothesisId: "H1",
      location: "components/ProjectImageStrip.tsx:24",
      message: "ProjectImageStrip rendered",
      data: { projectsCount: projects.length, category, count, offset },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
  const source = category ? projects.filter((p) => p.category === category) : projects;
  if (!source.length) {
    // #region agent log
    fetch("http://127.0.0.1:7908/ingest/d40e6728-d5ef-4ac3-b960-784a5369a887", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "f5fbdf" },
      body: JSON.stringify({
        sessionId: "f5fbdf",
        runId: "repro-1",
        hypothesisId: "H4",
        location: "components/ProjectImageStrip.tsx:39",
        message: "ProjectImageStrip source empty",
        data: { category, projectsCount: projects.length },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
    return null;
  }

  const rows = Array.from({ length: count }, (_, index) => source[(offset + index) % source.length]);
  const tilt = ["sm:rotate-[-1deg]", "sm:rotate-[1deg]", "sm:rotate-[-0.5deg]", "sm:rotate-[0.5deg]"];

  return (
    <section className="border-t border-craftmark-line bg-craftmark-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-craftmark-text">{title}</h2>
            <p className="mt-2 max-w-3xl text-sm text-craftmark-muted">{subtitle}</p>
          </div>
          <Link
            href={ctaHref}
            className="text-sm font-semibold text-craftmark-navy hover:text-craftmark-navyLight"
          >
            {ctaLabel}
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((p, index) => (
            <figure
              key={`${p.id}-${index}`}
              className={`rounded-lg border border-craftmark-line bg-white p-2 shadow-sm transition ${tilt[index % tilt.length]}`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-craftmark-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.caption} className="h-full w-full object-cover" />
              </div>
              <figcaption className="p-3">
                <p className="text-xs font-semibold uppercase text-craftmark-navy">{p.category}</p>
                <p className="mt-1 text-sm font-semibold text-craftmark-text">{p.projectName}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
