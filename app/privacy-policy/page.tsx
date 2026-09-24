import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | THE DECOR BLISS",
  description: "Privacy policy for THE DECOR BLISS website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-brown/5 py-20 md:py-28 text-center px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-brown-dark tracking-wide">
          Privacy Policy
        </h1>
        <div className="mt-5 mx-auto w-16 h-px bg-brown" aria-hidden="true" />
      </section>

      <section className="py-16 md:py-24 px-6">
        <article className="prose prose-sm mx-auto max-w-3xl text-text/70">
          {/* Replace with your actual privacy policy */}
          <h2 className="font-serif text-xl text-brown-dark">Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide when
            contacting us through WhatsApp or our contact form, including your
            name, phone number, and message content.
          </p>

          <h2 className="font-serif text-xl text-brown-dark mt-8">How We Use Your Information</h2>
          <p>
            Your information is used solely to respond to your enquiries and
            provide our luxury gifting services. We do not sell, rent, or share
            your personal information with third parties.
          </p>

          <h2 className="font-serif text-xl text-brown-dark mt-8">Third-Party Services</h2>
          <p>
            Our website may contain links to third-party services such as
            WhatsApp and Instagram. Please review their respective privacy
            policies.
          </p>

          <h2 className="font-serif text-xl text-brown-dark mt-8">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please reach out to
            us at hello@thedecorbliss.in.
          </p>
        </article>
      </section>
    </>
  );
}
