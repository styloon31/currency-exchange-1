/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure App Router is enabled
  },
  async rewrites() {
    return [
      { source: "/robots.txt", destination: "/robots" },
      { source: "/sitemap.xml", destination: "/sitemap" },
    ];
  },
};

export default nextConfig;
