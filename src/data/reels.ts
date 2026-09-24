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
    link: "https://www.instagram.com/reel/DdgcN_pSSE0/",
  },
  {
    video: "/reels/reel2.mp4",
    link: "https://www.instagram.com/reel/DdUJ5dhybdW/",
  },
  {
    video: "/reels/reel3.mp4",
    link: "https://www.instagram.com/reel/DdoiUafSVEB/",
  },
  {
    video: "/reels/reel4.mp4",
    link: "https://www.instagram.com/reel/DdZMsn3SCP7/",
  },
  {
    video: "/reels/reel5.mp4",
    link: "https://www.instagram.com/reel/DdgcN_pSSE0/",
  },
  {
    video: "/reels/reel6.mp4",
    link: "https://www.instagram.com/reel/Ddl_Xo7yml6/",
  },
];
