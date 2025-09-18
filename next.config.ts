// next.config.ts
import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  // GitHub Pages perlu static export (tanpa Node server)
  output: 'export',

  // Situsmu hidup di subpath: /portofolio
  basePath: isProd ? '/portofolio' : '',

  // Prefix asset juga harus ikut subpath
  assetPrefix: isProd ? '/portofolio/' : '',

  // Image optimizer Next tidak jalan di export → pakai unoptimized
  images: { unoptimized: true },
}

export default nextConfig

