/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔥 CRITICAL: makes your site fully static (fixes Netlify delay)
  output: "export",

  // 🔥 Required for static export (Next Image fix)
  images: {
    unoptimized: true,
  },

  turbopack: {
    root: process.cwd(),
  },

  async headers() {
    return [
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;