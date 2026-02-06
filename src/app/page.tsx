"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  {
    name: "PassQR",
    emoji: "🎫",
    tagline: "Digital Passes & QR Tickets",
    description:
      "Create, distribute, and validate QR passes for events, memberships, and loyalty programs. Apple Wallet, built-in camera scanner, API keys, n8n integration, bulk import, and real-time analytics.",
    url: "https://passqr.com",
    color: "emerald",
    colorClasses: {
      badge: "bg-emerald-500/20 text-emerald-400",
      border: "hover:border-emerald-500/50",
      link: "text-emerald-400 group-hover:text-emerald-300",
    },
  },
  {
    name: "iotpush",
    emoji: "🔔",
    tagline: "Multi-Channel IoT Push Notifications",
    description:
      "One API call. Push, email, and webhook delivery for any device that can curl. Real-time alerts with background batching, plan-gated features, and mobile app.",
    url: "https://iotpush.com",
    color: "orange",
    colorClasses: {
      badge: "bg-orange-500/20 text-orange-400",
      border: "hover:border-orange-500/50",
      link: "text-orange-400 group-hover:text-orange-300",
    },
  },
  {
    name: "WaitlistWin",
    emoji: "🚀",
    tagline: "Viral Launch Waitlists",
    description:
      "Turn signups into word-of-mouth growth with gamified referrals. Waitlist pages in 60 seconds with analytics, embeddable widget, referral tracking, and API access.",
    url: "https://waitlistwin.com",
    color: "purple",
    colorClasses: {
      badge: "bg-purple-500/20 text-purple-400",
      border: "hover:border-purple-500/50",
      link: "text-purple-400 group-hover:text-purple-300",
    },
  },
  {
    name: "SenseStamp",
    emoji: "📡",
    tagline: "Tamper-Proof IoT Event Logging",
    description:
      "Cryptographically signed sensor events with hardware-backed proof of presence. HMAC-SHA256 attestation, NFC tap verification, and immutable audit trails.",
    url: "https://sensestamp.com",
    color: "cyan",
    colorClasses: {
      badge: "bg-cyan-500/20 text-cyan-400",
      border: "hover:border-cyan-500/50",
      link: "text-cyan-400 group-hover:text-cyan-300",
    },
  },
  {
    name: "ZapQR",
    emoji: "⚡",
    tagline: "Secure Password Autofill via QR",
    description:
      "Type passwords on untrusted computers without touching the keyboard. Scan a QR code with your phone, password auto-fills securely. End-to-end encrypted, keylogger-proof.",
    url: "https://zapqr.ai",
    color: "yellow",
    colorClasses: {
      badge: "bg-yellow-500/20 text-yellow-400",
      border: "hover:border-yellow-500/50",
      link: "text-yellow-400 group-hover:text-yellow-300",
    },
  },
  {
    name: "just25",
    emoji: "🧠",
    tagline: "Speed & Reflex Brain Game",
    description:
      "Tap numbers 1–25 as fast as you can. Track your brain age, build daily streaks, and compete against yourself. Free on the App Store.",
    url: "https://apps.apple.com/app/just25",
    color: "pink",
    colorClasses: {
      badge: "bg-pink-500/20 text-pink-400",
      border: "hover:border-pink-500/50",
      link: "text-pink-400 group-hover:text-pink-300",
    },
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-emerald-400">da</span>secure
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-gray-300 hover:text-white transition"
            >
              Products
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-950/95 backdrop-blur-md">
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link
                href="#about"
                className="text-gray-300 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#products"
                className="text-gray-300 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Building the future of{" "}
              <span className="text-emerald-400">digital infrastructure</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              We build focused SaaS products and IoT tools that solve real
              problems — from digital passes to push notifications to smart
              security.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#products"
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 rounded-lg transition"
              >
                View Products
              </Link>
              <Link
                href="#contact"
                className="border border-gray-700 hover:border-gray-500 px-8 py-3 rounded-lg transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            DaSecure Solutions LLC is a software company based in San Francisco,
            California. We design and ship focused products across SaaS, IoT,
            and mobile — tools that do one thing well.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-emerald-400 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Problem First</h3>
              <p className="text-gray-400">
                We identify real gaps in the market before writing a single line
                of code.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-emerald-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Ship Fast</h3>
              <p className="text-gray-400">
                Lean products that solve one thing well. No bloat, no feature
                creep.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-emerald-400 text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-2">Connected Ecosystem</h3>
              <p className="text-gray-400">
                Our products work together — SenseStamp alerts via iotpush,
                PassQR launches on WaitlistWin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-400 mb-12">
            Focused tools for modern businesses and developers.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 relative overflow-hidden ${product.colorClasses.border} transition group`}
              >
                <div
                  className={`absolute top-4 right-4 ${product.colorClasses.badge} text-sm px-3 py-1 rounded-full`}
                >
                  Live
                </div>
                <div className="text-4xl mb-4">{product.emoji}</div>
                <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{product.tagline}</p>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <span
                  className={`${product.colorClasses.link} font-semibold transition`}
                >
                  Visit {product.url.replace("https://", "")} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Have an idea? Want to collaborate? We&apos;d love to hear from you.
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

      {/* Footer */}
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
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition"
                >
                  {product.name}
                </Link>
              ))}
              <Link
                href="https://github.com/dasecure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition"
              >
                GitHub
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
