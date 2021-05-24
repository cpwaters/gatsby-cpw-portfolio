/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-typescript', 'gatsby-plugin-sass'],
};

module.exports = {
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        connectionString: 'mongodb+srv://cp-waters:20nialL05@cluster0.gxswc.mongodb.net/', 
        dbName: `sample_airbnb`, 
        collection: `listingsAndReviews` 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    }
  ],
  siteMetadata: {
    title: 'Chris Waters',
    description: 'Manchester Developer & Programmer Portfolio',
    copyright: 'Copyright 2021'
  }
}