import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'caresuite-landing-assets.s3.eu-central-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
