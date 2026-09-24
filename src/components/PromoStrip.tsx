import { whatsappDirectLink } from "@/lib/whatsapp";

export default function PromoStrip() {
  return (
    <section
      className="bg-brown py-4 md:py-5"
      aria-label="Promotional announcement"
    >
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-3 px-6">
        <p className="text-center sm:text-left text-sm md:text-base tracking-wide text-blush/90">
          Special Karva Chauth Hampers&nbsp;&bull;&nbsp;Limited Orders Open
        </p>
        <a
          href={whatsappDirectLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-lg border border-blush/40 px-6 py-2 text-xs uppercase tracking-widest text-blush hover:bg-blush/10 transition-colors"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
