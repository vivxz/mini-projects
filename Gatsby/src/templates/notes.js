import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';

export const query = graphql`
query ($slug: String!) {
  contentfulNotePost (
    slug: {
      eq: $slug
    }
  ) {
    title
    date (
      formatString: "MMMM DD, YYYY"
    )
    body {
      json
    }
  }
}
`;

export default function Notes(props) { 
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <Layout>
      <h1>{props.data.contentfulNotePost.title}</h1>
      <p>{props.data.contentfulNotePost.date}</p>
      {/* <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>
      </div> */}
      {documentToReactComponents(props.data.contentfulNotePost.body.json, options)}
    </Layout>
  )
};