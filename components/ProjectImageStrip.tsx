"use client";

import type { ProjectEntry } from "@/lib/project-types";
import Link from "next/link";
import { useEffect, useState } from "react";

type ProjectImageStripProps = {
  projects: ProjectEntry[];
  title?: string;
  subtitle?: string;
  /** When set, shows these projects in order (up to `count`). Overrides category/offset selection. */
  highlightIds?: string[];
  category?: string;
  count?: number;
  offset?: number;
  ctaHref?: string;
  ctaLabel?: string;
  containerClassName?: string;
};

export function ProjectImageStrip({
  projects,
  title = "Completed project highlights",
  subtitle = "A quick look at recent work across kitchen, bath, and large-scope projects.",
  highlightIds,
  category,
  count = 3,
  offset = 0,
  ctaHref = "/projects",
  ctaLabel = "View all projects",
  containerClassName,
}: ProjectImageStripProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const byId = new Map(projects.map((p) => [p.id, p]));
  const fromHighlights =
    highlightIds?.length ?
      highlightIds.map((id) => byId.get(id)).filter((p): p is ProjectEntry => Boolean(p))
    : null;

  const source =
    fromHighlights?.length ? fromHighlights
    : category ? projects.filter((p) => p.category === category)
    : projects;

  const rows =
    source.length ?
      (fromHighlights?.length ? source.slice(0, count)
      : Array.from({ length: count }, (_, index) => source[(offset + index) % source.length]))
    : [];
  const activeProject =
    activeIndex !== null && activeIndex >= 0 && activeIndex < rows.length ? rows[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  if (!source.length) return null;

  return (
    <section className="border-t border-craftmark-line bg-craftmark-surface">
      <div className={`mx-auto py-14 sm:py-16 ${containerClassName ?? "max-w-[100rem] px-4 sm:px-6 lg:px-8"}`}>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-craftmark-text sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-4xl text-base leading-relaxed text-craftmark-muted sm:text-lg">{subtitle}</p>
          </div>
          <Link
            href={ctaHref}
            className="text-base font-semibold text-craftmark-navy hover:text-craftmark-navyLight"
          >
            {ctaLabel}
          </Link>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {rows.map((p, index) => (
            <button
              type="button"
              key={`${p.id}-${index}`}
              onClick={() => setActiveIndex(index)}
              className="rounded-lg border border-craftmark-line bg-white p-3 text-left shadow-sm transition hover:border-craftmark-navyLight"
            >
              <div className="aspect-[5/4] overflow-hidden rounded-md bg-craftmark-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.caption}
                  className="h-full w-full object-cover"
                  style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase text-craftmark-navy">{p.category}</p>
                <p className="mt-1 text-lg font-semibold leading-snug text-craftmark-text">{p.projectName}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {activeProject ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Project image preview"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-lg border border-craftmark-line bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-craftmark-line p-4 sm:p-5">
              <div>
                <p className="text-xs font-semibold uppercase text-craftmark-navy">{activeProject.category}</p>
                <h3 className="mt-1 text-xl font-semibold text-craftmark-text sm:text-2xl">
                  {activeProject.projectName}
                </h3>
                <p className="mt-2 text-sm text-craftmark-muted">{activeProject.caption}</p>
              </div>
              <button
                type="button"
                className="rounded-md px-2 py-1 text-sm text-craftmark-muted hover:bg-craftmark-surface"
                onClick={() => setActiveIndex(null)}
              >
                Close
              </button>
            </div>
            <div className="max-h-[78vh] bg-craftmark-surface p-2 sm:p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeProject.image}
                alt={activeProject.caption}
                className="h-full max-h-[72vh] w-full rounded-md object-contain"
                style={activeProject.imagePosition ? { objectPosition: activeProject.imagePosition } : undefined}
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
