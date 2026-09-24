"use client";

import { useRef, useEffect, useCallback } from "react";
import { reels } from "@/data/reels";
import SectionTitle from "./SectionTitle";

export default function ReelsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  /* Autoplay videos when they scroll into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((v) => v && observer.observe(v));
    return () => observer.disconnect();
  }, []);

  /* When a reel finishes, scroll to the next one */
  const handleEnded = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const nextIndex = index + 1;
    if (nextIndex >= reels.length) return;

    const children = container.children;
    const nextChild = children[nextIndex] as HTMLElement | undefined;
    if (nextChild) {
      nextChild.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  }, []);

  return (
    <section className="py-16 md:py-24" aria-label="Instagram Reels">
      <SectionTitle heading="Our Craft in Motion" />

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 md:px-[calc((100vw-1280px)/2+24px)] scrollbar-hide"
      >
        {reels.map((reel, i) => (
          <a
            key={i}
            href={reel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 snap-start w-[80vw] md:w-[30%] aspect-[9/16] rounded-xl overflow-hidden bg-brown/10"
            aria-label={`Watch reel ${i + 1} on Instagram`}
          >
            {/* Replace with client reel */}
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              src={reel.video}
              muted
              loop={false}
              playsInline
              preload="metadata"
              onEnded={() => handleEnded(i)}
              className="h-full w-full object-cover"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
