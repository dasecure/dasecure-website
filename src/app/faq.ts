/* Home-page FAQ. Every answer is drawn from copy already published on
 * dasecure.com or the product sites/store listings it links to. The same
 * array feeds the visible FAQ, the FAQPage JSON-LD and /llms-full.txt, so
 * the three can never drift apart. First sentence of each answer must stand
 * alone and name the product — that is the sentence AI engines quote. */

export type Faq = { q: string; a: string };

export const SITE_URL = "https://dasecure.com";

export const faqs: Faq[] = [
  {
    q: "What does DaSecure Solutions build?",
    a: "DaSecure Solutions LLC is a San Francisco software company that builds proof of who, what and where: ZapQR for passwordless sign-in, PassQR for Apple and Google Wallet credentials, and iotPush for push notifications you can answer from your phone. ZapLock, ZapDrop and PassQR Tag are built on the same ZapQR identity layer. Everything is shipped and self-serve — live on the App Store, Google Play, the Chrome Web Store and wordpress.org.",
  },
  {
    q: "What is ZapQR?",
    a: "ZapQR is a hosted OpenID Connect identity provider that adds a “Sign in with ZapQR” button to any website. Users sign in with a passkey, or by scanning a QR code with their phone — which is how sign-in works on screens that cannot hold credentials, such as kiosks, TVs, cars and staff terminals (RFC 8628 device flow). It works with WordPress, Drupal and Shopify, and ships with iOS and Android apps and a Chrome extension.",
  },
  {
    q: "Is the ZapQR app a password manager?",
    a: "Yes — the ZapQR app for iOS and Android is a passkey and password manager with autofill, TOTP codes and phone-approved sign-in. The free tier includes 10 passwords, 5 passkeys and 5 secure notes; ZapQR Premium removes the caps for $2.99 a month or $29.99 a year, with a 14-day free trial. The same app is the approver for “Sign in with ZapQR” on the web.",
  },
  {
    q: "What is PassQR?",
    a: "PassQR issues loyalty, membership and access credentials as Apple Wallet and Google Wallet passes. A stamp card updates on the customer’s lock screen the moment a barista scans it, there is a browser-based scanner for the counter (scan.passqr.com) and a companion iOS scanner app, and a multi-tenant API behind it all. It is built for owner-operated businesses: cafés, gyms, salons, retail and market stalls.",
  },
  {
    q: "What is iotPush?",
    a: "iotPush turns one HTTP POST into a push notification on your phone. Servers, scripts, agents and IoT devices send to a topic; the iotPush app on iOS and Android can answer back with action buttons and typed replies, so an alert becomes a decision instead of a dead end. It also ships an MCP server and Apple Shortcuts support. The free tier includes 3 topics and 100 messages a month.",
  },
  {
    q: "How do ZapQR, PassQR and iotPush work together?",
    a: "Each DaSecure product is already a customer of the other two. The PassQR and iotPush admin consoles sign in through ZapQR; every sign-in raises a push you can end the session from; PassQR scans and reports arrive as notifications; and “Connect with ZapQR” lets a product such as ZapDrop link to your iotPush account with one approval, so every scan on a screen pushes to your phone without an API key changing hands.",
  },
  {
    q: "What is ZapLock and which platforms does it run on?",
    a: "ZapLock encrypts a folder where it sits — same name, same path, in iCloud Drive, Dropbox, Google Drive or on the device — and unlocks it by signing in with ZapQR. Every file is AES-256 encrypted with a key split between the device’s Secure Enclave and ZapQR, so no single party holds a whole key. You can share a vault with anyone who has a ZapQR account and revoke them in a tap. ZapLock is free, with no in-app purchases, on Mac, iPhone, iPad and Android.",
  },
  {
    q: "What is ZapDrop?",
    a: "ZapDrop replaces the flyer rack with a screen that shows a rotating QR code: a passer-by scans, approves with Face ID, and the one-pager lands in their inbox while you get a verified address. Plans start at $79 a month for the first screen or $399 for a seven-day event pass. ZapDrop GameHub (app.zapdrop.ai) adds branded games — prize wheel, quiz, slots and more — played on any screen with the phone as the controller, where every play is a lead.",
  },
  {
    q: "Is IdentityStick available?",
    a: "No — IdentityStick is an early demo and hardware prototype, not a product. It is a quorum approval mechanism that needs three things at once: a ZapQR sign-in, an approval on your phone, and a physical signer (an ESP32-C6 prototype or an off-the-shelf Trezor Model T) that renders the transaction on its own screen. There is a demo at demo.identitystick.com and no signup.",
  },
];
