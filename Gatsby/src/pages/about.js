import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

export default function About() {
  return (
    <Layout>
      <Head title='About'/>
      <h2>About Me:</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at tellus efficitur urna ultricies ultrices vel ut magna. Mauris faucibus ullamcorper erat, sit amet aliquet lectus sollicitudin ac. Quisque imperdiet quis diam sed congue. Fusce lacinia sapien ut felis vulputate, quis placerat nisi molestie. Aenean dapibus ipsum a diam ullamcorper, sit amet blandit metus elementum. Nullam vel purus lorem. Morbi vestibulum massa dictum bibendum dictum.
      </p>
      For more information, <Link to='/contact'>click here</Link>
    </Layout>
  )
}