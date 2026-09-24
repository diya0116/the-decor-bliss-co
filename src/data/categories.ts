export interface Category {
  title: string;
  slug: string;
  /** Path to image in /public */
  image: string;
}

export const categories: Category[] = [
  {
    title: "Wedding Hampers",
    slug: "wedding-hampers",
    image: "/gallery/wedding-hampers.jpeg",
  },
  {
    title: "Trousseau Packing",
    slug: "trousseau-packing",
    image: "/gallery/trousseau-packing.jpeg",
  },
  {
    title: "Karva Chauth Hampers",
    slug: "karva-chauth-hampers",
    image: "/gallery/karva-chauth.jpg",
  },
  {
    title: "Luxury Gift Boxes",
    slug: "luxury-gift-boxes",
    image: "/gallery/luxury-gift-boxes.jpg",
  },
  {
    title: "Corporate Gifting",
    slug: "corporate-gifting",
    image: "/gallery/corporate-gifting.jpeg",
  },
  {
    title: "Festive Gifting",
    slug: "festive-gifting",
    image: "/gallery/festive-gifting.jpg",
  },
];
