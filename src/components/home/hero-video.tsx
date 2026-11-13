"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";
const subscribe = (onChange: () => void) => {
  const mq = matchMedia(query);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

/**
 * The looping hero video. Plays muted and inline; with reduced motion it shows only the poster.
 * The static HTML renders the poster-only version, so nothing plays before we know the preference.
 */
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const reduced = useSyncExternalStore(subscribe, () => matchMedia(query).matches, () => true);
  return (
    <video
      // A new element when the preference changes, so autoplay starts (or stops) cleanly.
      key={reduced ? "still" : "playing"}
      src={src}
      poster={poster}
      autoPlay={!reduced}
      loop
      muted
      playsInline
      preload={reduced ? "none" : "auto"}
      aria-hidden="true"
    />
  );
}
