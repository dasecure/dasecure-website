import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const description =
  "DaSecure Solutions builds proof of who, what and where — ZapQR passwordless sign-in, PassQR Apple & Google Wallet credentials, and iotPush two-way alerts, plus ZapLock, ZapDrop and PassQR Tag built on the same identity layer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dasecure.com"),
  title: {
    default: "DaSecure | Passwordless Sign-in, Wallet Credentials & Push Alerts",
    template: "%s | DaSecure Solutions",
  },
  description,
  applicationName: "DaSecure Solutions",
  keywords: [
    "passwordless authentication",
    "OpenID Connect identity provider",
    "sign in with ZapQR",
    "passkeys",
    "QR code login",
    "device flow login",
    "Apple Wallet passes",
    "Google Wallet passes",
    "digital loyalty cards",
    "push notifications API",
    "two-way push notifications",
    "proof of presence",
    "folder encryption",
    "ZapQR",
    "ZapLock",
    "ZapDrop",
    "PassQR",
    "iotPush",
    "DaSecure",
  ],
  authors: [{ name: "DaSecure Solutions LLC", url: "https://dasecure.com" }],
  creator: "DaSecure Solutions LLC",
  publisher: "DaSecure Solutions LLC",
  category: "technology",
  icons: {
    icon: "/icon-512.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://dasecure.com",
    types: { "text/plain": "https://dasecure.com/llms.txt" },
  },
  openGraph: {
    title: "DaSecure Solutions | Proof of who, what and where",
    description,
    type: "website",
    url: "https://dasecure.com",
    siteName: "DaSecure Solutions",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DaSecure Solutions — proof of who, what and where",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DaSecure Solutions | Proof of who, what and where",
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* GA4 + click/section/scroll/FAQ tracking. Console-only until the
            ID inside is real; ?ga_debug=1 mirrors events to the console. */}
        <script src="/analytics.js" defer />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
