"use client";

import { SITE } from "@/lib/site";
import { useState } from "react";

export function HomepageLaunchPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 p-4" onClick={() => setIsOpen(false)}>
      <div
        className="relative h-[min(88vw,24rem)] w-[min(88vw,24rem)] overflow-hidden rounded-2xl border border-craftmark-line bg-white text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Welcome announcement"
      >
        <div className="relative flex h-full items-center justify-center bg-craftmark-surface/70 p-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/projects/Homepage-Project-6.jpg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-[2px]"
          />
          <div className="mx-auto w-[92%] rounded-xl border border-craftmark-line bg-white/95 px-6 py-4 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.logoPath} alt={SITE.name} className="mx-auto mb-4 h-14 w-auto sm:h-16" />
            <p className="mx-auto max-w-[19rem] text-[1.7rem] font-semibold leading-tight text-craftmark-navy sm:text-3xl">
              Who the Pros Have Trusted for 50 Years Is Now Open to the Public.
            </p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Close popup"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 rounded-md bg-white/90 px-2 py-1 text-sm font-semibold text-craftmark-navy hover:bg-white"
        >
          X
        </button>
      </div>
    </div>
  );
}
