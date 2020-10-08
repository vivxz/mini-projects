import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <h2>Hi,</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at eros luctus, accumsan lorem nec, dignissim metus. Mauris semper, tellus eget finibus sollicitudin, ex. 
      </p>
      <Link to='/contact'>Contact Me</Link>
    </Layout>
  )
};