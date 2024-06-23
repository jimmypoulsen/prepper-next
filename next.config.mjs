/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/informativt-indhold",
        destination: "/content",
        locale: false,
      },
    ];
  },
};

export default nextConfig;
