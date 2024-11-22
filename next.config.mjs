/** @type {import('next').NextConfig} */
// TODO: add remotePatterns for images in production
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
