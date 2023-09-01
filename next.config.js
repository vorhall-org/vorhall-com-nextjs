const path = require('path')

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
}

const withMDX= require('@next/mdx')();

module.exports = withMDX(nextConfig);

module.exports = {
  async headers() {
    return [
      {
        source: '/:slug*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ],
      },
    ]
  },
}
