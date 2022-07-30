/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
