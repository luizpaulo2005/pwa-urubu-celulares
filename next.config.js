/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.samsung.com'],
    formats: ["image/png"],
  }
}

module.exports = nextConfig

const withPWA = require('next-pwa')({
  dest: 'public',
  fallbacks: {
    document: '/_offline'
  }
})

module.exports = withPWA({
  // next.js config
})