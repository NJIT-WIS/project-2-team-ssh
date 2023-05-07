import { useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ courses }) {
  return (
    <Layout>
      <Head>
        <title>MyWebclass.org</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5HGHEF87SL"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5HGHEF87SL', { page_path: window.location.pathname });
          `,
          }}
        ></script>
      </Head>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/blogs">Blogs</a></li>
        </ul>
        </nav>
      </Layout>
  )
}