import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hi — Vincent at DaSecure",
  description:
    "Sign in with ZapQR and Vincent's card lands in your Apple or Google Wallet.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function HiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <main className="flex-1 w-full max-w-md mx-auto px-6 pt-12 pb-10">
        <Link href="/" className="text-xl font-bold">
          <span className="text-emerald-400">da</span>secure
        </Link>
        {children}
      </main>
      <footer className="w-full max-w-md mx-auto px-6 pb-8 text-xs text-gray-600">
        DaSecure Solutions LLC · San Francisco ·{" "}
        <a href="/privacy" className="underline hover:text-gray-400">
          Privacy
        </a>
      </footer>
    </div>
  );
}
