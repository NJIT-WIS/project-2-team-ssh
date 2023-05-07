import { useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Navbar from '../components/Navbar'


export default function Home({ courses }) {
  return (
    <Layout>
    <Navbar />
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

      <div style={{display: 'flex', margin: '3rem', justifyContent: 'space-between'}}>
        <div style={{width: '900px', display: 'flex', flexDirection: 'column'}}>
            <h1> Techify Modern Learning </h1>
            <p style={{ fontSize: '20px', textAlign: 'justify' }}>Hello, We are a team of Techies who are here to techify our learning style with interactive quizzes, weekly blogs, Our courses</p>

        </div>

      </div>
    </Layout>
  )
}
