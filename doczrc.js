export default {
  base: "/",
  public: "/static",
  dest: "publish",
  title: "SitemapHub Docs",
  description:"SitemapHub documents.",
  themeConfig: {
    showMarkdownEditButton: true
  },
  plugins:[],
  ignore:["README.md"],
  menu:[
    "Introduction",
    "Add a New Site",
    "Create RSS Feed",
    "Create XML Sitemap",
    "Create Images Sitemap",
    "Create Videos Sitemap",
    "Verify Site Ownership",
    "Setting Custom Domain",
    "Submit Sitemap to Google",
    "Subscription and Billing",
    "FAQ",
  ]
}