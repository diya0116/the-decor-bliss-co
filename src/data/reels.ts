export interface Reel {
  /** Path to video file in /public/reels/ */
  video: string;
  /**
   * Instagram reel URL — clicking the reel opens this link.
   * HOW TO GET THE LINK: Open your reel on Instagram → tap ⋯ → Copy Link → paste below.
   */
  link: string;
}

/**
 * ========================================================
 * PASTE YOUR INSTAGRAM REEL LINKS HERE
 * ========================================================
 * For each reel, replace the `link` value with your actual
 * Instagram reel URL. The video files are already in place.
 * You can add more reels by copying an entry and adding
 * the new .mp4 file to public/reels/.
 */
export const reels: Reel[] = [
  {
    video: "/reels/reel1.mp4",
    link: "https://www.instagram.com/reel/PASTE_REEL_1_LINK_HERE/",
  },
  {
    video: "/reels/reel2.mp4",
    link: "https://www.instagram.com/reel/PASTE_REEL_2_LINK_HERE/",
  },
  {
    video: "/reels/reel3.mp4",
    link: "https://www.instagram.com/reel/PASTE_REEL_3_LINK_HERE/",
  },
  {
    video: "/reels/reel4.mp4",
    link: "https://www.instagram.com/reel/PASTE_REEL_4_LINK_HERE/",
  },
  {
    video: "/reels/reel5.mp4",
    link: "https://www.instagram.com/reel/PASTE_REEL_5_LINK_HERE/",
  },
  {
    video: "/reels/reel6.mp4",
    link: "https://www.instagram.com/reel/PASTE_REEL_6_LINK_HERE/",
  },
];
