"use client";

import { useCallback, useRef } from "react";

const PLAYBACK_RATE = 0.85;

export function HomeownersHeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  const applySlowRate = useCallback(() => {
    const el = ref.current;
    if (el) {
      el.playbackRate = PLAYBACK_RATE;
    }
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl border border-craftmark-line bg-black shadow-sm">
      <video
        ref={ref}
        className="block w-full"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedMetadata={applySlowRate}
        onCanPlay={applySlowRate}
        onRateChange={applySlowRate}
      >
        <source src="/videos/homeowners-hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
