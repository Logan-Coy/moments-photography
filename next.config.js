/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["momentsphotobucket.s3.us-east-2.amazonaws.com"],
  },
  experimental: {
    serverActions: true,
  },
};
