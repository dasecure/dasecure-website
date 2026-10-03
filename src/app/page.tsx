"use client";

import Link from "next/link";
import { useState } from "react";
import { faqs } from "./faq";
import { homeGraph, jsonLd } from "./structured-data";

/* ------------------------------------------------------------------ */
/* Flagship products — the sharpened focus                             */
/* ------------------------------------------------------------------ */

type Flagship = {
  name: string;
  icon?: string;
  emoji: string;
  layer: string;
  question: string;
  tagline: string;
  description: string;
  chips: string[];
  url: string;
  urlLabel: string;
  links: { label: string; href: string }[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  badge?: string;
  proof?: { text: string; href: string; cta: string };
  accent: {
    ring: string;
    chip: string;
    badge: string;
    link: string;
    glow: string;
    rule: string;
  };
};

const flagships: Flagship[] = [
  {
    name: "ZapQR",
    icon: "/zapqr-icon.svg",
    emoji: "⚡",
    layer: "Identity",
    question: "Who are you?",
    tagline: "The passwordless sign-in button for your site",
    description:
      "A hosted OIDC identity provider. Drop “Sign in with ZapQR” into any site and your users sign in with a passkey — or by scanning a QR code with their phone, which is the only way in on screens that can't hold credentials: kiosks, TVs, cars, staff terminals, signage.",
    chips: [
      "OpenID Connect + PKCE",
      "Passkeys",
      "Device-link QR",
      "RFC 8628 device flow",
      "WordPress · Drupal · Shopify",
    ],
    url: "https://zapqr.ai",
    urlLabel: "zapqr.ai",
    links: [
      { label: "auth.zapqr.ai", href: "https://auth.zapqr.ai" },
      {
        label: "WordPress plugin",
        href: "https://wordpress.org/plugins/zapqr-login/",
      },
      {
        label: "Chrome extension",
        href: "https://chromewebstore.google.com/detail/zapqr/fgnaicemkkkjppcfcnebhpmpooeeconp",
      },
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/zapqr/id6759184276",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=ai.zapqr.app",
    badge: "Patent pending",
    proof: {
      text: "Proved on an $80 UNIHIKER — a 240×320 screen with no keyboard, signing in over RFC 8628 with nothing but stdlib Python.",
      href: "https://zapqr.ai/devices",
      cta: "See it running",
    },
    accent: {
      ring: "hover:border-lime-400/60",
      chip: "bg-lime-400/10 text-lime-300 border-lime-400/20",
      badge: "bg-lime-400/15 text-lime-300",
      link: "text-lime-300 group-hover:text-lime-200",
      glow: "from-lime-400/10",
      rule: "bg-lime-400",
    },
  },
  {
    name: "PassQR",
    icon: "/passqr-icon.png",
    emoji: "🎫",
    layer: "Credentials",
    question: "What do you hold?",
    tagline: "Apple & Google Wallet passes for real businesses",
    description:
      "Issue loyalty, membership and access credentials that live in the wallet your customers already carry. Stamp cards that update on the lock screen the moment a barista scans, a browser-based scanner for the counter, and an API for everything behind it.",
    chips: [
      "Apple + Google Wallet",
      "Live stamp & reward push",
      "Counter scanner PWA",
      "Multi-tenant API",
      "Geofenced arrival",
    ],
    url: "https://passqr.com",
    urlLabel: "passqr.com",
    links: [
      { label: "scan.passqr.com", href: "https://scan.passqr.com" },
      {
        label: "PassQR Scanner for iOS",
        href: "https://apps.apple.com/us/app/passqr-scanner/id6758465630",
      },
    ],
    accent: {
      ring: "hover:border-emerald-400/60",
      chip: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
      badge: "bg-emerald-400/15 text-emerald-300",
      link: "text-emerald-300 group-hover:text-emerald-200",
      glow: "from-emerald-400/10",
      rule: "bg-emerald-400",
    },
  },
  {
    name: "iotPush",
    icon: "/iotpush-icon.png",
    emoji: "🔔",
    layer: "Delivery",
    question: "Did it reach you?",
    tagline: "One curl away from your pocket",
    description:
      "Push notifications for servers, scripts, agents and IoT devices. One HTTP call sends to a topic; the app on your phone can answer back with action buttons and typed replies, so an alert becomes a decision instead of a dead end.",
    chips: [
      "HTTP API",
      "Topics per device",
      "Two-way actions & replies",
      "Lock-screen multiple choice",
      "Apple Shortcuts",
      "MCP server",
    ],
    url: "https://iotpush.com",
    urlLabel: "iotpush.com",
    links: [{ label: "Docs", href: "https://iotpush.com/docs" }],
    appStoreUrl: "https://apps.apple.com/us/app/iotpushr/id6758430222",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.dasecure.iotpush",
    accent: {
      ring: "hover:border-orange-400/60",
      chip: "bg-orange-400/10 text-orange-300 border-orange-400/20",
      badge: "bg-orange-400/15 text-orange-300",
      link: "text-orange-300 group-hover:text-orange-200",
      glow: "from-orange-400/10",
      rule: "bg-orange-400",
    },
  },
];

/* How the three actually wire together — every line is shipped today. */
const wiring = [
  {
    from: "ZapQR",
    to: "PassQR + iotPush",
    text: "Both admin consoles sign in through ZapQR. One identity, no separate passwords to lose.",
  },
  {
    from: "ZapQR",
    to: "iotPush",
    text: "Every sign-in raises a push on your phone — and a session you can end from it.",
  },
  {
    from: "PassQR",
    to: "iotPush",
    text: "Scans, stamps and usage reports arrive as notifications you can act on, not dashboards you have to remember to open.",
  },
  {
    from: "iotPush",
    to: "PassQR",
    text: "When a message matters, it lands twice: as a push, and as a live update on the wallet pass already on the lock screen.",
  },
  {
    from: "ZapDrop",
    to: "iotPush",
    text: "“Connect with ZapQR”: approve once, and every scan on that screen buzzes your phone. No API key changes hands — and you can cut the link from either side.",
  },
];

/* ------------------------------------------------------------------ */
/* Built on ZapQR — products that use the identity layer as their own  */
/* ------------------------------------------------------------------ */

type FamilyMember = {
  name: string;
  icon: string;
  what: string;
  description: string;
  role: string;
  url: string;
  urlLabel: string;
  links?: { label: string; href: string }[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  status?: string;
  accentText: string;
  accentRule: string;
};

const family: FamilyMember[] = [
  {
    name: "ZapLock",
    icon: "/zaplock-icon.svg",
    what: "Folder encryption",
    description:
      "Encrypt a folder where it sits — same name, same path, in iCloud Drive, Dropbox or Google Drive — and unlock it by signing in with ZapQR. Share it with someone by their address, revoke them in a tap, and every unlocked folder relocks the moment the session ends. Free, no in-app purchases.",
    role: "Identity decides who can open your files.",
    url: "https://zaplock.io",
    urlLabel: "zaplock.io",
    links: [{ label: "Download for all 4 platforms ↑", href: "#zaplock" }],
    status: "Live · iPhone, iPad, Mac, Windows and Android",
    accentText: "text-indigo-300",
    accentRule: "bg-indigo-400",
  },
  {
    name: "ZapDrop",
    icon: "/zapdrop-icon.svg",
    what: "Presence-bound collateral",
    description:
      "A screen shows a rotating QR instead of a flyer rack. Someone scans, approves with Face ID, and the one-pager arrives in their inbox — no form, no typing, no app. You get a verified address; they get no paper to throw away.",
    role: "Identity turns a passer-by into a known contact.",
    url: "https://screens.zapdrop.ai",
    urlLabel: "screens.zapdrop.ai",
    status: "Live · storefronts and expo stands",
    accentText: "text-sky-300",
    accentRule: "bg-sky-400",
  },
  {
    name: "PassQR Tag",
    icon: "/passqr-tag-icon.png",
    what: "Anonymous contact",
    description:
      "A sticker on a car, a bag or a gate. A stranger scans it and reaches you without either of you holding an identifier for the other — and the relay checks they are actually standing there before it escalates.",
    role: "Identity and presence, with neither side exposed.",
    url: "https://tag.passqr.com",
    urlLabel: "tag.passqr.com",
    status: "Private beta · patent pending",
    accentText: "text-teal-300",
    accentRule: "bg-teal-400",
  },
];

/* ------------------------------------------------------------------ */
/* Everything else — still live, no longer the headline                */
/* ------------------------------------------------------------------ */

const alsoBuilt = [
  {
    name: "SenseStamp",
    mark: "/mark-sensestamp.png",
    tagline: "Tamper-proof IoT event logging",
    url: "https://sensestamp.com",
  },
  {
    name: "WaitlistWin",
    mark: "/mark-waitlistwin.png",
    tagline: "Viral launch waitlists",
    url: "https://waitlistwin.com",
  },
  {
    name: "just25",
    mark: "/mark-just25.png",
    tagline: "Speed & reflex brain game",
    url: "https://apps.apple.com/us/app/just25/id6758323002",
  },
];

/* ------------------------------------------------------------------ */
/* Recent releases — dated, verifiable, newest first                   */
/* ------------------------------------------------------------------ */

const releases: {
  date: string;
  iso: string;
  product: string;
  title: string;
  detail: string;
  href: string;
}[] = [
  {
    date: "1 Oct 2026",
    iso: "2026-10-01",
    product: "ZapLock",
    title: "ZapLock for Windows on the Microsoft Store",
    detail:
      "ZapLock now runs on every major platform — iPhone, iPad, Mac, Windows and Android. Lock a folder on a Mac and open it on a Windows PC or an Android phone. Free everywhere.",
    href: "https://apps.microsoft.com/detail/9PF9CLKD133K",
  },
  {
    date: "27 Sep 2026",
    iso: "2026-09-27",
    product: "ZapLock",
    title: "ZapLock 1.1 for iPhone, iPad and Mac",
    detail:
      "Remove ZapLock turns a protected folder back into a normal one for good; a folder unlocked in place on another device opens read-only here, so nobody’s changes get overwritten.",
    href: "https://apps.apple.com/us/app/zaplock/id6808469062",
  },
  {
    date: "27 Sep 2026",
    iso: "2026-09-27",
    product: "ZapDrop + iotPush",
    title: "Connect with ZapQR: scan alerts on your phone",
    detail:
      "Press Connect on a ZapDrop screen, approve “Connect ZapDrop to iotPush?” once, and every scan is pushed to your phone. iotPush Settings now lists connected products so you can disconnect from either side.",
    href: "https://screens.zapdrop.ai",
  },
  {
    date: "26 Sep 2026",
    iso: "2026-09-26",
    product: "iotPush",
    title: "iotpushr 2.3.0 for iOS",
    detail:
      "Apple Shortcuts can send a notification or ask a question; multiple-choice questions are answered from the lock screen; the inbox is searchable.",
    href: "https://apps.apple.com/us/app/iotpushr/id6758430222",
  },
  {
    date: "19 Sep 2026",
    iso: "2026-09-19",
    product: "ZapLock",
    title: "ZapLock 1.0 live on the App Store and Google Play",
    detail:
      "One universal app for iPhone, iPad and Mac, plus Android. Folder encryption in place, unlocked by Sign in with ZapQR.",
    href: "https://zaplock.io",
  },
  {
    date: "12 Sep 2026",
    iso: "2026-09-12",
    product: "ZapQR",
    title: "ZapQR 1.6 on the App Store; Passkeys & Passwords on Google Play",
    detail:
      "Device-link scanner, the QR-pixel brand, and ZapQR Premium ($2.99/mo or $29.99/yr, 14-day trial). Android ships as “ZapQR: Passkeys & Passwords”.",
    href: "https://apps.apple.com/us/app/zapqr/id6759184276",
  },
];

/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* ZapLock spotlight — every major platform, one store link each        */
/* ------------------------------------------------------------------ */

const zaplockPlatforms: {
  platform: string;
  devices: string;
  store: string;
  href: string;
  icon: "apple" | "windows" | "play";
}[] = [
  {
    platform: "iOS",
    devices: "iPhone & iPad",
    store: "App Store",
    href: "https://apps.apple.com/us/app/zaplock/id6808469062",
    icon: "apple",
  },
  {
    platform: "macOS",
    devices: "Mac",
    store: "Mac App Store",
    href: "https://apps.apple.com/us/app/zaplock/id6808469062?mt=12",
    icon: "apple",
  },
  {
    platform: "Windows",
    devices: "Windows PC",
    store: "Microsoft Store",
    href: "https://apps.microsoft.com/detail/9PF9CLKD133K",
    icon: "windows",
  },
  {
    platform: "Android",
    devices: "Phones & tablets",
    store: "Google Play",
    href: "https://play.google.com/store/apps/details?id=ai.zapqr.zaplock",
    icon: "play",
  },
];

const zaplockPoints = [
  {
    title: "Stays where it is",
    text: "Same name, same path — in iCloud Drive, Dropbox, Google Drive or on the device.",
  },
  {
    title: "Your sign-in is the key",
    text: "AES-256, with the key split between your device and ZapQR. No single party holds it whole.",
  },
  {
    title: "Share, then revoke",
    text: "Add anyone with a ZapQR account by address. Take it back in a tap; unlocked folders relock when the session ends.",
  },
];

function WindowsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.1l7.4-1v7.2H3V5.1zm0 13.8l7.4 1v-7.1H3v6.1zm8.2 1.1L21 21.4v-8.6h-9.8V20zm0-15.9v7.3H21V2.6l-9.8 1.5z" />
    </svg>
  );
}

function StoreIcon({
  kind,
  className,
}: {
  kind: "apple" | "windows" | "play";
  className?: string;
}) {
  if (kind === "windows") return <WindowsIcon className={className} />;
  if (kind === "play") return <PlayIcon className={className} />;
  return <AppleIcon className={className} />;
}

function AppleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.6 2.3a1 1 0 00-.5.9v17.6a1 1 0 00.5.9l9.4-9.7L3.6 2.3zm11 7.1L5.9 1.6l10.5 6 .1.1-1.9 1.7zM18 9.9l2.6 1.5a1.2 1.2 0 010 2.1L18 15l-2.2-2.1L18 9.9zM5.9 22.4l8.7-7.8 1.9 1.8-10.6 6z" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#platform", label: "Platform" },
    { href: "#zaplock", label: "ZapLock" },
    { href: "#together", label: "How it fits" },
    { href: "#family", label: "Built on ZapQR" },
    { href: "#lab", label: "In the lab" },
    { href: "#releases", label: "Releases" },
    { href: "#faq", label: "FAQ" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homeGraph) }}
      />
      {/* ---------------------------------------------------------- Nav */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-emerald-400">da</span>secure
          </Link>

          <div className="hidden lg:flex gap-7 items-center">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-300 hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden text-gray-300 hover:text-white transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 bg-gray-950/95 backdrop-blur-md">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-gray-300 hover:text-white transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* -------------------------------------------------------- Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[36rem] bg-emerald-500/10 blur-[120px] rounded-full"
        />
        <div className="relative max-w-6xl mx-auto">
          <Link
            href="#zaplock"
            className="group inline-flex items-center gap-2 sm:gap-3 mb-8 rounded-full border border-indigo-400/30 bg-indigo-500/10 pl-1.5 pr-3 sm:pr-4 py-1.5 text-xs sm:text-sm hover:border-indigo-400/60 hover:bg-indigo-500/15 transition"
          >
            <span className="rounded-full bg-indigo-400 text-black text-xs font-semibold px-2.5 py-0.5">
              New
            </span>
            <span className="text-gray-200">
              ZapLock is on iOS, Mac, Windows{" "}
              <span className="sm:hidden">&amp;</span>
              <span className="hidden sm:inline">and</span> Android
            </span>
            <span className="flex items-center gap-1.5 text-indigo-300">
              <AppleIcon className="hidden sm:block w-3.5 h-3.5" />
              <WindowsIcon className="hidden sm:block w-3.5 h-3.5" />
              <PlayIcon className="hidden sm:block w-3.5 h-3.5" />
              <span className="group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </span>
          </Link>
          <p className="text-sm font-mono tracking-widest text-emerald-400/80 mb-6">
            DASECURE SOLUTIONS LLC · SAN FRANCISCO
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-[1.05]">
            Proof of{" "}
            <span className="text-emerald-400">who, what and where</span>
          </h1>
          <p className="text-xl text-gray-400 mb-4 max-w-2xl">
            Three products that answer the three questions every real-world
            transaction turns on — who is this person, what are they entitled
            to, and did the moment actually reach them.
          </p>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Each one stands alone. Used together they replace a stack of
            passwords, plastic cards and unread email.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#platform"
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 rounded-lg transition"
            >
              See the platform
            </Link>
            <Link
              href="#contact"
              className="border border-gray-700 hover:border-gray-500 px-8 py-3 rounded-lg transition"
            >
              Get in touch
            </Link>
          </div>

          {/* Layer chips */}
          <div className="mt-14 grid sm:grid-cols-3 gap-px bg-gray-800 rounded-xl overflow-hidden border border-gray-800">
            {flagships.map((p) => (
              <Link
                key={p.name}
                href="#platform"
                className="bg-gray-950 px-6 py-5 hover:bg-gray-900 transition"
              >
                <div className={`w-8 h-0.5 mb-3 ${p.accent.rule}`} />
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {p.layer}
                </p>
                <p className="text-lg font-semibold">{p.question}</p>
                <p className="text-sm text-gray-500 mt-1">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------- ZapLock spotlight */}
      <section id="zaplock" className="py-20 px-6 scroll-mt-20">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-950/60 via-gray-950 to-gray-950">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-24 w-[36rem] h-[28rem] bg-indigo-500/15 blur-[110px] rounded-full"
          />
          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-12 p-8 md:p-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/zaplock-icon.svg"
                  alt="ZapLock"
                  className="w-12 h-12 rounded-xl"
                />
                <div>
                  <p className="text-lg font-bold leading-tight">ZapLock</p>
                  <p className="text-xs uppercase tracking-widest text-indigo-300/80">
                    Folder encryption · Built on ZapQR
                  </p>
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-5">
                Lock it on a Mac.{" "}
                <span className="text-indigo-300">
                  Open it on Windows, iPhone or Android.
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-xl">
                ZapLock encrypts any folder exactly where it sits, and your
                ZapQR sign-in is the key. Now on every major platform — free on
                all of them, with no in-app purchases.
              </p>

              <ul className="space-y-4">
                {zaplockPoints.map((pt) => (
                  <li key={pt.title} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-indigo-400" />
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <span className="text-gray-100 font-semibold">
                        {pt.title}.
                      </span>{" "}
                      {pt.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Available on
              </p>
              <div className="grid grid-cols-2 gap-3">
                {zaplockPlatforms.map((pl) => (
                  <a
                    key={pl.platform}
                    href={pl.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-store={pl.store}
                    className="group flex flex-col justify-between rounded-2xl border border-gray-800 bg-gray-900/60 p-4 sm:p-5 min-h-[9.5rem] hover:border-indigo-400/50 hover:bg-gray-900 transition"
                  >
                    <StoreIcon
                      kind={pl.icon}
                      className="w-7 h-7 text-gray-200 group-hover:text-indigo-300 transition"
                    />
                    <div>
                      <p className="text-xl font-bold leading-tight">
                        {pl.platform}
                      </p>
                      <p className="text-xs text-gray-500 mb-2">
                        {pl.devices}
                      </p>
                      <p className="text-xs font-semibold text-indigo-300 whitespace-nowrap">
                        {pl.store}{" "}
                        <span className="inline-block group-hover:translate-x-0.5 transition-transform">
                          →
                        </span>
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
                <p className="text-gray-500">Free · One ZapQR account for every device</p>
                <Link
                  href="https://zaplock.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-300 hover:text-indigo-200 transition"
                >
                  zaplock.io →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Flagships */}
      <section id="platform" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">The platform</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Three products, shipping today on the web, iOS and Android.
          </p>

          <div className="flex flex-col gap-6">
            {flagships.map((p) => (
              <div
                key={p.name}
                className={`group relative overflow-hidden bg-gradient-to-br from-gray-800/70 to-gray-900 rounded-2xl border border-gray-700 ${p.accent.ring} transition`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full bg-gradient-to-br ${p.accent.glow} to-transparent blur-3xl`}
                />
                <div className="relative p-8 md:p-10 grid md:grid-cols-3 gap-8">
                  {/* Left: identity */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {p.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.icon}
                          alt={p.name}
                          className="w-12 h-12 rounded-xl object-contain"
                        />
                      ) : (
                        <div className="text-4xl">{p.emoji}</div>
                      )}
                      <div>
                        <h3 className="text-2xl font-bold leading-tight">
                          {p.name}
                        </h3>
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                          {p.layer}
                        </p>
                      </div>
                    </div>
                    <p className={`font-semibold mb-4 ${p.accent.link}`}>
                      {p.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${p.accent.badge}`}
                      >
                        Live
                      </span>
                      {p.badge && (
                        <span className="text-xs px-3 py-1 rounded-full bg-gray-700/60 text-gray-300">
                          {p.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: substance */}
                  <div className="md:col-span-2">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {p.chips.map((c) => (
                        <span
                          key={c}
                          className={`text-xs px-2.5 py-1 rounded-md border ${p.accent.chip}`}
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    {p.proof && (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 rounded-xl border border-gray-700/70 bg-gray-950/40 px-5 py-4">
                        <p className="text-sm text-gray-400 flex-1">{p.proof.text}</p>
                        <Link
                          href={p.proof.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-semibold whitespace-nowrap ${p.accent.link} transition`}
                        >
                          {p.proof.cta} →
                        </Link>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-5 border-t border-gray-700/60">
                      <Link
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold transition ${p.accent.link}`}
                      >
                        {p.urlLabel} →
                      </Link>
                      {p.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:text-gray-300 transition"
                        >
                          {l.label}
                        </Link>
                      ))}
                      <span className="flex-1" />
                      {p.appStoreUrl && (
                        <Link
                          href={p.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white text-xs px-3 py-2 rounded-lg flex items-center gap-2 border border-gray-600 hover:bg-gray-900 transition"
                        >
                          <AppleIcon />
                          App Store
                        </Link>
                      )}
                      {p.playStoreUrl && (
                        <Link
                          href={p.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white text-xs px-3 py-2 rounded-lg flex items-center gap-2 border border-gray-600 hover:bg-gray-900 transition"
                        >
                          <PlayIcon />
                          Google Play
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Synergy */}
      <section id="together" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Better together</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            These aren&apos;t three unrelated apps under one roof. Identity,
            credential and delivery are the three halves of the same problem —
            so each product is already a customer of the other two.
          </p>

          {/* Loop diagram */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {flagships.map((p, i) => (
              <div
                key={p.name}
                className="relative bg-gray-950 border border-gray-800 rounded-xl p-6"
              >
                <div className={`w-8 h-0.5 mb-4 ${p.accent.rule}`} />
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Layer {i + 1} · {p.layer}
                </p>
                <p className="text-xl font-bold mb-2">{p.name}</p>
                <p className="text-sm text-gray-400">{p.question}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {wiring.map((w) => (
              <div
                key={w.text}
                className="bg-gray-950/60 border border-gray-800 rounded-xl p-6"
              >
                <p className="font-mono text-xs text-emerald-400/90 mb-3">
                  {w.from} <span className="text-gray-600">──▶</span> {w.to}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {w.text}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-8 max-w-3xl">
            The compounding effect is the point: adopt one product and the next
            one costs you an afternoon instead of a quarter, because the
            identity, the credential and the notification channel are already
            wired.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- Family */}
      <section id="family" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/zapqr-icon.svg"
              alt=""
              aria-hidden
              className="w-8 h-8 rounded-lg"
            />
            <h2 className="text-3xl font-bold">Built on ZapQR</h2>
          </div>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Once one identity layer works, the next product doesn&apos;t need
            its own. These three are ours, and they sign their users in the
            same way your site would.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {family.map((f) => (
              <div
                key={f.name}
                className="group flex flex-col bg-gray-900/40 border border-gray-800 rounded-2xl p-7 hover:border-gray-600 transition"
              >
                <div className={`w-8 h-0.5 mb-5 ${f.accentRule}`} />
                <div className="flex items-center gap-3 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.icon}
                    alt={f.name}
                    className="w-10 h-10 rounded-xl object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold leading-tight">{f.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      {f.what}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {f.description}
                </p>

                <p className={`text-sm font-medium mb-6 ${f.accentText}`}>
                  {f.role}
                </p>

                <div className="mt-auto pt-5 border-t border-gray-800">
                  {f.status && (
                    <p className="text-xs text-gray-500 mb-3">{f.status}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <Link
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-semibold ${f.accentText} transition`}
                    >
                      {f.urlLabel} →
                    </Link>
                    {f.links?.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        {...(l.href.startsWith("#")
                          ? {}
                          : { target: "_blank", rel: "noopener noreferrer" })}
                        className="text-xs text-gray-500 hover:text-gray-300 transition"
                      >
                        {l.label}
                      </Link>
                    ))}
                    {f.appStoreUrl && (
                      <Link
                        href={f.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white text-xs px-3 py-2 rounded-lg flex items-center gap-2 border border-gray-600 hover:bg-gray-900 transition"
                      >
                        <AppleIcon />
                        App Store
                      </Link>
                    )}
                    {f.playStoreUrl && (
                      <Link
                        href={f.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white text-xs px-3 py-2 rounded-lg flex items-center gap-2 border border-gray-600 hover:bg-gray-900 transition"
                      >
                        <PlayIcon />
                        Google Play
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- In lab */}
      <section id="lab" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">In the lab</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Early work, shown early. Not a product yet.
          </p>

          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/[0.07] to-gray-900 p-8 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl"
            />
            <div className="relative grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/15 text-cyan-300">
                    Early demo
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-700/60 text-gray-300">
                    Hardware prototype
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/identitystick-icon.svg"
                    alt="IdentityStick"
                    className="w-12 h-12 rounded-xl object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-bold leading-tight">
                      IdentityStick
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      Quorum
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-cyan-300">
                  No one party can move it alone.
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Some actions shouldn&apos;t rest on a single credential. This
                  one takes three: who you are, proved by signing in with ZapQR;
                  your approval, given on your own phone; and the physical stick
                  in your hand, which holds a key that never leaves it and signs
                  only when you press the button. Miss any one and nothing
                  moves.
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {[
                    "P-256 key held on-device",
                    "Transaction rendered on its own screen",
                    "Approval link over NFC",
                    "Physical button to sign",
                    "Signature verified independently",
                    "Works with a Trezor Model T",
                  ].map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2.5 py-1 rounded-md border bg-cyan-400/10 text-cyan-200 border-cyan-400/20"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="pt-5 border-t border-cyan-500/20">
                  <p className="font-mono text-xs text-gray-500 mb-3">
                    First application: stablecoin transfers
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    The signer shows you what you are actually signing on its
                    own screen, so a compromised browser — or an agent acting
                    in your session — cannot change the transaction underneath
                    you. It runs on the ESP32-C6 prototype below and on an
                    off-the-shelf Trezor Model T, which is the point: the
                    quorum does not depend on our hardware. The mechanism is
                    general, and it is a long way from a product.
                  </p>
                  <Link
                    href="https://demo.identitystick.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold transition"
                  >
                    See the demo →
                  </Link>
                </div>
              </div>
            </div>

            <figure className="relative mt-10 pt-8 border-t border-cyan-500/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/identitystick-prototype.jpg"
                alt="The IdentityStick prototype on a breadboard: an ESP32-C6 with a colour screen reading READY beside a PN532 NFC module."
                className="w-full rounded-xl border border-gray-700/60"
              />
              <figcaption className="text-sm text-gray-500 mt-4">
                The prototype as it actually is — an ESP32-C6 and a PN532 NFC
                module on a breadboard. The screen is the security boundary:
                whatever it shows is what the key will sign.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Releases */}
      <section id="releases" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Recent releases</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            What shipped, when, and where to get it. Newest first.
          </p>
          <ol className="relative border-l border-gray-800 ml-2">
            {releases.map((r) => (
              <li key={r.iso + r.title} className="pl-8 pb-9 last:pb-0 relative">
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-400"
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <time
                    dateTime={r.iso}
                    className="font-mono text-xs text-gray-500"
                  >
                    {r.date}
                  </time>
                  <span className="text-xs uppercase tracking-widest text-emerald-400/80">
                    {r.product}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">
                  <Link
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-300 transition"
                  >
                    {r.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-400 mt-1 max-w-3xl leading-relaxed">
                  {r.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------- FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Frequently asked questions</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Short, factual answers. Everything here is also in{" "}
            <a href="/llms.txt" className="underline hover:text-white">
              /llms.txt
            </a>{" "}
            for assistants that read plain text.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-gray-900/40 border border-gray-800 rounded-xl open:border-gray-600 transition"
              >
                <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-gray-100">{f.q}</h3>
                  <span
                    aria-hidden
                    className="text-gray-500 group-open:rotate-45 transition-transform text-xl leading-none"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Also built */}
      <section id="products" className="py-16 px-6 border-t border-gray-800/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Also built
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            Earlier products. Still up, no longer the focus.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {alsoBuilt.map((p) => (
              <Link
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 bg-gray-900/40 border border-gray-800 rounded-lg px-5 py-4 hover:border-gray-600 hover:bg-gray-900 transition"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.mark}
                  alt=""
                  aria-hidden
                  className="w-6 h-6 rounded-md shrink-0 opacity-80 group-hover:opacity-100 transition"
                />
                <div>
                  <p className="font-semibold text-gray-200 group-hover:text-white transition">
                    {p.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- About */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About us</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            DaSecure Solutions LLC is a software company in San Francisco,
            California. We build the plumbing for trust between strangers —
            identity, credentials, presence and the alerts that tie them
            together — and we ship it ourselves, end to end.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-emerald-400 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">One hard problem</h3>
              <p className="text-gray-400">
                Everything we ship answers who, what or where. We stopped
                building anything that doesn&apos;t.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-emerald-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Shipped, not slideware</h3>
              <p className="text-gray-400">
                Live on the App Store, Google Play, the Chrome Web Store and
                wordpress.org — not a roadmap.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-emerald-400 text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-2">Composable by default</h3>
              <p className="text-gray-400">
                Each product is a customer of the others. That&apos;s how we
                find the sharp edges before you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Building something that needs passwordless sign-in, wallet
            credentials, or alerts your users can answer? We&apos;d like to hear
            about it.
          </p>

          <div className="max-w-md">
            <a
              href="mailto:info@dasecure.com"
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-4 rounded-lg transition text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@dasecure.com
            </a>
            <p className="text-gray-500 mt-4 text-sm">
              Or reach out on{" "}
              <Link
                href="https://github.com/dasecure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition underline"
              >
                GitHub
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <Link href="/" className="text-xl font-bold">
                <span className="text-emerald-400">da</span>secure
              </Link>
              <p className="text-gray-500 text-sm mt-1">
                DaSecure Solutions LLC · San Francisco, CA
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {flagships.map((p) => (
                <Link
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  {p.name}
                </Link>
              ))}
              {family.map((f) => (
                <Link
                  key={f.name}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  {f.name}
                </Link>
              ))}
              {alsoBuilt.map((p) => (
                <Link
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white transition"
                >
                  {p.name}
                </Link>
              ))}
              <Link
                href="https://github.com/dasecure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white transition"
              >
                GitHub
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800/50">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} DaSecure Solutions LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
