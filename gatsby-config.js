const path = require(`path`)


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://analogica.in",
    titleTemplate: "Analogic Template",

    title: "Analogica",
    description: "Courses",
    author: "analogica",
    authorSite: "",
    image: "../images/AnalogicaIcon.png",
    twitterUsername: "@analogica"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/AnalogicaIcon.png",
      },
    },
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     src: '/wow.min.js', // Change to the script filename
    //   },
    // },
    {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://analogicadb.herokuapp.com`,
      queryLimit: 1000, // Defaults to 100,
      collectionTypes: [],
      singleTypes: [`home`],
  
    },
  },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
