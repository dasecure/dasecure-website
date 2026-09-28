import { readFile } from "node:fs/promises";
import path from "node:path";
import { faqs, SITE_URL } from "../faq";

/* /llms-full.txt = /llms.txt + the home-page FAQ, generated from the same
 * faq.ts the visible FAQ and the FAQPage JSON-LD use, so it never drifts. */

export const dynamic = "force-static";

export async function GET() {
  const head = await readFile(
    path.join(process.cwd(), "public", "llms.txt"),
    "utf8",
  );
  const body = [
    head.trimEnd(),
    "",
    "## Frequently asked questions",
    "",
    `Source: ${SITE_URL}/#faq`,
    "",
    ...faqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
  ].join("\n");
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
