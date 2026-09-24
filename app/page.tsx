import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import ReelsSection from "@/components/ReelsSection";
import CategoryCards from "@/components/CategoryCards";
import PromoStrip from "@/components/PromoStrip";
import Testimonials from "@/components/Testimonials";
import SectionTitle from "@/components/SectionTitle";
import { galleryImages } from "@/data/gallery";

export const metadata = buildMetadata({
  title: "THE DECOR BLISS | Luxury Wedding Hampers & Trousseau in Patiala",
  description:
    "Premium trousseau packing, wedding hampers, bridal gifting and luxury personalised gift boxes in Patiala.",
  keywords: [
    "Wedding Hampers Patiala",
    "Trousseau Packing",
    "Bridal Gifts Punjab",
    "Luxury Gift Boxes",
    "Karva Chauth Hampers",
  ],
  path: "/",
});

export default function Home() {
  const previewImages = galleryImages.slice(0, 8);

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Instagram Reels */}
      <ReelsSection />

      {/* 3. What We Curate */}
      <CategoryCards />

      {/* 4. Promotional Strip */}
      <PromoStrip />

      {/* 5. Gallery Preview */}
      <section className="py-16 md:py-24 px-6" aria-label="Gallery Preview">
        <SectionTitle heading="Our Work" subtitle="A glimpse of our craft" />

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {previewImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-xl bg-brown/10"
            >
              {/* Add gallery images */}
              <Image
                src={img}
                alt={`Gallery image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-brown/30 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-brown-dark hover:bg-brown/5 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* 6. Testimonials */}
      <Testimonials />
    </>
  );
}
