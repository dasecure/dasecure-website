import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DaSecure Solutions | Digital Infrastructure & IoT Products",
  description:
    "DaSecure Solutions builds focused SaaS products and IoT tools — PassQR digital passes, iotpush notifications, WaitlistWin viral waitlists, and SenseStamp security sensors.",
  keywords: [
    "SaaS",
    "IoT",
    "digital passes",
    "push notifications",
    "waitlist",
    "security sensors",
    "PassQR",
    "iotpush",
    "WaitlistWin",
    "SenseStamp",
    "DaSecure",
  ],
  authors: [{ name: "DaSecure Solutions LLC" }],
  openGraph: {
    title: "DaSecure Solutions | Digital Infrastructure & IoT Products",
    description:
      "Building the future of digital infrastructure. SaaS products and IoT tools that solve real problems.",
    type: "website",
    url: "https://dasecure.com",
    siteName: "DaSecure Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "DaSecure Solutions",
    description:
      "Building the future of digital infrastructure. SaaS products and IoT tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
