import { createWhatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  const enquireLink = createWhatsappLink(undefined, "Wedding / Trousseau");
  const chatLink = createWhatsappLink();

  return (
    <section
      className="relative flex h-[100dvh] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Replace with hero image */}
      {/* <Image src="/hero.jpg" alt="THE DECOR BLISS luxury gifting" fill className="object-cover" priority /> */}
      <div className="absolute inset-0 bg-brown-dark/60" aria-hidden="true" />

      {/* Add hero image here — use a full-bleed background image */}
      <div className="absolute inset-0 bg-brown/30" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide text-blush leading-tight">
          THE DECOR BLISS
        </h1>

        <p className="mt-4 text-sm md:text-base tracking-[0.3em] uppercase text-blush/70">
          Wedding &nbsp;|&nbsp; Trousseau &nbsp;|&nbsp; Luxury Gifts
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={enquireLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-lg bg-blush px-8 text-xs font-semibold uppercase tracking-[0.2em] text-brown-dark hover:bg-blush/90 transition-colors"
          >
            Enquire Now
          </a>
          <a
            href={chatLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-lg border border-blush/40 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-blush hover:bg-blush/10 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator — no bounce */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blush/50" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
}
