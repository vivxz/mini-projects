const { create } = require('domain');
const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    // extracted data to get slug
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  };
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // getting path to template
  const noteTemplates = path.resolve(`./src/templates/notes.js`);

  // get markdown data from graphql
  const response = await graphql(`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `);

  // create new pages
  response.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      //path to component
      component: noteTemplates,
      path: `/notes/${edge.node.fields.slug}`,
      // using slug to fetch all of the data that will allow us to pull form everything we need
      context: {
        slug: edge.node.fields.slug
      }
    })
  });
}