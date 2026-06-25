/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com"
      },
      {
        protocol: "https",
        hostname: "**.dev.to"
      }
    ]
  },
  async redirects() {
    // The blog folded into the merged /videos feed. Keep old links working.
    return [
      {
        source: "/blog",
        destination: "/videos",
        permanent: true
      }
    ]
  }
}

export default nextConfig
