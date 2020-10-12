import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

import notesStyles from './notes.module.scss';

export default function Notes() { 
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)
  return (
    <Layout>
      {console.log(data)}
      <h2>Notes:</h2>
      <ol className={notesStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          return (
            <li className={notesStyles.post}>
              <Link to={edge.node.fields.slug}>
                <h3 key={i}>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
};