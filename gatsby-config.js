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
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        connectionString: 'mongodb+srv://cp-waters:20nialL05@cluster0.gxswc.mongodb.net/', 
        dbName: `sample_airbnb`, 
        collection: `listingsAndReviews` 
      },
    },
  ],
}