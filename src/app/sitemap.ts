import type { MetadataRoute } from "next";

/* lastModified is the date the page's content last changed — keep it
 * honest; a sitemap that says "today" on every build is ignored. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dasecure.com",
      lastModified: new Date("2026-09-27"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://dasecure.com/support",
      lastModified: new Date("2026-09-27"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://dasecure.com/voice-cloner",
      lastModified: new Date("2026-09-27"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://dasecure.com/privacy",
      lastModified: new Date("2026-09-27"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
