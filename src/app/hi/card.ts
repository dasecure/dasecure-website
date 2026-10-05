/* Business-card flow (dasecure.com/hi).
 *
 *   QR on Vincent's phone → /hi → Sign in with ZapQR (code + PKCE, public
 *   client zq_dasecure_card) → /api/hi/callback → PassQR wallet pass for the
 *   visitor + iotPush alert to Vincent → /hi/done?c=<pass code>
 *
 * Who / what / where in one handshake: ZapQR proves who scanned, PassQR puts
 * the card in their wallet, iotPush tells Vincent it happened.
 *
 * Server-side env (Vercel):
 *   PASSQR_API_KEY       key of the PassQR business "DaSecure" (pro plan)
 *   IOTPUSH_API_KEY      iotPush ACCOUNT key (iop_live_…, Settings → API keys);
 *                        IOTPUSH_TOPIC_KEY is accepted as a fallback name
 *   IOTPUSH_TOPIC        optional, defaults to "dasecure-sales"
 *   HI_TEMPLATE_ID       optional, defaults to the template made for this
 * Missing env never breaks the visitor's side: no PassQR key → they get the
 * contact card instead of a pass; no iotPush key → no alert, flow continues.
 */

export const CARD = {
  name: "Vincent Ooi",
  title: "Founder, DaSecure Solutions",
  email: "vincent@dasecure.com",
  web: "https://dasecure.com",
  event: "SF Tech Week 2026",
};

export const ZAPQR = {
  issuer: "https://auth.zapqr.ai",
  authorize: "https://auth.zapqr.ai/auth",
  token: "https://auth.zapqr.ai/token",
  userinfo: "https://auth.zapqr.ai/me",
  clientId: "zq_dasecure_card",
  redirectUri: "https://dasecure.com/api/hi/callback",
  scope: "openid email profile",
};

export const PASSQR = {
  api: "https://passqr.com/api/v1/passes",
  templateId:
    process.env.HI_TEMPLATE_ID || "a3a2d58a-d607-4036-8d2c-8abfa21868d9",
  apple: (code: string) =>
    `https://passqr.com/api/wallet/apple?code=${encodeURIComponent(code)}`,
  google: (code: string) =>
    `https://passqr.com/api/wallet/google?code=${encodeURIComponent(code)}`,
  view: (code: string) => `https://passqr.com/p/${encodeURIComponent(code)}`,
};

export const IOTPUSH = {
  topic: process.env.IOTPUSH_TOPIC || "dasecure-sales",
  url: (topic: string) =>
    `https://www.iotpush.com/api/push/${encodeURIComponent(topic)}`,
};

/** Cookie that carries the PKCE verifier + state between start and callback. */
export const TX_COOKIE = "hi_tx";

/** Pass codes look like PASS-WLKPYYX8; anything else is not rendered. */
export const isPassCode = (c: string | undefined | null): c is string =>
  !!c && /^[A-Za-z0-9-]{4,40}$/.test(c);

/** Short, safe tag for where the scan came from (?ref=sftw). */
export const cleanRef = (r: string | null | undefined) =>
  (r || "").replace(/[^a-z0-9_-]/gi, "").slice(0, 24);
