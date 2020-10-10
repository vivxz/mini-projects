import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

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
      <ol>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          return (
            <li>
              <Link to={edge.node.fields.slug}>
                <h3 key={i}>{edge.node.frontmatter.title}</h3>
              </Link>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
};