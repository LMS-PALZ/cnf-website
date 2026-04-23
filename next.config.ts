import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/skill-scale-up",
        destination: "/programmes/skill-scale-up",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
