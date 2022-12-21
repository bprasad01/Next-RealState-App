// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bayut-production.s3.eu-central-1.amazonaws.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}
