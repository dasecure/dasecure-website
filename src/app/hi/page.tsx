import { CARD, cleanRef } from "./card";

const steps = [
  {
    product: "ZapQR",
    rule: "bg-lime-300",
    text: "You sign in with a passkey or a scan from your phone. No password, no form.",
  },
  {
    product: "PassQR",
    rule: "bg-emerald-400",
    text: "My card lands in your Apple or Google Wallet, with your name on it.",
  },
  {
    product: "iotPush",
    rule: "bg-orange-400",
    text: "My phone buzzes, so I know it was you and can follow up.",
  },
];

export default async function Hi({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  const r = cleanRef(ref);
  const start = `/api/hi/start${r ? `?ref=${r}` : ""}`;

  return (
    <>
      <p className="mt-12 text-xs font-mono tracking-widest text-lime-300/80">
        {CARD.event.toUpperCase()}
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight">
        Hi, I&apos;m Vincent.
      </h1>
      <p className="mt-3 text-gray-400">
        {CARD.title}. Tap below and my card goes straight into your wallet —
        the whole exchange runs on what we build.
      </p>

      <a
        href={start}
        data-cta="hi-signin"
        className="mt-8 flex items-center gap-4 w-full rounded-xl bg-lime-300 hover:bg-lime-200 text-black px-5 py-4 transition"
      >
        <span className="shrink-0 grid place-items-center w-10 h-10 rounded-lg bg-gray-950">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/zapqr-icon.svg" alt="" aria-hidden className="w-7 h-7 rounded" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-lg font-bold">Get my card</span>
          <span className="text-sm font-medium text-black/70">
            Sign in with ZapQR
          </span>
        </span>
        <span aria-hidden className="ml-auto text-xl">
          →
        </span>
      </a>
      <p className="mt-3 text-xs text-gray-500 leading-relaxed">
        Signing in shares your name and email with me, so the card carries your
        name and I know who to follow up with. No ZapQR account yet? You can
        make one on the next screen with a passkey.
      </p>

      <ol className="mt-10 space-y-5">
        {steps.map((s, i) => (
          <li key={s.product} className="flex gap-4">
            <div className="pt-1.5">
              <div className={`w-6 h-0.5 ${s.rule}`} />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-gray-100 font-semibold">
                {i + 1}. {s.product}.
              </span>{" "}
              {s.text}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-10 pt-6 border-t border-gray-800 text-sm">
        <a
          href="/hi/vcard"
          data-cta="hi-vcard"
          className="text-gray-400 hover:text-white underline underline-offset-4 transition"
        >
          Rather not sign in? Save my contact instead
        </a>
      </div>
    </>
  );
}
