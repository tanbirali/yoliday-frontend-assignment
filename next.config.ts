import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gravatar.com/",
        port: "",
        pathname: "/avatar/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
