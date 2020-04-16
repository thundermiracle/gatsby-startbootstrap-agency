const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Gatsyby startbootstrap-agency`,
    description: `gatsby version of startbootstrap-agency with i18n support.`,
    author: `thundermiracle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/img/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "core.scss";`,
        includePaths: [path.resolve(__dirname, "src/style")],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Montserrat:400,700",
            "Kaushan+Script",
            "Droid+Serif:400,700,400italic,700italic",
            "Roboto+Slab:400,100,300,700",
          ],
        },
      },
    },
  ],
};
