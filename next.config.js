/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // next.config.js
  output: 'export', // This will make Next.js export static HTML
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
}

module.exports = nextConfig 