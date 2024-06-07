/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.buymeacoffee.com',
      'cdn.dribbble.com',
      'lh3.googleusercontent.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      }
    ]
  },
};

export default nextConfig;
