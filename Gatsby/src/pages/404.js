import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

export default function NotFound() {
  return (
    <Layout>
      <Head title='404'/>
      <h2>Page not found,</h2>
      <p>
      <Link to='/'>Head home</Link>
      </p>
      
    </Layout>
  )
};