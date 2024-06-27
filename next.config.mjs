/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'production',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgs.izou.top',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.33xp.cn',
        port: '',
        pathname: '/**',
      },
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
