import { NextRequest, NextResponse } from "next/server";
import { CARD, IOTPUSH, PASSQR, TX_COOKIE, ZAPQR, cleanRef } from "../../../hi/card";

type Tx = { s: string; v: string; r?: string };
type Person = { email: string; name: string };

const TIMEOUT = 8000;

function done(req: NextRequest, params: Record<string, string>) {
  const url = new URL("/hi/done", req.nextUrl.origin);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = NextResponse.redirect(url, 303);
  res.cookies.set(TX_COOKIE, "", { path: "/api/hi", maxAge: 0 });
  res.headers.set("Cache-Control", "no-store");
  return res;
}

/* Code → tokens (public client + PKCE), then the person from /me.
 * Identity comes from the userinfo endpoint over TLS, so the ID token's
 * signature never has to be checked here (OIDC Core 3.1.3.7). */
async function signIn(code: string, verifier: string): Promise<Person | null> {
  const tok = await fetch(ZAPQR.token, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: ZAPQR.redirectUri,
      client_id: ZAPQR.clientId,
      code_verifier: verifier,
    }),
    signal: AbortSignal.timeout(TIMEOUT),
  });
  if (!tok.ok) {
    console.error("hi: token exchange failed", tok.status, await tok.text());
    return null;
  }
  const { access_token } = (await tok.json()) as { access_token?: string };
  if (!access_token) return null;

  const me = await fetch(ZAPQR.userinfo, {
    headers: { authorization: `Bearer ${access_token}` },
    signal: AbortSignal.timeout(TIMEOUT),
  });
  if (!me.ok) {
    console.error("hi: userinfo failed", me.status);
    return null;
  }
  const u = (await me.json()) as { email?: string; name?: string };
  if (!u.email) return null;
  const name = (u.name || "").trim() || u.email.split("@")[0];
  return { email: u.email, name };
}

async function issuePass(p: Person): Promise<string | null> {
  const key = process.env.PASSQR_API_KEY;
  if (!key) {
    console.error("hi: PASSQR_API_KEY not set — skipping pass");
    return null;
  }
  const met = `${CARD.event} · ${new Date().toLocaleDateString("en-US", {
    timeZone: "America/Los_Angeles",
    month: "short",
    day: "numeric",
  })}`;
  try {
    const res = await fetch(PASSQR.api, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
      body: JSON.stringify({
        template_id: PASSQR.templateId,
        holder_name: p.name,
        holder_email: p.email,
        data: { met },
      }),
      signal: AbortSignal.timeout(TIMEOUT),
    });
    if (!res.ok) {
      console.error("hi: PassQR create failed", res.status, await res.text());
      return null;
    }
    const body = (await res.json()) as { data?: { code?: string } };
    return body.data?.code ?? null;
  } catch (e) {
    console.error("hi: PassQR create error", e);
    return null;
  }
}

async function tellVincent(p: Person, passCode: string | null, ref: string): Promise<boolean> {
  const key = process.env.IOTPUSH_API_KEY || process.env.IOTPUSH_TOPIC_KEY;
  if (!key) {
    console.error("hi: IOTPUSH_API_KEY not set — skipping alert");
    return false;
  }
  const headers: Record<string, string> = {
    "content-type": "application/json",
    authorization: `Bearer ${key}`,
  };
  const where = ref ? ` · via ${ref}` : "";
  try {
    const res = await fetch(IOTPUSH.url(IOTPUSH.topic), {
      method: "POST",
      headers,
      body: JSON.stringify({
        title: `Met ${p.name}`,
        message: `${p.email} signed in with ZapQR${where}. ${
          passCode ? `Card ${passCode} is in their wallet.` : "No pass issued — follow up by email."
        }`,
        priority: "high",
        ...(passCode ? { click_url: PASSQR.view(passCode) } : {}),
      }),
      signal: AbortSignal.timeout(TIMEOUT),
    });
    if (!res.ok) {
      console.error("hi: iotPush failed", res.status, await res.text());
      return false;
    }
    return true;
  } catch (e) {
    console.error("hi: iotPush error", e);
    return false;
  }
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  let tx: Tx | null = null;
  try {
    tx = JSON.parse(req.cookies.get(TX_COOKIE)?.value || "null");
  } catch {
    tx = null;
  }

  // Declined consent, cancelled sign-in, or an expired/foreign state.
  if (q.get("error")) return done(req, { e: "cancelled" });
  const code = q.get("code");
  if (!tx || !code || q.get("state") !== tx.s) return done(req, { e: "expired" });

  let person: Person | null = null;
  try {
    person = await signIn(code, tx.v);
  } catch (e) {
    console.error("hi: sign-in error", e);
  }
  if (!person) return done(req, { e: "signin" });

  const ref = cleanRef(tx.r);
  const passCode = await issuePass(person);
  const told = await tellVincent(person, passCode, ref);
  const n = told ? "1" : "0";

  return passCode ? done(req, { c: passCode, n }) : done(req, { e: "pass", n });
}
