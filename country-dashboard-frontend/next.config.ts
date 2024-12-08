// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true, // Enable strict mode for better debugging
//   distDir: ".next", // Specify the build directory (default is .next)
//   output: "standalone", // Enable standalone mode for deployment
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out', // Ensure the build output is placed in the correct directory
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
};
export default nextConfig;