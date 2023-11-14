/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HUGGINGFACE_API_TOKEN: process.env.HUGGINGFACE_API_TOKEN,

  }
};
