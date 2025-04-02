import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["gravatar.com"], // Add gravatar.com to the allowed domains
  },
};

export default nextConfig;
