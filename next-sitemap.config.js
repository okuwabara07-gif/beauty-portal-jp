/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://beauty-portal-jp.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ['https://beauty-portal-jp.vercel.app/sitemap.xml'],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
}
