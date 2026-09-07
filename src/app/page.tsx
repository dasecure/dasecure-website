"use client";

import Link from "next/link";
import { useState } from "react";

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
    icon: "/zapqr-icon.png",
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
      "https://apps.apple.com/us/app/zapqr-password-manager/id6758756021",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=ai.zapqr.app",
    badge: "Patent pending",
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
    links: [{ label: "scan.passqr.com", href: "https://scan.passqr.com" }],
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
      "Priorities & tap-through",
      "MCP server",
    ],
    url: "https://iotpush.com",
    urlLabel: "iotpush.com",
    links: [],
    appStoreUrl: "https://apps.apple.com/us/app/id6758430222",
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
];

/* ------------------------------------------------------------------ */
/* Everything else — still live, no longer the headline                */
/* ------------------------------------------------------------------ */

const alsoBuilt = [
  {
    name: "ZapDrop",
    tagline: "Cross-device file transfer, end-to-end encrypted",
    url: "https://zapdrop.ai",
  },
  {
    name: "SenseStamp",
    tagline: "Tamper-proof IoT event logging",
    url: "https://sensestamp.com",
  },
  {
    name: "WaitlistWin",
    tagline: "Viral launch waitlists",
    url: "https://waitlistwin.com",
  },
  {
    name: "just25",
    tagline: "Speed & reflex brain game",
    url: "https://apps.apple.com/us/app/just25/id6758323002",
  },
];

/* ------------------------------------------------------------------ */

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
    { href: "#together", label: "How it fits" },
    { href: "#lab", label: "In the lab" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* ---------------------------------------------------------- Nav */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-emerald-400">da</span>secure
          </Link>

          <div className="hidden md:flex gap-7 items-center">
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
            className="md:hidden text-gray-300 hover:text-white transition"
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
          <div className="md:hidden border-t border-gray-800 bg-gray-950/95 backdrop-blur-md">
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

      {/* ------------------------------------------------------- In lab */}
      <section id="lab" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">In the lab</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            What the three layers make possible once they compose.
          </p>

          <div className="relative overflow-hidden rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/[0.07] to-gray-900 p-8 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 rounded-full bg-teal-400/10 blur-3xl"
            />
            <div className="relative grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-teal-400/15 text-teal-300">
                    Private beta
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-700/60 text-gray-300">
                    Patent pending
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">PassQR Tag</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                  Presence
                </p>
                <p className="font-semibold text-teal-300">
                  Reach the owner. Prove you were there.
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A QR tag on a car, a bag, a badge or a door. A stranger scans
                  it and can reach the owner without either side learning who
                  the other is. What makes it more than a sticker is presence:
                  the tag proves the sender is actually standing there — by
                  Bluetooth beacon, by location, by a live photo with the code
                  in frame — and how urgent the message is decides how much gets
                  disclosed and how fast it escalates.
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {[
                    "Anonymous two-way relay",
                    "Beacon & photo presence attestation",
                    "Severity-tiered escalation",
                    "Portable visit credential",
                    "Offline verification",
                  ].map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2.5 py-1 rounded-md border bg-teal-400/10 text-teal-200 border-teal-400/20"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="pt-5 border-t border-teal-500/20">
                  <p className="font-mono text-xs text-gray-500 mb-3">
                    Uses all three layers at once
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    Owners sign in with <strong className="text-lime-300">ZapQR</strong>.
                    Alerts arrive over{" "}
                    <strong className="text-orange-300">iotPush</strong> and land
                    on the lock screen as a live{" "}
                    <strong className="text-emerald-300">PassQR</strong> wallet
                    pass. Passers-by stay anonymous throughout — no account, no
                    app, no phone number.
                  </p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 font-semibold transition"
                  >
                    Ask about the beta →
                  </Link>
                </div>
              </div>
            </div>
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
            Earlier products, still live and still supported.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {alsoBuilt.map((p) => (
              <Link
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900/40 border border-gray-800 rounded-lg px-5 py-4 hover:border-gray-600 hover:bg-gray-900 transition"
              >
                <p className="font-semibold text-gray-200 group-hover:text-white transition">
                  {p.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{p.tagline}</p>
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
