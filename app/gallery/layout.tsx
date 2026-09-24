import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our collection of luxury wedding hampers, trousseau packing, and gifting presentations by THE DECOR BLISS.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
