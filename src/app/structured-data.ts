import { faqs, SITE_URL } from "./faq";

/* One @graph for the home page: Organization, WebSite, the shipped
 * products as SoftwareApplication nodes (with every store URL Google and
 * the AI engines can resolve), and the FAQPage built from faq.ts.
 * Rendered server-side as a plain <script type="application/ld+json">
 * so crawlers that do not execute JavaScript still see it. */

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "DaSecure Solutions LLC",
  alternateName: "DaSecure",
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  email: "info@dasecure.com",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/dasecure",
    "https://apps.apple.com/us/developer/dasecure-solutions-llc/id1367132705",
  ],
  brand: [
    { "@type": "Brand", name: "ZapQR", url: "https://zapqr.ai" },
    { "@type": "Brand", name: "PassQR", url: "https://passqr.com" },
    { "@type": "Brand", name: "iotPush", url: "https://iotpush.com" },
    { "@type": "Brand", name: "ZapLock", url: "https://zaplock.io" },
    { "@type": "Brand", name: "ZapDrop", url: "https://screens.zapdrop.ai" },
  ],
};

const website = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE_URL,
  name: "DaSecure Solutions",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
};

const app = (o: {
  id: string;
  name: string;
  url: string;
  category: string;
  os: string;
  description: string;
  downloads?: string[];
  sameAs?: string[];
  features: string[];
  price?: string;
  version?: string;
}) => ({
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#${o.id}`,
  name: o.name,
  url: o.url,
  applicationCategory: o.category,
  operatingSystem: o.os,
  description: o.description,
  featureList: o.features,
  ...(o.downloads ? { downloadUrl: o.downloads } : {}),
  ...(o.sameAs ? { sameAs: o.sameAs } : {}),
  ...(o.version ? { softwareVersion: o.version } : {}),
  offers: {
    "@type": "Offer",
    price: o.price ?? "0",
    priceCurrency: "USD",
  },
  publisher: { "@id": ORG_ID },
  author: { "@id": ORG_ID },
});

const products = [
  app({
    id: "zapqr",
    name: "ZapQR",
    url: "https://zapqr.ai",
    category: "SecurityApplication",
    os: "Web, iOS, Android, Chrome",
    version: "1.6",
    description:
      "Hosted OpenID Connect identity provider. “Sign in with ZapQR” with passkeys or a QR scan from the phone; RFC 8628 device flow for kiosks, TVs and cars; WordPress, Drupal and Shopify integrations. The iOS and Android apps are a passkey and password manager with autofill and TOTP.",
    downloads: [
      "https://apps.apple.com/us/app/zapqr/id6759184276",
      "https://play.google.com/store/apps/details?id=ai.zapqr.app",
      "https://chromewebstore.google.com/detail/zapqr/fgnaicemkkkjppcfcnebhpmpooeeconp",
      "https://wordpress.org/plugins/zapqr-login/",
    ],
    sameAs: ["https://auth.zapqr.ai"],
    features: [
      "OpenID Connect + PKCE",
      "Passkeys (WebAuthn)",
      "Device-link QR sign-in",
      "RFC 8628 device flow",
      "Password manager with autofill and TOTP",
      "Connect with ZapQR cross-product permissions",
    ],
  }),
  app({
    id: "passqr",
    name: "PassQR",
    url: "https://passqr.com",
    category: "BusinessApplication",
    os: "Web, iOS",
    description:
      "Apple Wallet and Google Wallet passes for loyalty, membership and access credentials, with live stamp and reward push, a counter scanner PWA and a multi-tenant API.",
    downloads: ["https://apps.apple.com/us/app/passqr-scanner/id6758465630"],
    sameAs: ["https://scan.passqr.com", "https://loyalty.passqr.com"],
    features: [
      "Apple + Google Wallet passes",
      "Live stamp and reward push",
      "Counter scanner PWA",
      "Geofenced arrival notifications",
      "Multi-tenant API",
    ],
  }),
  app({
    id: "iotpush",
    name: "iotPush",
    url: "https://iotpush.com",
    category: "DeveloperApplication",
    os: "Web, iOS, Android",
    version: "2.3.0",
    description:
      "Push notification API for servers, scripts, agents and IoT devices. One HTTP call sends to a topic; the phone app answers back with action buttons and typed replies. MCP server and Apple Shortcuts included.",
    downloads: [
      "https://apps.apple.com/us/app/iotpushr/id6758430222",
      "https://play.google.com/store/apps/details?id=com.dasecure.iotpush",
    ],
    features: [
      "HTTP API",
      "Topics per device",
      "Two-way actions and replies",
      "Lock-screen multiple choice",
      "Apple Shortcuts",
      "MCP server",
    ],
  }),
  app({
    id: "zaplock",
    name: "ZapLock",
    url: "https://zaplock.io",
    category: "SecurityApplication",
    os: "iOS, iPadOS, macOS, Windows, Android",
    description:
      "Encrypt a folder in place — same name, same path — and unlock it by signing in with ZapQR. AES-256 with the key split between the device and ZapQR; share with anyone who has a ZapQR account and revoke in a tap. Runs on iPhone, iPad, Mac, Windows and Android. Free, no in-app purchases.",
    downloads: [
      "https://apps.apple.com/us/app/zaplock/id6808469062",
      "https://apps.microsoft.com/detail/9PF9CLKD133K",
      "https://play.google.com/store/apps/details?id=ai.zapqr.zaplock",
    ],
    features: [
      "Folder encryption in place",
      "Unlock with Sign in with ZapQR",
      "Share and revoke by address",
      "AES-256 with a split key",
      "Cross-platform: iOS, iPadOS, macOS, Windows, Android",
      "Works in iCloud Drive, Dropbox and Google Drive",
    ],
  }),
  app({
    id: "zapdrop",
    name: "ZapDrop",
    url: "https://screens.zapdrop.ai",
    category: "BusinessApplication",
    os: "Web",
    price: "79",
    description:
      "A screen shows a rotating QR instead of a flyer rack; a scan and a Face ID approval deliver the one-pager to a verified address.",
    features: [
      "Rotating QR with deduped impressions",
      "Face ID approval through ZapQR",
      "One-pager emailed to a verified address",
      "Scan alerts to your phone via iotPush",
    ],
  }),
];

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [organization, website, ...products, faqPage],
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

/* Serialize for a <script type="application/ld+json"> without letting a
 * stray "</script>" in copy break out of the tag. */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
