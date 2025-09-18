export default {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portofolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portofolio/' : '',
  images: { unoptimized: true },
} satisfies import('next').NextConfig;


