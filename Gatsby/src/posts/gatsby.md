---
title: "Notes on Gatsby"
date: "October 8, 2020"
---

I'm currently in the process of learning Gatsby, so here are my notes on it:

1. Gatsby is used strictly for static pages
2. Pages in Gatsby (index.js → homepage) is served as the endpoint, it's where Gatsby will look at.
3. To link pages together, you can either use an <a> tag or a <Link> imported from gatsby itself
4. To use sass with Gatsby, you must install it `gatsby-plugin-sass` and then add it to the plugins in the gatsby-config file
5. It's best to create a layout if most of your pages involve the same component (footer, header, and etc.)