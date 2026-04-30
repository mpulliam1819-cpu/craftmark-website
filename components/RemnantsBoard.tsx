"use client";

import type { RemnantEntry } from "@/lib/remnant-types";
import Link from "next/link";
import { useMemo, useState } from "react";

export function RemnantsBoard({ items }: { items: RemnantEntry[] }) {
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [thickness, setThickness] = useState("");
  const [minSize, setMinSize] = useState("");

  const materials = useMemo(() => [...new Set(items.map((i) => i.material))].sort(), [items]);
  const thicknesses = useMemo(() => [...new Set(items.map((i) => i.thickness))].sort(), [items]);

  const filtered = useMemo(() => {
    return items.filter((r) => {
      if (material && r.material !== material) return false;
      if (thickness && r.thickness !== thickness) return false;
      if (color && !r.colorName.toLowerCase().includes(color.toLowerCase())) return false;
      if (minSize) {
        const hay = `${r.size}`.toLowerCase();
        if (!hay.includes(minSize.toLowerCase())) return false;
      }
      return true;
    });
  }, [items, material, thickness, color, minSize]);

  return (
    <div className="mx-auto max-w-[80rem] px-4 py-10 sm:px-6">
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
        Remnant availability changes quickly. Submit a request and our team will confirm what is
        available for your job.
      </div>

      <div className="mt-8 grid gap-4 rounded-lg border border-craftmark-line bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
        <FilterSelect label="Material" value={material} onChange={setMaterial} options={materials} />
        <div>
          <label className="text-xs font-semibold uppercase text-craftmark-muted">Color contains</label>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-sm"
            placeholder="e.g. White"
          />
        </div>
        <FilterSelect
          label="Thickness"
          value={thickness}
          onChange={setThickness}
          options={thicknesses}
        />
        <div>
          <label className="text-xs font-semibold uppercase text-craftmark-muted">Size contains</label>
          <input
            value={minSize}
            onChange={(e) => setMinSize(e.target.value)}
            className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-sm"
            placeholder="e.g. 96"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <Link
          href="/remnants/request"
          className="inline-flex rounded-md bg-craftmark-navy px-5 py-3 text-sm font-semibold text-white hover:bg-craftmark-navyLight"
        >
          Request remnant
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r) => (
          <article
            key={r.remnantId}
            className="overflow-hidden rounded-lg border border-craftmark-line bg-white shadow-sm"
          >
            <div className="aspect-[4/3] bg-craftmark-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.photoUrl} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-craftmark-muted">{r.remnantId}</p>
              <h2 className="mt-1 text-lg font-semibold text-craftmark-text">{r.colorName}</h2>
              <p className="text-sm text-craftmark-muted">
                {r.material} · {r.thickness} · {r.finish}
              </p>
              <p className="mt-2 text-sm text-craftmark-text">Size: {r.size}</p>
              <p className="text-sm text-craftmark-muted">
                {r.location} · {r.status} · Updated {r.lastUpdated}
              </p>
              <Link
                href={`/remnants/request?material=${encodeURIComponent(r.material)}&colorName=${encodeURIComponent(r.colorName)}`}
                className="mt-4 inline-block text-sm font-semibold text-craftmark-navy hover:underline"
              >
                Request this color family
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase text-craftmark-muted">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-sm"
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

