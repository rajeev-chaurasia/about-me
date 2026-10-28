import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/`.
  // No API routes, no server-only code, no runtime image optimization.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
