"use client";

import { useEffect, useState } from "react";

const edgeProfiles = [
  {
    id: "straight",
    name: "Straight",
    tier: "Standard",
    shape: "straight",
    realStoneImageSrc: "/images/edge-profiles/closeups/straight-closeup.svg",
    realStoneImageAlt: "Close-up of a straight edge profile in natural stone",
  },
  {
    id: "eased",
    name: "Eased",
    tier: "Standard",
    shape: "quarterRound",
    realStoneImageSrc: "/images/edge-profiles/closeups/eased-closeup.svg",
    realStoneImageAlt: "Close-up of an eased edge profile in natural stone",
  },
  {
    id: "quarter-bevel",
    name: "Quarter Bevel",
    tier: "Standard",
    shape: "quarterBevel",
    realStoneImageSrc: "/images/edge-profiles/closeups/quarter-bevel-closeup.svg",
    realStoneImageAlt: "Close-up of a quarter bevel edge profile in natural stone",
  },
  {
    id: "roundover",
    name: "Roundover",
    tier: "Premium",
    shape: "halfBullnose",
    realStoneImageSrc: "/images/edge-profiles/closeups/roundover-closeup.svg",
    realStoneImageAlt: "Close-up of a roundover edge profile in natural stone",
  },
  {
    id: "half-bevel",
    name: "Half Bevel",
    tier: "Premium",
    shape: "halfBevel",
    realStoneImageSrc: "/images/edge-profiles/closeups/half-bevel-closeup.svg",
    realStoneImageAlt: "Close-up of a half bevel edge profile in natural stone",
  },
  {
    id: "full-bullnose",
    name: "Full Bullnose",
    tier: "Premium",
    shape: "fullBullnose",
    realStoneImageSrc: "/images/edge-profiles/closeups/full-bullnose-closeup.svg",
    realStoneImageAlt: "Close-up of a full bullnose edge profile in natural stone",
  },
  {
    id: "demi-bullnose",
    name: "Demi Bullnose",
    tier: "Premium",
    shape: "demiBullnose",
    realStoneImageSrc: "/images/edge-profiles/closeups/demi-bullnose-closeup.svg",
    realStoneImageAlt: "Close-up of a demi bullnose edge profile in natural stone",
  },
  {
    id: "bevel-tb",
    name: "Bevel T&B",
    tier: "Premium",
    shape: "bevelTB",
    realStoneImageSrc: "/images/edge-profiles/closeups/bevel-tb-closeup.svg",
    realStoneImageAlt: "Close-up of a top and bottom bevel edge profile in natural stone",
  },
  {
    id: "dupont",
    name: "Dupont",
    tier: "Premium",
    shape: "dupont",
    realStoneImageSrc: "/images/edge-profiles/closeups/dupont-closeup.svg",
    realStoneImageAlt: "Close-up of a Dupont edge profile in natural stone",
  },
  {
    id: "ogee",
    name: "Ogee",
    tier: "Premium",
    shape: "ogee",
    realStoneImageSrc: "/images/edge-profiles/closeups/ogee-closeup.svg",
    realStoneImageAlt: "Close-up of an ogee edge profile in natural stone",
  },
  {
    id: "cove-dupont",
    name: "Cove Dupont",
    tier: "Premium",
    shape: "coveDupont",
    realStoneImageSrc: "/images/edge-profiles/closeups/cove-dupont-closeup.svg",
    realStoneImageAlt: "Close-up of a cove Dupont edge profile in natural stone",
  },
  {
    id: "waterfall",
    name: "Waterfall",
    tier: "Premium",
    shape: "waterfall",
    realStoneImageSrc: "/images/edge-profiles/closeups/waterfall-closeup.svg",
    realStoneImageAlt: "Close-up of a waterfall edge profile in natural stone",
  },
] as const;

type EdgeProfile = (typeof edgeProfiles)[number];
type EdgeShapeType = EdgeProfile["shape"];

function EdgeShape({ shape }: { shape: EdgeShapeType }) {
  const stroke = "#1F4E79";
  const common = { fill: "none", stroke, strokeWidth: 2.2, strokeLinejoin: "round" as const };

  switch (shape) {
    case "straight":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h100v40H8z" {...common} />
        </svg>
      );
    case "quarterRound":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h90a10 10 0 0 1 10 10v30H8z" {...common} />
        </svg>
      );
    case "quarterBevel":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h78l22 16v24H8z" {...common} />
        </svg>
      );
    case "halfBullnose":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h82a18 18 0 0 1 18 18v22H8z" {...common} />
        </svg>
      );
    case "halfBevel":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h78l22 22v18H8z" {...common} />
        </svg>
      );
    case "fullBullnose":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h68a20 20 0 0 1 0 40H8z" {...common} />
        </svg>
      );
    case "demiBullnose":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h74a18 18 0 0 1 18 18v22H8z" {...common} />
        </svg>
      );
    case "bevelTB":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h80l16 12v16l-16 12H8z" {...common} />
        </svg>
      );
    case "dupont":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h70v14h8a22 22 0 0 1 22 22v4H8z" {...common} />
        </svg>
      );
    case "ogee":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h66v10c0 8 6 14 14 14s14 6 14 14v2H8z" {...common} />
        </svg>
      );
    case "coveDupont":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h74v9h10a14 14 0 0 1 14 14v13H8z" {...common} />
        </svg>
      );
    case "waterfall":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h72v10h10v8h10v18H8z" {...common} />
        </svg>
      );
  }
}

function EdgeGroup({
  title,
  edges,
  onSelect,
}: {
  title: string;
  edges: EdgeProfile[];
  onSelect: (edge: EdgeProfile) => void;
}) {
  return (
    <div className="mt-10">
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-craftmark-navy">{title}</h3>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {edges.map((edge) => (
          <li key={edge.name}>
            <button
              type="button"
              onClick={() => onSelect(edge)}
              className="w-full rounded-lg border border-craftmark-line bg-craftmark-surface p-4 text-left transition hover:border-craftmark-navyLight"
              aria-label={`View ${edge.name} edge profile details`}
            >
              <div className="flex h-16 items-center">
                <EdgeShape shape={edge.shape} />
              </div>
              <p className="mt-3 text-sm font-semibold text-craftmark-text">{edge.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EdgeProfilesCatalog() {
  const [activeEdge, setActiveEdge] = useState<EdgeProfile | null>(null);

  useEffect(() => {
    if (!activeEdge) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveEdge(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeEdge]);

  const standard = edgeProfiles.filter((edge) => edge.tier === "Standard");
  const premium = edgeProfiles.filter((edge) => edge.tier === "Premium");

  return (
    <>
      <EdgeGroup title="Standard edge profiles" edges={standard} onSelect={setActiveEdge} />
      <EdgeGroup title="Premium edge profiles" edges={premium} onSelect={setActiveEdge} />

      {activeEdge ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeEdge.name} edge profile details`}
          onClick={() => setActiveEdge(null)}
        >
          <div
            className="w-full max-w-5xl overflow-auto rounded-lg border border-craftmark-line bg-white p-5 shadow-xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-craftmark-navy">
                  {activeEdge.tier} edge profile
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-craftmark-text">{activeEdge.name}</h3>
              </div>
              <button
                type="button"
                className="rounded-md px-2 py-1 text-sm text-craftmark-muted hover:bg-craftmark-surface"
                onClick={() => setActiveEdge(null)}
              >
                Close
              </button>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-craftmark-line bg-craftmark-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-craftmark-navy">
                  Profile diagram
                </p>
                <div className="mt-3 flex h-28 items-center justify-center rounded-md bg-white">
                  <EdgeShape shape={activeEdge.shape} />
                </div>
              </div>
              <div className="rounded-lg border border-craftmark-line bg-craftmark-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-craftmark-navy">
                  Real stone reference
                </p>
                <div className="relative mt-3 aspect-[3/2] overflow-hidden rounded-md bg-white">
                  {/* Keep filenames stable for zero-code asset replacement with production photos. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeEdge.realStoneImageSrc}
                    alt={activeEdge.realStoneImageAlt}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
