import Image from "next/image";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Story | THE DECOR BLISS",
  description:
    "Learn about THE DECOR BLISS — our journey, our craft, and the passion behind every luxury gifting experience in Patiala.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brown/5 py-20 md:py-28 text-center px-6">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown-dark tracking-wide">
          Our Story
        </h1>
        <div className="mt-5 mx-auto w-16 h-px bg-brown" aria-hidden="true" />
      </section>

      {/* Section 1: About the brand */}
      <section className="py-16 md:py-24 px-6" aria-label="About the brand">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-brown/10">
            {/* Replace with brand image */}
            <Image
              src="/gallery/about-brand.jpg"
              alt="THE DECOR BLISS craftsmanship"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right text */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-brown-dark tracking-wide mb-6">
              About THE DECOR BLISS
            </h2>
            {/* Replace with actual brand story */}
            <p className="text-sm md:text-base leading-relaxed text-text/70 mb-4">
              At THE DECOR BLISS, we believe every celebration deserves an
              extraordinary touch. Based in Patiala, Punjab, we specialise in
              crafting luxury wedding hampers, trousseau packing, and bespoke
              gifting experiences that leave a lasting impression.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-text/70">
              Every detail — from the selection of materials to the final ribbon
              — is thoughtfully curated to reflect elegance, warmth, and the
              joy of giving. Our creations are more than gifts; they are
              cherished memories waiting to unfold.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: About the owner */}
      <section className="py-16 md:py-24 px-6 bg-blush/30" aria-label="About the founder">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left text */}
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-2xl md:text-3xl text-brown-dark tracking-wide mb-6">
              The Heart Behind the Brand
            </h2>
            {/* Replace with owner bio */}
            <p className="text-sm md:text-base leading-relaxed text-text/70 mb-4">
              Founded with a vision to redefine gifting culture in India,
              THE DECOR BLISS is led by a passionate creator who blends
              artistry with attention to detail.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-text/70">
              With years of experience in luxury presentation and event
              styling, every project is a personal endeavour to make your
              celebrations unforgettable.
            </p>
          </div>

          {/* Right image — diagonal clip */}
          <div className="order-1 md:order-2">
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-xl bg-brown/10"
              style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
            >
              {/* Replace owner photograph */}
              <Image
                src="/owner.jpg"
                alt="Founder of THE DECOR BLISS"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Values */}
      <section className="py-16 md:py-24 px-6" aria-label="Our values">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-brown-dark tracking-wide">
            What We Stand For
          </h2>
          <div className="mt-5 mx-auto w-16 h-px bg-brown" aria-hidden="true" />
        </div>

        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-10 md:gap-12">
          {/* Value 1 */}
          <div className="text-center">
            <h3 className="font-serif text-xl text-brown-dark mb-3 tracking-wide">
              Craftsmanship
            </h3>
            <p className="text-sm leading-relaxed text-text/60">
              Every piece is handcrafted with precision and care, ensuring each
              creation is a work of art that reflects our commitment to
              excellence.
            </p>
          </div>

          {/* Value 2 */}
          <div className="text-center">
            <h3 className="font-serif text-xl text-brown-dark mb-3 tracking-wide">
              Personalisation
            </h3>
            <p className="text-sm leading-relaxed text-text/60">
              We believe every gift should tell a story. Our bespoke approach
              ensures your vision is brought to life with personal touches that
              matter.
            </p>
          </div>

          {/* Value 3 */}
          <div className="text-center">
            <h3 className="font-serif text-xl text-brown-dark mb-3 tracking-wide">
              Luxury Presentation
            </h3>
            <p className="text-sm leading-relaxed text-text/60">
              From the first glance to the final unboxing, we curate an
              experience that feels as special as the occasion it celebrates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
