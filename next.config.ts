import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Set to true while using placeholder images that don't exist yet.
       Remove this once real images are added for production optimization. */
    unoptimized: true,
  },
};

export default nextConfig;
