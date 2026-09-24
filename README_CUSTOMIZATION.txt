========================================
THE DECOR BLISS - CUSTOMIZATION GUIDE
========================================

FOLDER STRUCTURE
================
the-decor-bliss/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, navbar, footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & Tailwind theme
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Auto-generated robots.txt
│   ├── gallery/page.tsx    # Gallery page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   ├── privacy-policy/     # Privacy policy
│   └── terms/              # Terms & conditions
├── src/
│   ├── components/         # All React components
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Hero.tsx
│   │   ├── ReelsSection.tsx
│   │   ├── CategoryCards.tsx
│   │   ├── PromoStrip.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsappButton.tsx
│   │   └── SectionTitle.tsx
│   ├── lib/                # Utilities
│   │   ├── constants.ts    # Site-wide constants (WhatsApp, email, etc.)
│   │   ├── whatsapp.ts     # WhatsApp link builder
│   │   └── seo.ts          # SEO metadata helper
│   └── data/               # Content data
│       ├── categories.ts
│       ├── testimonials.ts
│       ├── reels.ts
│       └── gallery.ts
└── public/                 # Static assets
    ├── logo.png            # Your brand logo
    ├── hero.jpg            # Hero background image
    ├── owner.jpg           # Owner/founder photo
    ├── og-image.jpg        # OpenGraph social sharing image
    ├── gallery/            # Gallery images
    └── reels/              # Instagram reel videos (.mp4)


WHERE TO CHANGE THE LOGO
=========================
1. Place your logo image at: public/logo.png
2. Update the Navbar component (src/components/Navbar.tsx):
   - Find the comment: {/* Replace with your logo image */}
   - Replace the <span> with: <Image src="/logo.png" alt="THE DECOR BLISS" width={...} height={...} />
3. Also update the Footer (src/components/Footer.tsx) the same way.


WHERE TO ADD THE HERO IMAGE
============================
1. Place your hero image at: public/hero.jpg
2. Open src/components/Hero.tsx
3. Find the comment: {/* Replace with hero image */}
4. Uncomment the <Image> tag and adjust as needed.


HOW TO ADD INSTAGRAM REELS
============================
1. Export your reel videos as .mp4 files (9:16 aspect ratio, under 10MB each)
2. Place them in: public/reels/ (e.g., reel1.mp4, reel2.mp4, reel3.mp4)
3. Open src/data/reels.ts
4. Update the array with your video paths and Instagram reel URLs:

   { video: "/reels/reel1.mp4", link: "https://www.instagram.com/reel/YOUR_ID/" }


HOW TO ADD GALLERY IMAGES
===========================
1. Place images in: public/gallery/
2. Open src/data/gallery.ts
3. Add or update image paths in the array.
4. The first 8 images appear on the home page preview.
5. All images appear on the gallery page.
6. Recommended: Square images, at least 800x800px, JPEG or WebP format.


HOW TO EDIT WHATSAPP MESSAGE
==============================
1. Open src/lib/whatsapp.ts
2. Modify the message template inside the createWhatsappLink() function.
3. To change the WhatsApp number, open src/lib/constants.ts and update WHATSAPP_NUMBER.
   Format: country code + number, no spaces or plus sign (e.g., "919876543210").


HOW TO CHANGE COLORS
======================
1. Open app/globals.css
2. Find the @theme inline block
3. Update the CSS custom properties:
   --color-brown:       Primary brand brown
   --color-brown-dark:  Dark brown (navbar, footer, overlays)
   --color-blush:       Blush pink (light accent)
   --color-sage:        Sage green (secondary accent)
   --color-cream:       Background color
   --color-text:        Main text color


HOW TO UPDATE SEO
==================
1. Home page SEO: app/page.tsx (the buildMetadata() call at the top)
2. Other pages: each page has its own metadata export
3. Global defaults: app/layout.tsx (the metadata export)
4. OG Image: place at public/og-image.jpg (1200x630px recommended)
5. Site URL: update SITE_URL in src/lib/constants.ts


HOW TO UPDATE TESTIMONIALS
============================
1. Open src/data/testimonials.ts
2. Replace placeholder names, photos, and review text with real client content.
3. Place client photos in public/gallery/ and update the photo paths.


HOW TO DEPLOY ON VERCEL
========================
1. Push your project to a GitHub repository.
2. Go to https://vercel.com and sign in with GitHub.
3. Click "Add New Project" and select your repository.
4. Framework Preset: Next.js (auto-detected).
5. Click "Deploy".
6. After deployment, add your custom domain in Vercel settings.
7. Update SITE_URL in src/lib/constants.ts with your actual domain.


ADDITIONAL NOTES
=================
- All images use next/image for automatic optimization.
- The contact form redirects to WhatsApp — no backend required.
- Mobile-first responsive design throughout.
- Search for "Replace" or "Add" comments in the code to find all customizable areas.
