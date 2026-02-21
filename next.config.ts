import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/homepage",
        destination: "/",
        permanent: true,
      },
      {
        source: "/nutritional-guidance",
        destination: "/what-we-do/nutritional-guidance/",
        permanent: true,
      },
      {
        source: "/private-one-on-one",
        destination: "/what-we-do/private-one-on-one/",
        permanent: true,
      },
      {
        source: "/small-group-personal-training",
        destination: "/what-we-do/small-group-personal-training/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
