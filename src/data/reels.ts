export interface Reel {
  /** Path to video file in /public/reels/ */
  video: string;
  /** Instagram reel URL — clicking opens this link */
  link: string;
}

/**
 * Add your Instagram reels here.
 * Place .mp4 files in public/reels/ and update the paths below.
 */
export const reels: Reel[] = [
  {
    video: "/reels/reel1.mp4", // Replace with client reel
    link: "https://www.instagram.com/reel/REPLACE_REEL_ID_1/", // Replace with Instagram reel URL
  },
  {
    video: "/reels/reel2.mp4", // Replace with client reel
    link: "https://www.instagram.com/reel/REPLACE_REEL_ID_2/", // Replace with Instagram reel URL
  },
  {
    video: "/reels/reel3.mp4", // Replace with client reel
    link: "https://www.instagram.com/reel/REPLACE_REEL_ID_3/", // Replace with Instagram reel URL
  },
];
