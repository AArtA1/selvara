import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saatva.imgix.net",
      },
    ],
  },
};

export default nextConfig;
