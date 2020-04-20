const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Gatsyby startbootstrap-agency",
    description: "gatsby version of startbootstrap-agency with i18n support.",
    author: "thundermiracle",
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/assets/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Gatsby Startbootstrap Agency`,
        short_name: `Agency`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
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
