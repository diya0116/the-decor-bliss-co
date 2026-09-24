"use client";

import { createWhatsappLink } from "@/lib/whatsapp";

/**
 * Floating WhatsApp button — bottom-right corner.
 * Opens WhatsApp with a default greeting message.
 */
export default function WhatsappButton() {
  const link = createWhatsappLink();

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:opacity-90 transition-opacity"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16.004 0C7.165 0 .002 7.163.002 16c0 2.825.737 5.58 2.137 8.012L.014 32l8.204-2.1A15.94 15.94 0 0 0 16.004 32C24.837 32 32 24.837 32 16S24.837 0 16.004 0Zm0 29.09a13.05 13.05 0 0 1-6.65-1.817l-.478-.283-4.94 1.266 1.316-4.79-.312-.495A13.04 13.04 0 0 1 2.912 16c0-7.217 5.875-13.09 13.092-13.09 7.218 0 13.087 5.873 13.087 13.09 0 7.218-5.87 13.09-13.087 13.09Zm7.176-9.8c-.393-.197-2.326-1.148-2.687-1.28-.36-.13-.623-.196-.886.198-.263.393-1.018 1.28-1.248 1.543-.23.263-.46.296-.853.099-.393-.197-1.66-.612-3.163-1.95-1.17-1.042-1.96-2.328-2.19-2.72-.23-.394-.025-.607.173-.803.178-.177.393-.46.59-.69.197-.23.263-.394.394-.657.132-.263.066-.493-.033-.69-.099-.197-.886-2.137-1.214-2.926-.32-.768-.645-.664-.886-.677l-.755-.013c-.263 0-.69.1-1.051.494-.361.394-1.379 1.348-1.379 3.288s1.412 3.813 1.609 4.076c.197.263 2.78 4.244 6.735 5.952.94.406 1.675.649 2.248.83.945.3 1.805.258 2.484.157.758-.113 2.326-.951 2.654-1.87.329-.918.329-1.705.23-1.87-.098-.164-.36-.262-.754-.46Z" />
      </svg>
    </a>
  );
}
