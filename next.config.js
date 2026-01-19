// Correct this line in next.config.js:
// Change: react strictMode: true,
// To: reactStrictMode: true,

const nextConfig = {
  reactStrictMode: true,  // Fixed: no space between react and StrictMode
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};