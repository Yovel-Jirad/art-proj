/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'localhost',
        'cdn.example.com',
        'firebasestorage.googleapis.com',
        'googleusercontent.com',
      ],
    },
    basePath: '',
    trailingSlash: false,
  };
  
  module.exports = nextConfig;