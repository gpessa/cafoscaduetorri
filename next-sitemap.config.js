/** @type {import('next-sitemap').IConfig} */
const nextConfig = require("./next.config");
const hasMultipleLocales = nextConfig.i18n.locales.length > 1
const extraLocales = nextConfig.i18n.locales.filter(locale => locale !== nextConfig.i18n.defaultLocale)

const configuration = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
	generateRobotsTxt: true
}

if (hasMultipleLocales) {
	configuration.alternateRefs = [
		{
			href: process.env.NEXT_PUBLIC_SITE_URL,
			hreflang: nextConfig.i18n.defaultLocale,
		},
		...extraLocales.map(hreflang => ({
			href: process.env.NEXT_PUBLIC_SITE_URL + "/" + hreflang,
			hreflang,
		}))
	]
}

module.exports = configuration