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
  const source = category ? projects.filter((p) => p.category === category) : projects;
  if (!source.length) return null;

  const rows = Array.from({ length: count }, (_, index) => source[(offset + index) % source.length]);

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
              className="rounded-lg border border-craftmark-line bg-white p-2 shadow-sm transition"
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
