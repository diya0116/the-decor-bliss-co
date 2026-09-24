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
    name: "Client Name 1", // Replace with client name
    photo: "/client-1.jpg",
    review: "Paste review text here.", // Replace with actual review
  },
  {
    name: "Client Name 2", // Replace with client name
    photo: "/client-2.jpg",
    review: "Paste review text here.", // Replace with actual review
  },
  {
    name: "Client Name 3", // Replace with client name
    photo: "/client-3.jpg",
    review: "Paste review text here.", // Replace with actual review
  },
];
