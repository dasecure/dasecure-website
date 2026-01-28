import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dasecure solutions | SaaS & Mobile Apps",
  description: "Building micro-SaaS products and mobile apps that solve real-world problems.",
  keywords: ["SaaS", "micro-SaaS", "mobile apps", "software", "startup"],
  openGraph: {
    title: "dasecure solutions",
    description: "Building software that solves real problems",
    type: "website",
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
