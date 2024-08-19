/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edwuizsu44hg1knv.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
