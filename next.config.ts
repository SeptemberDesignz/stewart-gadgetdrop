import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // This fixes the warning about package-lock.json in home directory
    root: process.cwd(),
  },
};

export default nextConfig;