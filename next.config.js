/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  images: {
    unoptimized: true,
  },
  swcMinify: true
}

module.exports = nextConfig
