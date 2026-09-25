"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import SectionTitle from "./SectionTitle";

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex gap-1" role="group" aria-label="Star rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${
            star <= value
              ? "fill-amber-400 text-amber-400"
              : "fill-brown/15 text-brown/15"
          }`}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement | undefined;
    if (child) {
      child.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      setActive(index);
    }
  }, []);

  return (
    <section className="py-16 md:py-24" aria-label="Testimonials">
      <SectionTitle heading="Hear From Our Customers" />

      {/* Sliding cards */}
      <div
        ref={scrollRef}
        className={`flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 scrollbar-hide ${
          testimonials.length <= 3 ? "md:justify-center" : "md:px-[calc((100vw-1024px)/2+24px)]"
        }`}
        onScroll={() => {
          const container = scrollRef.current;
          if (!container) return;
          const scrollLeft = container.scrollLeft;
          const childWidth = (container.firstElementChild as HTMLElement)?.offsetWidth ?? 1;
          setActive(Math.round(scrollLeft / (childWidth + 24)));
        }}
      >
        {testimonials.map((t, i) => (
          <article
            key={i}
            className="flex-shrink-0 snap-center w-[85vw] md:w-[380px] rounded-xl border border-brown/10 bg-white p-6 md:p-8 hover:border-brown/20 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-brown/10">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <span className="font-serif text-base text-brown-dark">{t.name}</span>
              </div>
              <StarRating value={t.rating || 5} />
            </div>
            {t.review && (
              <p className="text-sm leading-relaxed text-text/70 mt-2">{t.review}</p>
            )}
          </article>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonial slides">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === active ? "bg-brown" : "bg-brown/20"
            }`}
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
