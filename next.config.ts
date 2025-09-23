import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/portfolio-site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
