/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HUGGINGFACE_API_TOKEN: process.env.HUGGINGFACE_API_TOKEN,
    REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
    OPENAI_API_TOKEN: process.env.OPENAI_API_TOKEN
  }
};
