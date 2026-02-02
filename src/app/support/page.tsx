import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | DaSecure Solutions",
  description: "Get help with DaSecure products — PassQR, iotpush, WaitlistWin, and SenseStamp.",
};

const products = [
  {
    name: "PassQR",
    emoji: "🎫",
    description: "Digital passes, QR tickets, and Apple Wallet integration",
    url: "https://passqr.com",
    docs: "https://passqr.com/docs",
  },
  {
    name: "iotpush",
    emoji: "📡",
    description: "Push notifications for IoT devices and servers",
    url: "https://iotpush.com",
    docs: "https://iotpush.com/docs",
  },
  {
    name: "WaitlistWin",
    emoji: "🚀",
    description: "Viral waitlists with referral tracking",
    url: "https://waitlistwin.com",
    docs: null,
  },
  {
    name: "SenseStamp",
    emoji: "🔐",
    description: "Tamper-proof IoT event verification",
    url: "https://sensestamp.com",
    docs: null,
  },
  {
    name: "just25",
    emoji: "🧠",
    description: "Speed & reflex brain game — tap 1 to 25",
    url: "https://apps.apple.com/app/just25",
    docs: null,
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
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
            {[
              { q: "How do I reset my password?", a: "Go to your product dashboard → Settings → Change Password. Or use the \"Forgot Password\" link on the login page." },
              { q: "How do I cancel my subscription?", a: "Go to your product dashboard → Billing → Manage Subscription. You can cancel anytime." },
              { q: "Do you offer refunds?", a: "Yes — if you're unsatisfied, contact us within 14 days of purchase for a full refund." },
              { q: "Is my data secure?", a: "Absolutely. All data is encrypted in transit (TLS) and at rest. We use Supabase with row-level security and never share your data with third parties." },
              { q: "Which platforms are supported?", a: "Our web dashboards work on all modern browsers. Mobile apps are available for iOS, with Android coming soon." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
                <h3 className="font-medium mb-2">{q}</h3>
                <p className="text-gray-400 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm pt-8 border-t border-gray-800">
          <p>© 2026 DaSecure Solutions LLC</p>
        </div>
      </div>
    </div>
  );
}
