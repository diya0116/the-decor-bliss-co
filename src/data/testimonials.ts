export interface Testimonial {
  name: string;
  photo: string;
  review: string;
}

/**
 * ========================================================
 * PASTE YOUR CLIENT REVIEWS HERE
 * ========================================================
 * For each testimonial, replace the name and review text.
 * Client photos are already in place (client-1.jpg, etc.)
 * You can add more entries by copying an existing block.
 * DO NOT publish with placeholder text.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Simran",
    photo: "/client-1.jpg",
    review:
      "The trousseau packing was absolutely beautiful. Every box looked luxurious and was finished with so much attention to detail. Highly recommended!",
  },
  {
    name: "Anish",
    photo: "/client-2.jpg",
    review:
      "Our wedding hampers turned out even better than we imagined. Elegant, premium, and delivered exactly on time. Everyone loved them.",
  },
  {
    name: "Mehak",
    photo: "/client-3.jpg",
    review:
      "From the color palette to the final styling, everything felt so thoughtfully curated. The Decor Bliss made our gifts look truly special.",
  },
];
