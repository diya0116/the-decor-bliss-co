/**
 * Google Analytics 4 — utility for The Decor Bliss
 *
 * Usage:
 *   import { gaEvent } from "@/lib/gtag";
 *   gaEvent("whatsapp_click");
 *
 * This file is the single source of truth for all GA4 event names.
 * Add new event names to the GaEvent union type as needed.
 */

export const GA_MEASUREMENT_ID = "G-Y2XC6EFZ3N";

export type GaEvent =
  | "generate_lead"      // Enquiry form successfully submitted
  | "whatsapp_click"     // Any WhatsApp CTA clicked
  | "instagram_click"    // Instagram link clicked
  | "phone_call"         // Phone / call button clicked
  | "review_submit"      // Review form successfully submitted
  | "gallery_view";      // Gallery item opened

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    dataLayer: unknown[];
  }
}

/**
 * Fire a GA4 custom event.
 * Safe to call on server — no-ops if window is not available.
 */
export function gaEvent(action: GaEvent): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", action);
}
