/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dev.to"
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com"
      }
    ]
  }
}

export default nextConfig
