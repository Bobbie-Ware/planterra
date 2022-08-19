// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://terrarium.nz/",
    title: "Planterra",
    author: `Bobbie Ware`,
    description: "Planterra, New Zealand nature interior decorator",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    }, 
    {
      resolve: `gatsby-plugin-sass`,
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Planterra",
        short_name: "Planterra",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffffff",
        theme_color: "#25b138",
        icon: "src/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5P3MRZL",
        includeInDevelopment: true,
        enableWebVitalsTracking: true,
      },
    },
  ],
}
