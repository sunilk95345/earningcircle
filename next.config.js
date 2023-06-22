/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = {
  async redirects() {
    return [
      {
        source: '/:slug',
        destination: 'https://lifelinejob.com/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
