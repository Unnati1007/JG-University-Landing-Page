import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@tsparticles/react", "@tsparticles/engine", "@tsparticles/slim", "tsparticles"],
};

export default nextConfig;
