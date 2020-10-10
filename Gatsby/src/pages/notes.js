import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
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
              <h3 key={i}>{edge.node.frontmatter.title}</h3>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
};