"use client";

import { colorRowKey, primarySwatchImage, type ColorEntry } from "@/lib/color-types";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function buildQuoteHref(c: ColorEntry): string {
  const p = new URLSearchParams();
  p.set("material", c.material);
  p.set("colorName", c.colorName);
  if (c.brand) p.set("brand", c.brand);
  return `/quote-request?${p.toString()}`;
}

function buildRemnantHref(c: ColorEntry): string {
  const p = new URLSearchParams();
  p.set("material", c.material);
  p.set("colorName", c.colorName);
  if (c.brand) p.set("brand", c.brand);
  return `/remnants/request?${p.toString()}`;
}

export function ColorExplorer({ colors }: { colors: ColorEntry[] }) {
  const [material, setMaterial] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [q, setQ] = useState("");
  const [active, setActive] = useState<ColorEntry | null>(null);
  const [activeView, setActiveView] = useState<"swatch" | "slab">("slab");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!active) return;
    const hasSlabs = (active.slabImages?.length ?? 0) > 0;
    const hasSwatches = (active.swatchImages?.length ?? 0) > 0;
    if (hasSlabs) setActiveView("slab");
    else if (hasSwatches) setActiveView("swatch");
    else setActiveView("slab");
    setActiveImageIndex(0);
  }, [active]);

  useEffect(() => {
    if (material && material !== "Quartz") setBrand("");
  }, [material]);

  const materials = useMemo(() => {
    const s = new Set(colors.map((c) => c.material));
    return [...s].sort();
  }, [colors]);

  const brands = useMemo(() => {
    const s = new Set(colors.map((c) => c.brand).filter(Boolean) as string[]);
    return [...s].sort((a, b) => a.localeCompare(b));
  }, [colors]);

  const tags = useMemo(() => {
    const s = new Set(colors.flatMap((c) => c.tags));
    return [...s].sort();
  }, [colors]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return colors.filter((c) => {
      if (material && c.material !== material) return false;
      if (brand && c.brand !== brand) return false;
      if (tag && !c.tags.includes(tag)) return false;
      if (needle) {
        const inName = c.colorName.toLowerCase().includes(needle);
        const inBrand = (c.brand ?? "").toLowerCase().includes(needle);
        if (!inName && !inBrand) return false;
      }
      return true;
    });
  }, [colors, material, brand, tag, q]);

  const activeImages = useMemo(() => {
    if (!active) return [];
    if (activeView === "swatch") return active.swatchImages?.length ? active.swatchImages : [active.image];
    return active.slabImages?.length ? active.slabImages : [active.image];
  }, [active, activeView]);

  const activeImageSrc = activeImages[activeImageIndex] ?? active?.image ?? "";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-4 rounded-lg border border-craftmark-line bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="text-xs font-semibold uppercase text-craftmark-muted">Material</label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-sm"
          >
            <option value="">All</option>
            {materials.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-craftmark-muted">Brand (quartz)</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-sm"
          >
            <option value="">All</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {material === "Quartz" ? (
            <p className="mt-1 text-xs text-craftmark-muted">Narrow by quartz line.</p>
          ) : null}
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-craftmark-muted">Color family</label>
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-sm"
          >
            <option value="">All</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-craftmark-muted">Search</label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Color or brand"
            className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <button
            type="button"
            key={colorRowKey(c)}
            onClick={() => setActive(c)}
            className="group rounded-lg border border-craftmark-line bg-white text-left shadow-sm transition hover:border-craftmark-navyLight"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-craftmark-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={primarySwatchImage(c)}
                alt=""
                className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase text-craftmark-navy">{c.material}</p>
              {c.brand ? (
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-craftmark-muted">
                  {c.brand}
                </p>
              ) : null}
              <p className="mt-1 text-lg font-semibold text-craftmark-text">{c.colorName}</p>
              <p className="mt-1 text-sm text-craftmark-muted">
                {c.finish} · {c.thicknessOptions.join(", ")}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Color details"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-lg bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase text-craftmark-navy">{active.material}</p>
                {active.brand ? (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-craftmark-muted">
                    {active.brand}
                  </p>
                ) : null}
                <h2 className="mt-1 text-2xl font-semibold text-craftmark-text">{active.colorName}</h2>
                <p className="mt-2 text-sm text-craftmark-muted">
                  {active.finish} · {active.thicknessOptions.join(", ")}
                </p>
                <p className="mt-2 text-sm text-craftmark-muted">Tags: {active.tags.join(", ")}</p>
              </div>
              <button
                type="button"
                className="rounded-md px-2 py-1 text-sm text-craftmark-muted hover:bg-craftmark-surface"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(null);
                }}
              >
                Close
              </button>
            </div>
            <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-md bg-craftmark-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={activeImageSrc} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                  activeView === "swatch"
                    ? "bg-craftmark-navy text-white"
                    : "border border-craftmark-line text-craftmark-text hover:bg-craftmark-surface"
                }`}
                onClick={() => {
                  setActiveView("swatch");
                  setActiveImageIndex(0);
                }}
              >
                Swatches
              </button>
              <button
                type="button"
                className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                  activeView === "slab"
                    ? "bg-craftmark-navy text-white"
                    : "border border-craftmark-line text-craftmark-text hover:bg-craftmark-surface"
                }`}
                onClick={() => {
                  setActiveView("slab");
                  setActiveImageIndex(0);
                }}
              >
                Full Slabs
              </button>
            </div>
            {activeImages.length > 1 ? (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {activeImages.map((img, index) => (
                  <button
                    key={`${img}-${index}`}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`overflow-hidden rounded-md border ${
                      index === activeImageIndex
                        ? "border-craftmark-navy"
                        : "border-craftmark-line hover:border-craftmark-navyLight"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="" className="h-16 w-full object-cover" />
                  </button>
                ))}
              </div>
            ) : null}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={buildQuoteHref(active)}
                className="inline-flex flex-1 items-center justify-center rounded-md bg-craftmark-navy px-4 py-3 text-sm font-semibold text-white hover:bg-craftmark-navyLight"
              >
                Request Quote
              </Link>
              <Link
                href={buildRemnantHref(active)}
                className="inline-flex flex-1 items-center justify-center rounded-md border border-craftmark-navy px-4 py-3 text-sm font-semibold text-craftmark-navy hover:bg-craftmark-surface"
              >
                Check Remnants
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
