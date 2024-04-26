/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'production',
  images: {
    domains: [
      'image.luckyzh.cn',
      'i.33xp.cn',
    ],
  },
  rewrites: async () => {
    return {
      fallback: [
        {
          source: "/imgapi/:path*",
          destination: 'https://imgapi.cn/:path*',
        },
        {
          source: "/hitokoto/:path*",
          destination: 'https://v1.hitokoto.cn/:path*'
        }
      ]
    };
  },
};

export default nextConfig;
