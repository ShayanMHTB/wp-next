/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    WORDPRESS_API_URL: 'http://localhost:8000/graphql'
  }
}

module.exports = nextConfig
