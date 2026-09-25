"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_NAME, INSTAGRAM_URL } from "@/lib/constants";
import { whatsappDirectLink } from "@/lib/whatsapp";
import { gaEvent } from "@/lib/gtag";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 h-[72px] bg-brown shadow-sm"
      role="banner"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Mobile: hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center text-blush lg:hidden"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center">
          {/* Replace with your logo image: <Image src="/logo.png" … /> */}
          <span className="font-serif text-lg md:text-xl tracking-[0.15em] text-blush">
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest uppercase text-blush/80 hover:text-blush transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Instagram icon */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            onClick={() => gaEvent("instagram_click")}
            className="text-blush/80 hover:text-blush transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 0 1 1.523.99 4.088 4.088 0 0 1 .99 1.524c.163.46.35 1.26.403 2.428.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 0 1-.99 1.523 4.088 4.088 0 0 1-1.524.99c-.46.163-1.26.35-2.428.403-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 0 1-1.523-.99 4.088 4.088 0 0 1-.99-1.524c-.163-.46-.35-1.26-.403-2.428C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 0 1 .99-1.523A4.088 4.088 0 0 1 5.15 2.636c.46-.163 1.26-.35 2.428-.403C8.846 2.175 9.226 2.163 12 2.163ZM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.905.333 4.14.63a5.876 5.876 0 0 0-2.126 1.384A5.876 5.876 0 0 0 .63 4.14C.333 4.905.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.261 2.148.558 2.913a5.876 5.876 0 0 0 1.384 2.126A5.876 5.876 0 0 0 4.14 23.37c.765.297 1.636.5 2.913.558C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.148-.261 2.913-.558a5.876 5.876 0 0 0 2.126-1.384 5.876 5.876 0 0 0 1.384-2.126c.297-.765.5-1.636.558-2.913.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.261-2.148-.558-2.913a5.876 5.876 0 0 0-1.384-2.126A5.876 5.876 0 0 0 19.86.63C19.095.333 18.225.13 16.947.072 15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
            </svg>
          </a>

          {/* WhatsApp button */}
          <a
            href={whatsappDirectLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => gaEvent("whatsapp_click")}
            className="rounded-lg border border-blush/40 px-5 py-2 text-xs uppercase tracking-widest text-blush hover:bg-blush/10 transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile: Instagram icon */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          onClick={() => gaEvent("instagram_click")}
          className="flex h-11 w-11 items-center justify-center text-blush lg:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 0 1 1.523.99 4.088 4.088 0 0 1 .99 1.524c.163.46.35 1.26.403 2.428.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 0 1-.99 1.523 4.088 4.088 0 0 1-1.524.99c-.46.163-1.26.35-2.428.403-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 0 1-1.523-.99 4.088 4.088 0 0 1-.99-1.524c-.163-.46-.35-1.26-.403-2.428C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 0 1 .99-1.523A4.088 4.088 0 0 1 5.15 2.636c.46-.163 1.26-.35 2.428-.403C8.846 2.175 9.226 2.163 12 2.163ZM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.905.333 4.14.63a5.876 5.876 0 0 0-2.126 1.384A5.876 5.876 0 0 0 .63 4.14C.333 4.905.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.261 2.148.558 2.913a5.876 5.876 0 0 0 1.384 2.126A5.876 5.876 0 0 0 4.14 23.37c.765.297 1.636.5 2.913.558C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.148-.261 2.913-.558a5.876 5.876 0 0 0 2.126-1.384 5.876 5.876 0 0 0 1.384-2.126c.297-.765.5-1.636.558-2.913.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.261-2.148-.558-2.913a5.876 5.876 0 0 0-1.384-2.126A5.876 5.876 0 0 0 19.86.63C19.095.333 18.225.13 16.947.072 15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
          </svg>
        </a>
      </div>

      {/* Mobile menu overlay */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
