const path = require('path')

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
}
 
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)