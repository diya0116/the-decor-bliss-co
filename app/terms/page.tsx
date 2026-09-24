import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions | THE DECOR BLISS",
  description: "Terms and conditions for THE DECOR BLISS website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <section className="bg-brown/5 py-20 md:py-28 text-center px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-brown-dark tracking-wide">
          Terms &amp; Conditions
        </h1>
        <div className="mt-5 mx-auto w-16 h-px bg-brown" aria-hidden="true" />
      </section>

      <section className="py-16 md:py-24 px-6">
        <article className="prose prose-sm mx-auto max-w-3xl text-text/70">
          {/* Replace with your actual terms and conditions */}
          <h2 className="font-serif text-xl text-brown-dark">General Terms</h2>
          <p>
            By accessing and using the THE DECOR BLISS website, you agree to be
            bound by these terms and conditions. We reserve the right to modify
            these terms at any time without prior notice.
          </p>

          <h2 className="font-serif text-xl text-brown-dark mt-8">Orders &amp; Payments</h2>
          <p>
            All orders are placed through WhatsApp communication. Pricing,
            availability, and delivery timelines are confirmed during the
            consultation process. Payment terms will be discussed at the time of
            order confirmation.
          </p>

          <h2 className="font-serif text-xl text-brown-dark mt-8">Cancellations</h2>
          <p>
            Cancellation policies vary based on the nature and timeline of the
            order. Please discuss cancellation terms during the order process.
          </p>

          <h2 className="font-serif text-xl text-brown-dark mt-8">Intellectual Property</h2>
          <p>
            All content, images, and designs on this website are the property of
            THE DECOR BLISS and may not be reproduced without written consent.
          </p>
        </article>
      </section>
    </>
  );
}
