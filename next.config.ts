import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@tsparticles/react", "@tsparticles/engine", "@tsparticles/slim", "tsparticles"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
