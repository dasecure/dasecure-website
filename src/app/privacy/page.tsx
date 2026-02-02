import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DaSecure Solutions",
  description: "Privacy policy for DaSecure Solutions products — PassQR, iotpush, WaitlistWin, SenseStamp, and just25.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="text-gray-500 hover:text-white transition text-sm mb-6 inline-block">
          ← DaSecure Solutions
        </Link>

        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: February 2, 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">Overview</h2>
            <p>
              DaSecure Solutions LLC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the following products: PassQR, iotpush, WaitlistWin, SenseStamp, and just25. This Privacy Policy explains how we collect, use, and protect your information across all our products and services.
            </p>
            <p>We respect your privacy and are committed to keeping things simple and transparent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Information We Collect</h2>

            <h3 className="text-lg font-medium text-white mt-4">Account Information</h3>
            <p>When you create an account on PassQR, iotpush, or WaitlistWin, we collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address</li>
              <li>Password (securely hashed — we never store plaintext passwords)</li>
              <li>Name (if provided)</li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-4">Usage Data</h3>
            <p>We may collect basic usage data to improve our products:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pages visited and features used</li>
              <li>Device type and browser</li>
              <li>Crash reports and error logs</li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-4">just25 (Mobile Game)</h3>
            <p>
              just25 does <strong className="text-white">not</strong> collect any personal data. All game data (scores, streaks, settings) is stored locally on your device. No account is required.
            </p>

            <h3 className="text-lg font-medium text-white mt-4">Push Notifications</h3>
            <p>
              If you enable push notifications in our mobile apps (iotpush, PassQR), we store your device push token to deliver notifications. This token is not linked to your personal identity and is deleted when you unsubscribe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and operate our services</li>
              <li>To authenticate your account</li>
              <li>To send push notifications you&apos;ve subscribed to</li>
              <li>To process payments (via Stripe — we never see your full card number)</li>
              <li>To improve our products and fix bugs</li>
              <li>To respond to support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">What We Don&apos;t Do</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We do <strong className="text-white">not</strong> sell your data to third parties</li>
              <li>We do <strong className="text-white">not</strong> use your data for advertising</li>
              <li>We do <strong className="text-white">not</strong> track you across other websites</li>
              <li>We do <strong className="text-white">not</strong> share your data with data brokers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Data Storage & Security</h2>
            <p>
              Your data is stored securely using <a href="https://supabase.com" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Supabase</a> with row-level security policies. All data is encrypted in transit (TLS/SSL) and at rest. Our infrastructure is hosted in the United States.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white">Supabase</strong> — database and authentication</li>
              <li><strong className="text-white">Vercel</strong> — web hosting</li>
              <li><strong className="text-white">Stripe</strong> — payment processing</li>
              <li><strong className="text-white">Expo</strong> — mobile app push notifications</li>
              <li><strong className="text-white">Google OAuth</strong> — optional sign-in</li>
            </ul>
            <p>Each service has its own privacy policy. We only share the minimum data required for each service to function.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Your Rights</h2>
            <p>You can:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white">Access</strong> your data through your dashboard</li>
              <li><strong className="text-white">Update</strong> your information in account settings</li>
              <li><strong className="text-white">Delete</strong> your account and all associated data (contact us or use the delete option in settings)</li>
              <li><strong className="text-white">Export</strong> your data upon request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal information from children. just25 is rated 4+ and collects no data at all.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. We&apos;ll notify users of significant changes via email or in-app notice. The &quot;last updated&quot; date at the top reflects the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p>
              Questions about this policy? Contact us at{" "}
              <a href="mailto:info@dasecure.com" className="text-blue-400 hover:text-blue-300">info@dasecure.com</a>.
            </p>
          </section>
        </div>

        <div className="text-center text-gray-600 text-sm pt-12 mt-12 border-t border-gray-800">
          <p>© 2026 DaSecure Solutions LLC</p>
        </div>
      </div>
    </div>
  );
}
