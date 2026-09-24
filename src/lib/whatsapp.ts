import { WHATSAPP_NUMBER } from "./constants";

/**
 * Build an encoded WhatsApp click-to-chat URL.
 *
 * @param name      – Customer name
 * @param occasion  – e.g. "Wedding / Trousseau"
 * @param message   – Free-form message body
 */
export function createWhatsappLink(
  name?: string,
  occasion?: string,
  message?: string
): string {
  const parts: string[] = [`Hello THE DECOR BLISS,`];

  if (name) {
    parts.push(`My name is ${name}.`);
  }

  if (occasion) {
    parts.push(`I'm looking for ${occasion} gifting.`);
  }

  if (message) {
    parts.push(`Message: ${message}`);
  }

  const text = encodeURIComponent(parts.join(" "));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/** Quick link with no pre-filled message */
export function whatsappDirectLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}
