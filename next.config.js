const withPWA = require('next-pwa'); // next.config.js
const withPreact = require('next-plugin-preact');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA(
  withPreact({
    pwa: {
      dest: 'public',
      publicExcludes: ['!_headers', '!_redirects']
    },
    reactStrictMode: true
  })
);

module.exports = nextConfig;
