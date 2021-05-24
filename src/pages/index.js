import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/home.module.css';
import Img from 'gatsby-image';

export default function Home({data}) {
  console.log(data);
  const { title, description } = data.site.siteMetadata;
  const mainImage = data.images.childImageSharp.fluid;
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Welcome [0] & *</h2>
          <h3>Design & Development</h3>
          <Link className={styles.btn} to="/projects">My Projects</Link>
        </div>
        <Img fluid={mainImage} />
        <p>{title} - {description}</p>
      </section>
    </Layout>
  );
}

/* graphQL page query */
export const query = graphql`
query SiteData {
  site {
    siteMetadata {
      copyright
      description
      title
    }
  }
  images: file(relativePath: {eq: "dev.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
