import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const description =
  "DaSecure Solutions builds proof of who, what and where — ZapQR passwordless sign-in, PassQR Apple & Google Wallet credentials, and iotPush two-way alerts. Three products that compose into one stack.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dasecure.com"),
  title: "DaSecure Solutions | Passwordless Identity, Wallet Credentials & Alerts",
  description,
  keywords: [
    "passwordless authentication",
    "OpenID Connect identity provider",
    "sign in with ZapQR",
    "passkeys",
    "QR code login",
    "Apple Wallet passes",
    "Google Wallet passes",
    "digital loyalty cards",
    "push notifications API",
    "proof of presence",
    "ZapQR",
    "PassQR",
    "iotPush",
    "DaSecure",
  ],
  authors: [{ name: "DaSecure Solutions LLC" }],
  icons: {
    icon: "/icon-512.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://dasecure.com",
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
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DaSecure Solutions LLC",
  url: "https://dasecure.com",
  email: "info@dasecure.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: ["https://github.com/dasecure"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "ZapQR",
        applicationCategory: "SecurityApplication",
        url: "https://zapqr.ai",
        description:
          "Passwordless OpenID Connect identity provider with passkeys and device-link QR sign-in.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "PassQR",
        applicationCategory: "BusinessApplication",
        url: "https://passqr.com",
        description:
          "Apple and Google Wallet passes for loyalty, membership and access credentials.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "iotPush",
        applicationCategory: "DeveloperApplication",
        url: "https://iotpush.com",
        description:
          "Push notification API for servers, scripts and IoT devices, with two-way actions and replies.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R9LHW0V9VC"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R9LHW0V9VC');
          `}
        </Script>
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
