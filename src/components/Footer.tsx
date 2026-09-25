"use client";

import Link from "next/link";
import { SITE_NAME, EMAIL, ADDRESS, INSTAGRAM_URL } from "@/lib/constants";
import { whatsappDirectLink } from "@/lib/whatsapp";
import { gaEvent } from "@/lib/gtag";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brown-dark text-blush/90" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Top row */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            {/* Replace with your logo */}
            <Link href="/" aria-label="Home">
              <span className="font-serif text-2xl tracking-widest text-blush">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-blush/60">
              Premium trousseau packing, wedding hampers, bridal gifting and
              luxury personalised gift boxes in Patiala.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blush/50">
              Pages
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="hover:text-blush transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-blush transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blush transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blush transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-blush transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-blush transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blush/50">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                {/* Location pin SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 3.827 3.024ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-blush transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => gaEvent("instagram_click")}
                  className="hover:text-blush transition-colors"
                >
                  @thedecorbliss
                </a>
              </li>
              <li>
                <a
                  href={whatsappDirectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => gaEvent("whatsapp_click")}
                  className="hover:text-blush transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-blush/10" aria-hidden="true" />

        {/* Copyright */}
        <p className="text-center text-xs text-blush/40">
          &copy; {year} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
