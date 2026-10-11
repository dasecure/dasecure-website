"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

/**
 * "Add DaSecure as a preferred source on Google" button.
 *
 * Uses Google's Preferred Sources library in manual mode
 * (preferred-sources-control="manual") so the button matches the site
 * instead of Google injecting its own markup into a React-owned node.
 *
 * Degrades gracefully: it is a plain link to Google's source-preferences
 * deeplink, so it still works if the library is blocked or not loaded yet.
 * Once the library is ready, a click opens Google's in-page flow and returns
 * the reader to this page.
 *
 * Docs: https://developers.google.com/search/docs/appearance/preferred-sources
 */

type PreferredSource = {
  init: (opts: { theme?: "light" | "dark"; lang?: string }) => void;
  addPreferredSource: () => void;
};

// Before the library loads this is a plain array; afterwards Google swaps
// it for an object whose push() runs the callback immediately.
type PSQueue = { push: (fn: (ps: PreferredSource) => void) => unknown };

declare global {
  interface Window {
    PREFERRED_SOURCE?: PSQueue;
  }
}

const DEEPLINK = "https://www.google.com/preferences/source?q=dasecure.com";

export default function PreferredSourceButton() {
  const ps = useRef<PreferredSource | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const q: PSQueue = (window.PREFERRED_SOURCE =
      window.PREFERRED_SOURCE || ([] as Array<(ps: PreferredSource) => void>));
    q.push((lib: PreferredSource) => {
      try {
        lib.init({ theme: "dark" });
        ps.current = lib;
        setReady(true);
      } catch {
        /* keep the deeplink fallback */
      }
    });
  }, []);

  return (
    <>
      <Script
        src="https://news.google.com/swg/js/v1/publisher.js"
        strategy="afterInteractive"
        preferred-sources-control="manual"
      />
      <a
        href={DEEPLINK}
        target="_blank"
        rel="noopener"
        data-ready={ready ? "1" : "0"}
        data-track="preferred-source"
        onClick={(e) => {
          if (ps.current) {
            e.preventDefault();
            ps.current.addPreferredSource();
          }
        }}
        className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 hover:border-emerald-400 hover:text-white transition"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 text-emerald-400"
          fill="currentColor"
        >
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8L12 2.5z" />
        </svg>
        Add DaSecure as a preferred source on Google
      </a>
    </>
  );
}
