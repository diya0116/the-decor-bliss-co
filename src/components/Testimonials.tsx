"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import SectionTitle from "./SectionTitle";

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
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-[calc((100vw-1024px)/2+24px)] scrollbar-hide"
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
            className="flex-shrink-0 snap-start w-[85vw] md:w-[320px] rounded-xl border border-brown/10 bg-white p-6 md:p-8"
          >
            {/* Customer photo placeholder */}
            <div className="mb-4 flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-brown/10">
                {/* Replace with customer photo */}
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-lg text-brown-dark">{t.name}</span>
            </div>
            {/* Review text placeholder — replace with actual client review */}
            <p className="text-sm leading-relaxed text-text/70">{t.review}</p>
          </article>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonial slides">
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
