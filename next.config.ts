import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'www.vectorlogo.zone',
      'avatars.githubusercontent.com',
      'seeklogo.com',
      'heroicons.com',
      'prettier.io',
      'eslint.org',
      'git-scm.com',
      'day.js.org'
    ],
  },
  webpack(config) {
    // Add CSS processing rules if needed
    return config;
  },
  // Ensure transpilePackages includes all necessary packages
  transpilePackages: ['@splidejs/splide', '@splidejs/splide-extension-auto-scroll', 'flowbite-react'],
};

export default withFlowbiteReact(nextConfig);
