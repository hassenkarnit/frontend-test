/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
