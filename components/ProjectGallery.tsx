"use client";

import { projectRowKey, type ProjectEntry } from "@/lib/project-types";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type ProjectGalleryProps = {
  projects: ProjectEntry[];
  showFilters?: boolean;
  limit?: number;
  ctaHref?: string;
  ctaLabel?: string;
};

export function ProjectGallery({
  projects,
  showFilters = true,
  limit,
  ctaHref,
  ctaLabel,
}: ProjectGalleryProps) {
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 3;
  const ZOOM_STEP = 0.25;

  const [category, setCategory] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [q, setQ] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const panStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const imageViewportRef = useRef<HTMLDivElement | null>(null);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return [...set].sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const projectNames = useMemo(() => {
    const set = new Set(projects.map((p) => p.projectName));
    return [...set].sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const rows = projects.filter((p) => {
      if (category && p.category !== category) return false;
      if (projectName && p.projectName !== projectName) return false;
      if (!needle) return true;
      const inProject = p.projectName.toLowerCase().includes(needle);
      const inCaption = p.caption.toLowerCase().includes(needle);
      const inCategory = p.category.toLowerCase().includes(needle);
      return inProject || inCaption || inCategory;
    });
    return limit ? rows.slice(0, limit) : rows;
  }, [projects, category, projectName, q, limit]);

  const activeProject =
    activeIndex !== null && activeIndex >= 0 && activeIndex < filtered.length
      ? filtered[activeIndex]
      : null;

  const clampPan = (nextPan: { x: number; y: number }, nextZoom: number) => {
    const viewport = imageViewportRef.current;
    const width = viewport?.clientWidth ?? 640;
    const height = viewport?.clientHeight ?? 400;
    const maxOffsetX = ((nextZoom - 1) * width) / 2;
    const maxOffsetY = ((nextZoom - 1) * height) / 2;
    if (nextZoom <= 1) return { x: 0, y: 0 };
    return {
      x: Math.max(-maxOffsetX, Math.min(maxOffsetX, nextPan.x)),
      y: Math.max(-maxOffsetY, Math.min(maxOffsetY, nextPan.y)),
    };
  };

  const resetZoomPan = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
    dragStart.current = null;
  };

  useEffect(() => {
    if (activeIndex !== null) resetZoomPan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }
      if (!filtered.length) return;
      if (event.key === "ArrowRight") {
        resetZoomPan();
        setActiveIndex((prev) => {
          if (prev === null) return null;
          return (prev + 1) % filtered.length;
        });
      }
      if (event.key === "ArrowLeft") {
        resetZoomPan();
        setActiveIndex((prev) => {
          if (prev === null) return null;
          return (prev - 1 + filtered.length) % filtered.length;
        });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, filtered]);

  return (
    <div>
      {showFilters ? (
        <div className="grid gap-4 rounded-lg border border-craftmark-line bg-white p-4 sm:grid-cols-3">
          <div>
            <label className="text-xs font-semibold uppercase text-craftmark-muted">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-sm"
            >
              <option value="">All</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase text-craftmark-muted">Project</label>
            <select
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-sm"
            >
              <option value="">All</option>
              {projectNames.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase text-craftmark-muted">Search</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Project or caption"
              className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-sm"
            />
          </div>
        </div>
      ) : null}

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p, index) => (
          <button
            type="button"
            key={projectRowKey(p)}
            onClick={() => setActiveIndex(index)}
            className="flex h-full flex-col rounded-lg border border-craftmark-line bg-white text-left shadow-sm transition hover:border-craftmark-navyLight"
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-t-lg bg-craftmark-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.caption}
                className="h-full w-full object-cover"
                style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold uppercase text-craftmark-navy">{p.category}</p>
              <h3 className="mt-1 min-h-[3.5rem] text-xl font-semibold leading-snug text-craftmark-text">
                {p.projectName}
              </h3>
              <p className="mt-2 min-h-[3.75rem] text-base leading-relaxed text-craftmark-muted">{p.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {activeProject ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Project image preview"
          onClick={() => {
            setActiveIndex(null);
            resetZoomPan();
          }}
        >
          <div
            className="max-h-[96vh] w-[96vw] max-w-[1200px] overflow-auto rounded-lg bg-white p-4 shadow-xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase text-craftmark-navy">
                  {activeProject.category}
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-craftmark-text">
                  {activeProject.projectName}
                </h2>
                <p className="mt-2 text-sm text-craftmark-muted">{activeProject.caption}</p>
              </div>
              <button
                type="button"
                className="rounded-md px-2 py-1 text-sm text-craftmark-muted hover:bg-craftmark-surface"
                onClick={() => {
                  setActiveIndex(null);
                  resetZoomPan();
                }}
              >
                Close
              </button>
            </div>

            <div
              ref={imageViewportRef}
              className={`relative mt-4 h-[62vh] w-full overflow-hidden rounded-md bg-craftmark-surface ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
              onWheel={(e) => {
                e.preventDefault();
                const delta = e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
                const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number((zoom + delta).toFixed(2))));
                setZoom(nextZoom);
                setPan((prev) => clampPan(prev, nextZoom));
              }}
              onMouseDown={(e) => {
                if (zoom <= 1) return;
                setIsDragging(true);
                dragStart.current = { x: e.clientX, y: e.clientY };
                panStart.current = { ...pan };
              }}
              onMouseMove={(e) => {
                if (!isDragging || !dragStart.current || zoom <= 1) return;
                const deltaX = e.clientX - dragStart.current.x;
                const deltaY = e.clientY - dragStart.current.y;
                const nextPan = {
                  x: panStart.current.x + deltaX,
                  y: panStart.current.y + deltaY,
                };
                setPan(clampPan(nextPan, zoom));
              }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchStart={(e) => {
                if (zoom <= 1) return;
                const touch = e.touches[0];
                setIsDragging(true);
                dragStart.current = { x: touch.clientX, y: touch.clientY };
                panStart.current = { ...pan };
              }}
              onTouchMove={(e) => {
                if (!isDragging || !dragStart.current || zoom <= 1) return;
                const touch = e.touches[0];
                const deltaX = touch.clientX - dragStart.current.x;
                const deltaY = touch.clientY - dragStart.current.y;
                const nextPan = {
                  x: panStart.current.x + deltaX,
                  y: panStart.current.y + deltaY,
                };
                setPan(clampPan(nextPan, zoom));
              }}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeProject.image}
                alt={activeProject.caption}
                className="h-full w-full object-contain transition-transform duration-150"
                style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="rounded-md border border-craftmark-line px-3 py-2 text-sm font-semibold text-craftmark-text hover:bg-craftmark-surface disabled:opacity-50"
                  onClick={() => {
                    const nextZoom = Math.max(MIN_ZOOM, Number((zoom - ZOOM_STEP).toFixed(2)));
                    setZoom(nextZoom);
                    setPan((prev) => clampPan(prev, nextZoom));
                  }}
                  disabled={zoom <= MIN_ZOOM}
                >
                  -
                </button>
                <button
                  type="button"
                  className="rounded-md border border-craftmark-line px-3 py-2 text-sm font-semibold text-craftmark-text hover:bg-craftmark-surface disabled:opacity-50"
                  onClick={() => {
                    const nextZoom = Math.min(MAX_ZOOM, Number((zoom + ZOOM_STEP).toFixed(2)));
                    setZoom(nextZoom);
                    setPan((prev) => clampPan(prev, nextZoom));
                  }}
                  disabled={zoom >= MAX_ZOOM}
                >
                  +
                </button>
                <button
                  type="button"
                  className="rounded-md border border-craftmark-line px-3 py-2 text-sm font-semibold text-craftmark-text hover:bg-craftmark-surface"
                  onClick={resetZoomPan}
                >
                  Reset
                </button>
                <p className="text-xs text-craftmark-muted">Zoom {(zoom * 100).toFixed(0)}%</p>
              </div>
              <p className="text-xs text-craftmark-muted">
                Use mouse wheel to zoom. Drag to pan when zoomed.
              </p>

              {filtered.length > 1 ? (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="rounded-md border border-craftmark-line px-3 py-2 text-sm font-semibold text-craftmark-text hover:bg-craftmark-surface"
                    onClick={() => {
                      resetZoomPan();
                      setActiveIndex((prev) => {
                        if (prev === null) return null;
                        return (prev - 1 + filtered.length) % filtered.length;
                      });
                    }}
                  >
                    Previous
                  </button>
                  <p className="text-xs text-craftmark-muted">
                    {activeIndex !== null ? activeIndex + 1 : 1} of {filtered.length}
                  </p>
                  <button
                    type="button"
                    className="rounded-md border border-craftmark-line px-3 py-2 text-sm font-semibold text-craftmark-text hover:bg-craftmark-surface"
                    onClick={() => {
                      resetZoomPan();
                      setActiveIndex((prev) => {
                        if (prev === null) return null;
                        return (prev + 1) % filtered.length;
                      });
                    }}
                  >
                    Next
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {ctaHref && ctaLabel ? (
        <div className="mt-8">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-md border border-craftmark-navy px-4 py-2 text-sm font-semibold text-craftmark-navy hover:bg-craftmark-surface"
          >
            {ctaLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

