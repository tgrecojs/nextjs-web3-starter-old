// next.config.js
const withMDX = require('@next/mdx')();
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack(config, options) {
    config.node = {
      fs: 'empty'
    };
    return config;
  }
});
