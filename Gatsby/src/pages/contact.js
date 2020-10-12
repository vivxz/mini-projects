import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

export default function Contact() {
  return (
    <Layout>
      <Head title='Contact'/>
      <h2>Contact Me:</h2>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at eros luctus, accumsan lorem nec, dignissim metus. Mauris semper, tellus eget finibus sollicitudin, ex.</p>
        <a href='https://www.twitter.com' target='blank'>Twitter</a>
      </div>
    </Layout>
  )
}