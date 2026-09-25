"use client";

import Link from "next/link";
import { INSTAGRAM_URL } from "@/lib/constants";
import { whatsappDirectLink } from "@/lib/whatsapp";
import { gaEvent } from "@/lib/gtag";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-brown-dark lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Close button */}
      <div className="flex h-[72px] items-center justify-between px-6">
        <span className="font-serif text-xl tracking-widest text-blush">
          THE DECOR BLISS
        </span>
        <button
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center text-blush"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Nav items */}
      <nav className="mt-8 px-6" aria-label="Mobile navigation">
        <ul className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block font-serif text-2xl tracking-wide text-blush hover:text-blush/70 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Divider */}
          <li aria-hidden="true">
            <div className="my-4 h-px bg-blush/10" />
          </li>

          {/* WhatsApp */}
          <li>
            <a
              href={whatsappDirectLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { gaEvent("whatsapp_click"); onClose(); }}
              className="block font-serif text-2xl tracking-wide text-blush hover:text-blush/70 transition-colors"
            >
              WhatsApp
            </a>
          </li>

          {/* Instagram */}
          <li>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { gaEvent("instagram_click"); onClose(); }}
              className="block font-serif text-2xl tracking-wide text-blush hover:text-blush/70 transition-colors"
            >
              Instagram
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
