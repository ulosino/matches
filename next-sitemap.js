// Configuration for the next-sitemap package and robots.txt

module.exports = {
  siteUrl: "https://matches.ulosino.com",
  changefreq: "weekly",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
