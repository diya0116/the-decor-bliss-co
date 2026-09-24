import { whatsappDirectLink } from "@/lib/whatsapp";

const marqueeText =
  "SPECIAL KARVA CHAUTH HAMPERS  |  ORDER NOW  |  MAKE KARVA SPECIAL FOR YOUR DIL AND DAUGHTER";

export default function PromoStrip() {
  /* Repeat text enough times to fill the marquee seamlessly */
  const repeated = Array(6).fill(marqueeText).join("   •   ");

  return (
    <section
      className="bg-brown overflow-hidden py-3 md:py-4"
      aria-label="Promotional announcement"
    >
      <a
        href={whatsappDirectLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="animate-marquee whitespace-nowrap text-sm md:text-base tracking-wide text-blush/90">
          {repeated}
        </div>
      </a>
    </section>
  );
}
