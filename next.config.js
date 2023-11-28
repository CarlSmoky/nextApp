/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '',
        port: '',
        pathname: '/photos/**'
      }
    ],
    domains: []
  }
}

module.exports = nextConfig
