export interface Testimonial {
  /** Replace with client name */
  name: string;
  /** Replace with client photo path in /public */
  photo: string;
  /** Replace with actual client review */
  review: string;
}

/**
 * Placeholder testimonials — replace with real client content.
 * DO NOT publish with placeholder text.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Client Name 1", // Replace with client name
    photo: "/gallery/client1.jpg", // Replace with client photo
    review:
      "Review text placeholder. Replace with the actual testimonial from this client.", // Replace with actual review
  },
  {
    name: "Client Name 2", // Replace with client name
    photo: "/gallery/client2.jpg", // Replace with client photo
    review:
      "Review text placeholder. Replace with the actual testimonial from this client.", // Replace with actual review
  },
  {
    name: "Client Name 3", // Replace with client name
    photo: "/gallery/client3.jpg", // Replace with client photo
    review:
      "Review text placeholder. Replace with the actual testimonial from this client.", // Replace with actual review
  },
];
