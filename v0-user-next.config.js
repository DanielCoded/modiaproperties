/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "v0.blob.com",
      "cdn.prod.website-files.com",
      "photos.zillowstatic.com",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
    ],
  },
  transpilePackages: ["framer-motion"],
}

module.exports = nextConfig

