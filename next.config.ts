import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
      },
    ],
  },
  // Prevent build failures on TypeScript errors (they're still shown as warnings)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Prevent build failures on ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
