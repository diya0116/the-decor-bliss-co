"use client";

import { useState, type FormEvent } from "react";
import { createWhatsappLink } from "@/lib/whatsapp";
import { EMAIL, ADDRESS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/constants";
import { whatsappDirectLink } from "@/lib/whatsapp";

const contactCards = [
  {
    label: "Visit",
    value: ADDRESS,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 3.827 3.024ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+91 XXXXX XXXXX", // Replace with actual number
    href: whatsappDirectLink(),
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.82 14c-.25.7-1.48 1.35-2.06 1.43-.53.08-1.2.11-1.94-.12-.44-.14-1.01-.34-1.74-.67-3.06-1.37-5.05-4.47-5.2-4.67-.15-.2-1.24-1.65-1.24-3.15 0-1.5.78-2.24 1.06-2.55.28-.3.61-.38.81-.38.2 0 .41 0 .59.01.19.01.44-.07.69.53.25.6.86 2.1.94 2.25.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.54-.15.15-.3.31-.13.61.18.3.78 1.29 1.68 2.09 1.15.97 2.12 1.27 2.42 1.42.3.15.48.13.65-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.23.58.35.07.13.07.73-.18 1.43Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: `@${INSTAGRAM_HANDLE}`,
    href: INSTAGRAM_URL,
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 0 1 1.523.99 4.088 4.088 0 0 1 .99 1.524c.163.46.35 1.26.403 2.428.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 0 1-.99 1.523 4.088 4.088 0 0 1-1.524.99c-.46.163-1.26.35-2.428.403-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 0 1-1.523-.99 4.088 4.088 0 0 1-.99-1.524c-.163-.46-.35-1.26-.403-2.428C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 0 1 .99-1.523A4.088 4.088 0 0 1 5.15 2.636c.46-.163 1.26-.35 2.428-.403C8.846 2.175 9.226 2.163 12 2.163ZM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.905.333 4.14.63a5.876 5.876 0 0 0-2.126 1.384A5.876 5.876 0 0 0 .63 4.14C.333 4.905.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.261 2.148.558 2.913a5.876 5.876 0 0 0 1.384 2.126A5.876 5.876 0 0 0 4.14 23.37c.765.297 1.636.5 2.913.558C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.148-.261 2.913-.558a5.876 5.876 0 0 0 2.126-1.384 5.876 5.876 0 0 0 1.384-2.126c.297-.765.5-1.636.558-2.913.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.261-2.148-.558-2.913a5.876 5.876 0 0 0-1.384-2.126A5.876 5.876 0 0 0 19.86.63C19.095.333 18.225.13 16.947.072 15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    occasion: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const link = createWhatsappLink(form.name, form.occasion, form.message);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-brown/5 py-20 md:py-28 text-center px-6">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown-dark tracking-wide">
          Let&apos;s Create Something Beautiful
        </h1>
        <div className="mt-5 mx-auto w-16 h-px bg-brown" aria-hidden="true" />
      </section>

      {/* Contact cards */}
      <section className="py-16 md:py-24 px-6" aria-label="Contact information">
        <div className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card) => {
            const cardContent = (
              <>
                <div className="mb-3 text-brown">{card.icon}</div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-text/50 mb-1">
                  {card.label}
                </h2>
                <p className="text-sm text-brown-dark font-medium">
                  {card.value}
                </p>
              </>
            );

            const cardClass =
              "flex flex-col items-center text-center rounded-xl border border-brown/10 bg-white p-6 hover:border-brown/20 transition-colors";

            if (card.href) {
              return (
                <a
                  key={card.label}
                  href={card.href}
                  className={cardClass}
                  {...(card.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div key={card.label} className={cardClass}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact form */}
      <section className="pb-16 md:pb-24 px-6" aria-label="Contact form">
        <div className="mx-auto max-w-xl">
          <h2 className="font-serif text-2xl md:text-3xl text-brown-dark tracking-wide text-center mb-8">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-xs uppercase tracking-[0.15em] text-text/50 mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-brown/15 bg-white px-4 py-3 text-sm text-text placeholder:text-text/30 focus:border-brown focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-xs uppercase tracking-[0.15em] text-text/50 mb-2">
                Phone
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-brown/15 bg-white px-4 py-3 text-sm text-text placeholder:text-text/30 focus:border-brown focus:outline-none"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label htmlFor="contact-occasion" className="block text-xs uppercase tracking-[0.15em] text-text/50 mb-2">
                Occasion
              </label>
              <select
                id="contact-occasion"
                value={form.occasion}
                onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                className="w-full rounded-lg border border-brown/15 bg-white px-4 py-3 text-sm text-text focus:border-brown focus:outline-none appearance-none"
              >
                <option value="">Select an occasion</option>
                <option value="Wedding">Wedding</option>
                <option value="Trousseau">Trousseau</option>
                <option value="Karva Chauth">Karva Chauth</option>
                <option value="Festive Gifting">Festive Gifting</option>
                <option value="Bridal Room Decor">Bridal Room Decor</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs uppercase tracking-[0.15em] text-text/50 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-brown/15 bg-white px-4 py-3 text-sm text-text placeholder:text-text/30 focus:border-brown focus:outline-none resize-none"
                placeholder="Tell us about your requirements…"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-brown py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-blush hover:bg-brown-dark transition-colors"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
