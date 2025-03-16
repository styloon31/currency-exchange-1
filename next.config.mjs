/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/robots.txt", destination: "/robots" },
      { source: "/sitemap.xml", destination: "/sitemap" },
    ];
  },
};

export default nextConfig;
