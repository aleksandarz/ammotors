// Set NEXT_PUBLIC_SITE_URL in Vercel once the real domain is connected;
// this fallback keeps metadata/sitemap URLs valid until then.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ammotors.rs";

export const siteName = "AM Motors";
