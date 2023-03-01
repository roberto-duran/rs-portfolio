/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
        "media-exp1.licdn.com",
        "cdn.sanity.io"
    ]
  },
  experimental:{
    appDir: true,
    swcMinify: true,
  }
}
