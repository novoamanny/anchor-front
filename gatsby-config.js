if (process.env.STAGING) {
  // handle the .env.staging environment file
  require("dotenv").config({
    path: `.env.staging`,
  });
} else {
  // fallback to default Gatsby .env handling (.env.development & .env.production)
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

module.exports = {
  siteMetadata: {
    title: `Anchor Fabrication`,
    description: `Metal Fabrication (meta description)`,
    author: `Warren Douglas Advertising`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1B365D`,
        theme_color: '#1B365D',
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`blog-post`, `team-member`, `job-opportunities`, `news-post`],
        //If using single types place them in this array.
        singleTypes: [
          `home-page`,
          `about`,
          `project-management-and-resources`,
          "resources",
        ],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-meta-redirect`, // make sure to put last in the array
  ],
};
