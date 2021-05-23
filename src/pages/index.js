import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/home.module.css';

export default function Home({data}) {
  console.log(data);
  const { title, description } = data.site.siteMetadata;
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Welcome [0] & *</h2>
          <h3>Design & Development</h3>
          <Link className={styles.btn} to="/projects">My Projects</Link>
        </div>
        <img src="/dev.png" alt="developer" style={{ maxWidth: '100%' }} />
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
}
`
