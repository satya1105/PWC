// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable strict mode for better debugging
  distDir: ".next", // Specify the build directory (default is .next)
  output: "standalone", // Enable standalone mode for deployment
};

export default nextConfig;