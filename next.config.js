/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['it', 'fr', 'en'],
    defaultLocale: 'it'
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po/,
      use: ['@lingui/loader'],
    })

    return config;
  }
}
