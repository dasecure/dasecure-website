import { CARD, PASSQR, isPassCode } from "../card";

const why: Record<string, string> = {
  cancelled: "Sign-in was cancelled, so no card was issued.",
  expired: "That sign-in link expired. Give it another go.",
  signin: "Sign-in didn't complete on our side. Give it another go.",
  pass: "You're signed in, but the wallet card didn't issue. Here's my contact instead.",
  passTold:
    "You're signed in and I've been notified, but the wallet card didn't issue. Here's my contact instead.",
};

const products = [
  { name: "ZapQR", what: "signed you in", href: "https://zapqr.ai" },
  { name: "PassQR", what: "issued the card", href: "https://passqr.com" },
  { name: "iotPush", what: "told me it was you", href: "https://iotpush.com" },
];

export default async function Done({
  searchParams,
}: {
  searchParams: Promise<{ c?: string; e?: string; n?: string }>;
}) {
  const { c, e, n } = await searchParams;
  const told = n === "1";
  const code = isPassCode(c) ? c : null;

  if (!code) {
    const retry = e !== "pass";
    return (
      <>
        <h1 className="mt-14 text-3xl font-bold leading-tight">
          {retry ? "Not quite." : "Nearly there."}
        </h1>
        <p className="mt-3 text-gray-400">
          {e === "pass" && told ? why.passTold : why[e ?? ""] ?? why.signin}
        </p>
        <div className="mt-8 flex flex-col gap-3">
          {retry && (
            <a
              href="/api/hi/start"
              className="w-full text-center rounded-xl bg-lime-300 hover:bg-lime-200 text-black font-semibold px-6 py-4 transition"
            >
              Try Sign in with ZapQR again
            </a>
          )}
          <a
            href="/hi/vcard"
            className="w-full text-center rounded-xl border border-gray-700 hover:border-gray-500 px-6 py-4 transition"
          >
            Save my contact
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Or just email me:{" "}
          <a href={`mailto:${CARD.email}`} className="text-gray-300 underline">
            {CARD.email}
          </a>
        </p>
      </>
    );
  }

  return (
    <>
      <p className="mt-12 text-xs font-mono tracking-widest text-lime-300/80">
        SIGNED IN · CARD {code}
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight">
        Done. Add my card to your wallet.
      </h1>
      <p className="mt-3 text-gray-400">
        It carries my contact, where we met, and a note I can update later — it
        lands on your lock screen if I do.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href={PASSQR.apple(code)}
          data-cta="hi-apple-wallet"
          className="w-full text-center rounded-xl bg-white hover:bg-gray-200 text-black font-semibold px-6 py-4 transition"
        >
          Add to Apple Wallet
        </a>
        <a
          href={PASSQR.google(code)}
          data-cta="hi-google-wallet"
          className="w-full text-center rounded-xl border border-gray-600 hover:border-gray-400 font-semibold px-6 py-4 transition"
        >
          Save to Google Wallet
        </a>
        <a
          href="/hi/vcard"
          className="text-center text-sm text-gray-500 hover:text-gray-300 py-2 transition"
        >
          Save my contact to your phone too
        </a>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-800">
        <p className="text-sm text-gray-300 font-semibold mb-4">
          What just happened
        </p>
        <ul className="space-y-3">
          {products.filter((p) => told || p.name !== "iotPush").map((p) => (
            <li key={p.name} className="text-sm text-gray-400">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 font-semibold underline underline-offset-4 hover:text-lime-300"
              >
                {p.name}
              </a>{" "}
              {p.what}.
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-500">
          Want passwordless sign-in on your own site?{" "}
          <a
            href="https://zapqr.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-300 hover:text-lime-200 font-semibold"
          >
            zapqr.ai →
          </a>
        </p>
      </div>
    </>
  );
}
