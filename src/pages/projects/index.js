import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/projects.module.css';

export default function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Design & Development</h2>
        <h3>All Work</h3>
        <div className={styles.projects}>
          { projects.map(project => (
            <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
            <div>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage {
  projects: allMarkdownRemark {
    nodes {
      id
      frontmatter {
        slug
        stack
        title
        thumbs {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
