import { NextRequest, NextResponse } from "next/server";
import { createHash, randomBytes } from "node:crypto";
import { TX_COOKIE, ZAPQR, cleanRef } from "../../../hi/card";

const b64url = (b: Buffer) => b.toString("base64url");

/* GET /api/hi/start → 302 to auth.zapqr.ai with a fresh PKCE pair.
 * The verifier and state ride in an httpOnly cookie scoped to /api/hi, so
 * no server state and no shared secret are needed. */
export function GET(req: NextRequest) {
  const verifier = b64url(randomBytes(32));
  const challenge = b64url(createHash("sha256").update(verifier).digest());
  const state = b64url(randomBytes(16));
  const ref = cleanRef(req.nextUrl.searchParams.get("ref"));

  const auth = new URL(ZAPQR.authorize);
  auth.searchParams.set("client_id", ZAPQR.clientId);
  auth.searchParams.set("redirect_uri", ZAPQR.redirectUri);
  auth.searchParams.set("response_type", "code");
  auth.searchParams.set("scope", ZAPQR.scope);
  auth.searchParams.set("code_challenge", challenge);
  auth.searchParams.set("code_challenge_method", "S256");
  auth.searchParams.set("state", state);

  const res = NextResponse.redirect(auth.toString(), 302);
  res.cookies.set(TX_COOKIE, JSON.stringify({ s: state, v: verifier, r: ref }), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/api/hi",
    maxAge: 600,
  });
  res.headers.set("Cache-Control", "no-store");
  return res;
}
