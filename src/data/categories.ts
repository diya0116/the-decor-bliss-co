export interface Category {
  title: string;
  slug: string;
  /** Path to image in /public — Replace with actual product images */
  image: string;
}

export const categories: Category[] = [
  {
    title: "Wedding Hampers",
    slug: "wedding-hampers",
    image: "/gallery/wedding-hampers.jpg", // Replace with actual image
  },
  {
    title: "Trousseau Packing",
    slug: "trousseau-packing",
    image: "/gallery/trousseau-packing.jpg", // Replace with actual image
  },
  {
    title: "Karva Chauth Hampers",
    slug: "karva-chauth-hampers",
    image: "/gallery/karva-chauth.jpg", // Replace with actual image
  },
  {
    title: "Luxury Gift Boxes",
    slug: "luxury-gift-boxes",
    image: "/gallery/luxury-gift-boxes.jpg", // Replace with actual image
  },
  {
    title: "Bridal Room Decor",
    slug: "bridal-room-decor",
    image: "/gallery/bridal-room-decor.jpg", // Replace with actual image
  },
  {
    title: "Festive Gifting",
    slug: "festive-gifting",
    image: "/gallery/festive-gifting.jpg", // Replace with actual image
  },
];
