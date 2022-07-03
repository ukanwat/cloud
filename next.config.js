const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc({ mode: 'static' })({
  reactStrictMode: true,
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  images: {
    domains: ['storage.cloud.google.com'],
  },
})
