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
    // suas customizações de webpack, se houver
    return config;
  },
};

export default withFlowbiteReact(nextConfig);
