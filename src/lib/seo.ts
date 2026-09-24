import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

interface SeoParams {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
}

/**
 * Generate consistent metadata for any page.
 * Usage:  export const metadata = buildMetadata({ title: "…", description: "…" });
 */
export function buildMetadata({
  title,
  description,
  keywords = [],
  path = "",
  ogImage = "/og-image.jpg", // Replace with your OG image
}: SeoParams): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
