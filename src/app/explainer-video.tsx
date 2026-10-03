"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Below-the-fold explainer player.
 *
 * - Nothing downloads until the player is near the viewport; the poster
 *   carries the story until then (and for reduced-motion / Save-Data).
 * - Plays muted and looped while on screen, pauses when scrolled away.
 * - Picks the 720p or 1080p MP4 from the rendered width × DPR.
 * - "Play with sound" restarts it unmuted with native controls.
 *
 * Re-cut: encode into /media/<slug>/v<N+1>/ and bump `base`, so the
 * immutable cache never serves a stale copy.
 */
export default function ExplainerVideo({
  base,
  label,
}: {
  base: string;
  label: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [withSound, setWithSound] = useState(false);

  useEffect(() => {
    const w = wrap.current;
    const v = vid.current;
    if (!w || !v) return;

    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    const quiet =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
      nav.connection?.saveData === true;

    const pickSrc = () => {
      if (v.src) return;
      const px = w.clientWidth * (window.devicePixelRatio || 1);
      v.src = `${base}/explainer-${px > 1400 ? "1080p" : "720p"}.mp4`;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (quiet && !withSound) return;
          pickSrc();
          v.play().catch(() => {});
        } else if (!v.paused) {
          v.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.25 },
    );
    io.observe(w);
    return () => io.disconnect();
  }, [base, withSound]);

  const playWithSound = () => {
    const v = vid.current;
    const w = wrap.current;
    if (!v || !w) return;
    if (!v.src) {
      const px = w.clientWidth * (window.devicePixelRatio || 1);
      v.src = `${base}/explainer-${px > 1400 ? "1080p" : "720p"}.mp4`;
    }
    setWithSound(true);
    v.muted = false;
    v.loop = false;
    v.controls = true;
    try {
      v.currentTime = 0;
    } catch {}
    v.play().catch(() => {});
  };

  return (
    <div
      ref={wrap}
      className="relative w-full aspect-video overflow-hidden rounded-xl border border-gray-700/60 bg-[#05070B] bg-cover bg-center"
      style={{ backgroundImage: `url(${base}/poster.webp)` }}
    >
      <video
        ref={vid}
        muted
        loop
        playsInline
        preload="none"
        poster={`${base}/poster.webp`}
        aria-label={label}
        onPlaying={() => setPlaying(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      />
      {!withSound && (
        <button
          type="button"
          onClick={playWithSound}
          className="absolute right-2 bottom-2 sm:right-3 sm:bottom-3 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-gray-700 bg-[#0A0E15]/85 px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-medium text-gray-100 backdrop-blur transition hover:border-cyan-400/50 hover:text-cyan-200"
        >
          <svg aria-hidden viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current">
            <path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z" />
          </svg>
          Play with sound
        </button>
      )}
    </div>
  );
}
