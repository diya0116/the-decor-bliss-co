"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-brown/5 py-20 md:py-28 text-center px-6">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown-dark tracking-wide">
          Our Gallery
        </h1>
        <p className="mt-4 text-sm md:text-base text-text/60 tracking-wide max-w-xl mx-auto">
          Elegant gifting, handcrafted presentation and timeless celebrations.
        </p>
        <div className="mt-5 mx-auto w-16 h-px bg-brown" aria-hidden="true" />
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 px-6" aria-label="Gallery grid">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative aspect-square overflow-hidden rounded-xl bg-brown/10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brown"
              aria-label={`View gallery image ${i + 1}`}
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
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brown-dark/90"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 h-11 w-11 flex items-center justify-center text-blush z-10"
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 h-11 w-11 flex items-center justify-center text-blush z-10"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh] md:w-[70vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 h-11 w-11 flex items-center justify-center text-blush z-10"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
