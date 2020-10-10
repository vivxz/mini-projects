---
title: "GraphQL"
date: "October 9, 2020"
---

### These are my notes on how to incorporate GraphQL with Gatsby:

1. To add dynamic data, you want to add `siteMetadata` in the gatsby-config file
2. You have access to GraphiQL from gatsby by using the link `http://localhost:8000/___graphql`
3. To query the data that you added to siteMetaData, you want to import both graphql and useStaticQuery from gatsby  

#### Turning a markdown to html:
1. Install `gatsby-source-filesystem` and add it to the plugin in the gatsby-config file –– refer to the docs for full details
2. Install `gatsby-transformer-remark` to parse for all markdown files and all it to the plugin in the gatsby-config file 

#### Querying a specific post:
1. Certain fields will have arguments, allowing you to query by equality (eq, neq), list (in, nin), and etc.