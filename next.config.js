/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/test",
        destination: "/404",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
