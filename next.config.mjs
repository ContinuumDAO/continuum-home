import path from 'node:path'
import { fileURLToPath } from 'node:url'
import nextMDX from '@next/mdx'

const projectDir = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: projectDir,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'export',
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {},
})

export default withMDX(nextConfig)
