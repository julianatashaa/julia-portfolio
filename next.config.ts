import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root: the parent directory has an unrelated lockfile
    // that Next.js would otherwise mistake for the project root.
    root: path.join(__dirname),
  },
};

export default nextConfig;
