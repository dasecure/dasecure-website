import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbs, jsonLd } from "../structured-data";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with DaSecure products — ZapQR, PassQR, iotPush, ZapLock, ZapDrop, Voice Cloner, FastFlow and just25. Email info@dasecure.com; we usually answer within 24 hours.",
  alternates: { canonical: "https://dasecure.com/support" },
};

const faq = [
  {
    q: "How do I get help with a DaSecure product?",
    a: "Email info@dasecure.com with the product name and, if it is an app, the version from its Settings screen. We usually answer within 24 hours. ZapQR has its own support address, support@zapqr.ai.",
  },
  {
    q: "How do I reset my password?",
    a: "ZapQR accounts have no password: sign in at auth.zapqr.ai with your passkey, by scanning the QR with the ZapQR app, or with an email link. PassQR and iotPush consoles offer Sign in with ZapQR and an email magic link, so there is nothing to reset.",
  },
  {
    q: "How do I cancel a subscription?",
    a: "App subscriptions (ZapQR Premium, FastFlow Premium) are managed by Apple or Google: open your App Store or Google Play subscriptions page and cancel there. Web plans (PassQR, iotPush, ZapDrop) are cancelled from the product's Billing page, any time.",
  },
  {
    q: "Do you offer refunds?",
    a: "For web plans, contact us within 14 days of purchase for a full refund. App Store and Google Play purchases are refunded by Apple and Google under their own policies; we will point you to the right form.",
  },
  {
    q: "Is my data secure?",
    a: "Data is encrypted in transit (TLS) and at rest, and we never sell it. ZapLock and the ZapQR vault are end-to-end encrypted: we cannot read your files or passwords. Details per product are in the privacy policy.",
  },
  {
    q: "Which platforms are supported?",
    a: "Web consoles work in any modern browser. ZapQR, iotPush and ZapLock have iOS and Android apps; ZapLock also runs on the Mac; PassQR Scanner, Voice Cloner, FastFlow, Resume Hero and just25 are on iOS.",
  },
  {
    q: "How do I delete my account?",
    a: "ZapQR: auth.zapqr.ai → Account → Delete account. PassQR and iotPush: Settings → Delete account in the console, or email info@dasecure.com from the account's address and we will delete it within 7 days.",
  },
];

const products = [
  {
    name: "ZapQR",
    emoji: "⚡",
    description: "Passwordless sign-in (OIDC), passkeys, password manager app, Chrome extension",
    url: "https://zapqr.ai",
    docs: "https://auth.zapqr.ai",
    support: "support@zapqr.ai",
  },
  {
    name: "PassQR",
    emoji: "🎫",
    description: "Apple & Google Wallet loyalty, membership and access passes",
    url: "https://passqr.com",
    docs: "https://passqr.com/docs",
  },
  {
    name: "iotPush",
    emoji: "🔔",
    description: "Push notifications from one HTTP call, with two-way replies",
    url: "https://iotpush.com",
    docs: "https://iotpush.com/docs",
  },
  {
    name: "ZapLock",
    emoji: "🔒",
    description: "Encrypt a folder in place, unlock with Sign in with ZapQR",
    url: "https://zaplock.io",
    docs: null,
  },
  {
    name: "ZapDrop",
    emoji: "📺",
    description: "Rotating-QR screens and GameHub for stands and storefronts",
    url: "https://screens.zapdrop.ai",
    docs: null,
  },
  {
    name: "Voice Cloner",
    emoji: "🎙️",
    description: "AI text-to-speech in your own voice (iOS)",
    url: "https://dasecure.com/voice-cloner",
    docs: null,
  },
  {
    name: "FastFlow",
    emoji: "⏱️",
    description: "Fasting tracker with live Garmin biometrics (iOS)",
    url: "https://fastflowapp.com",
    docs: null,
  },
  {
    name: "just25",
    emoji: "🧠",
    description: "Speed & reflex brain game — tap 1 to 25",
    url: "https://apps.apple.com/us/app/just25/id6758323002",
    docs: null,
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            breadcrumbs([{ name: "Support", path: "/support" }]),
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-gray-500 hover:text-white transition text-sm mb-6 inline-block">
            ← DaSecure Solutions
          </Link>
          <h1 className="text-3xl font-bold mb-3">Support</h1>
          <p className="text-gray-400 text-lg">
            Need help? We&apos;re here for you.
          </p>
        </div>

        {/* Contact */}
        <section className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-4">
            For any questions, issues, or feedback, reach out to us directly:
          </p>
          <a
            href="mailto:info@dasecure.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-medium transition"
          >
            ✉️ info@dasecure.com
          </a>
          <p className="text-gray-500 text-sm mt-3">
            We typically respond within 24 hours.
          </p>
        </section>

        {/* Products */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Product Support</h2>
          <div className="grid gap-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 flex items-start gap-4"
              >
                <span className="text-2xl">{product.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{product.description}</p>
                  <div className="flex gap-3 text-sm">
                    <a href={product.url} className="text-blue-400 hover:text-blue-300 transition" target="_blank" rel="noopener noreferrer">
                      Website →
                    </a>
                    {product.docs && (
                      <a href={product.docs} className="text-blue-400 hover:text-blue-300 transition" target="_blank" rel="noopener noreferrer">
                        Documentation →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">FAQ</h2>
          <div className="space-y-4">
            {faq.map(({ q, a }) => (
              <div key={q} className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
                <h3 className="font-medium mb-2">{q}</h3>
                <p className="text-gray-400 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm pt-8 border-t border-gray-800">
          <p>© {new Date().getFullYear()} DaSecure Solutions LLC</p>
        </div>
      </div>
    </div>
  );
}
