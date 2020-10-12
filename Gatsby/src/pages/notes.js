import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

import notesStyles from './notes.module.scss';

export default function Notes() { 
  const data = useStaticQuery(graphql`
  query {
    allContentfulNotePost (
      sort:{
        fields:date,
        order:DESC
      }
    ) {
      edges {
        node {
          title
          slug
          date (
            formatString: "MMMM DD, YYYY"
          )
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <Head title='Notes'/>
      {console.log(data)}
      <h2>Notes:</h2>
      <ol className={notesStyles.posts}>
        {data.allContentfulNotePost.edges.map((edge, i) => {
          return (
            <li className={notesStyles.post}>
              <Link to={edge.node.slug}>
                <h3 key={i}>{edge.node.title}</h3>
                <p>{edge.node.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
};