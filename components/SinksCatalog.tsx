"use client";

import type { SinkProduct } from "@/data/sinks";
import { useEffect, useMemo, useState } from "react";

type SinksCatalogProps = {
  sinks: SinkProduct[];
};

export function SinksCatalog({ sinks }: SinksCatalogProps) {
  const [activeSink, setActiveSink] = useState<SinkProduct | null>(null);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!activeSink) return;
    setActiveColor(activeSink.colors?.[0]?.name ?? null);
    setActiveImageIndex(0);
  }, [activeSink]);

  const activeImages = useMemo(() => {
    if (!activeSink) return [];
    if (!activeColor) return activeSink.images;
    return activeSink.colors?.find((c) => c.name === activeColor)?.images ?? activeSink.images;
  }, [activeSink, activeColor]);

  const activeImage = activeImages[activeImageIndex] ?? activeSink?.images[0] ?? "";

  return (
    <>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sinks.map((sink) => (
          <button
            key={sink.id}
            type="button"
            onClick={() => setActiveSink(sink)}
            className="group rounded-lg border border-craftmark-line bg-white text-left shadow-sm transition hover:border-craftmark-navyLight"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-craftmark-surface p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sink.images[0]}
                alt={sink.name}
                className="h-full w-full object-contain opacity-95 transition group-hover:opacity-100"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-craftmark-navy">MAZI · {sink.material}</p>
              <p className="mt-1 text-lg font-semibold text-craftmark-text">{sink.name}</p>
              <p className="mt-1 text-sm text-craftmark-muted">Model {sink.model}</p>
              {sink.colors?.length ? (
                <p className="mt-2 text-xs font-medium text-craftmark-muted">
                  Colors: {sink.colors.map((c) => c.name).join(", ")}
                </p>
              ) : null}
            </div>
          </button>
        ))}
      </div>

      {activeSink ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Sink details"
          onClick={() => setActiveSink(null)}
        >
          <div
            className="max-h-[94vh] w-full max-w-5xl overflow-auto rounded-lg bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-craftmark-navy">
                  MAZI · {activeSink.material} · {activeSink.category}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-craftmark-text">{activeSink.name}</h3>
                <p className="mt-2 text-sm text-craftmark-muted">Model {activeSink.model}</p>
              </div>
              <button
                type="button"
                className="rounded-md px-2 py-1 text-sm text-craftmark-muted hover:bg-craftmark-surface"
                onClick={() => setActiveSink(null)}
              >
                Close
              </button>
            </div>

            {activeSink.colors?.length ? (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {activeSink.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => {
                      setActiveColor(color.name);
                      setActiveImageIndex(0);
                    }}
                    className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${
                      activeColor === color.name
                        ? "border-craftmark-navy bg-craftmark-navy text-white"
                        : "border-craftmark-line text-craftmark-text hover:bg-craftmark-surface"
                    }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            ) : null}

            <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-md bg-craftmark-surface p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={activeImage} alt={activeSink.name} className="h-full w-full object-contain" />
            </div>

            {activeImages.length > 1 ? (
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
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

            <p className="mt-5 text-base leading-relaxed text-craftmark-muted sm:text-lg">{activeSink.description}</p>

            <div className="mt-4">
              <p className="text-base font-semibold text-craftmark-text sm:text-lg">Highlights</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-base text-craftmark-muted sm:text-lg">
                {activeSink.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <p className="text-base font-semibold text-craftmark-text sm:text-lg">Technical information</p>
              <ul className="mt-2 space-y-1.5 text-base text-craftmark-muted sm:text-lg">
                {activeSink.technicalInfo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
