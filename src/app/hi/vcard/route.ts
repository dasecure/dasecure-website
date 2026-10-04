import { CARD } from "../card";

/* GET /hi/vcard → Vincent's contact as a .vcf, for anyone who would rather
 * not sign in (and as the fallback when the wallet pass can't issue). */
export function GET() {
  const [first, ...rest] = CARD.name.split(" ");
  const last = rest.join(" ");
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${last};${first};;;`,
    `FN:${CARD.name}`,
    "ORG:DaSecure Solutions LLC",
    `TITLE:${CARD.title.replace(/,.*$/, "")}`,
    `EMAIL;TYPE=INTERNET,WORK:${CARD.email}`,
    `URL:${CARD.web}`,
    `NOTE:Met at ${CARD.event}`,
    "END:VCARD",
    "",
  ].join("\r\n");

  return new Response(vcf, {
    headers: {
      "content-type": "text/vcard; charset=utf-8",
      "content-disposition": 'attachment; filename="vincent-dasecure.vcf"',
      "cache-control": "public, max-age=3600",
    },
  });
}
