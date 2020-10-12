import React from 'react';
import { Helmet } from 'react-helmet';
import { useStateQuery, graphql, useStaticQuery } from 'gatsby';

export default function Head({ title }) {
  const data = useStaticQuery(graphql `
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
  )
};