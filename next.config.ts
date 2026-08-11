import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.unsplash.com" },
      { protocol: "https", hostname: "**.cloudinary.com" },
      { protocol: "https", hostname: "**.imgur.com" },
      { protocol: "https", hostname: "i.imgur.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/psicoterapia-infantil",
        destination: "/psicoterapia/infantil",
        permanent: true,
      },
      {
        source: "/psicoterapia-relacionamentos",
        destination: "/psicoterapia/relacionamentos",
        permanent: true,
      },
      {
        source: "/psicoterapia-ansiedade",
        destination: "/psicoterapia/ansiedade",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
