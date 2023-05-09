import { useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Navbar from '../components/Navbar'
import { getSortedPostsData } from '../lib/posts'
import layoutStyles from '../components/layout.module.css';

const gtag = "https://www.googletagmanager.com/gtag/js?id=G-5HGHEF87SL";

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <Head>

        <title>{ siteTitle }</title>
        <meta name="description" content="MyWebclass.org" />
        <meta name="keywords" content="Techify, Modern, learning, MyWebclass.org" />git
        <script async src={gtag} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5HGHEF87SL', { page_path: window.location.pathname,
            });
          `
          }}
        />
      </Head>
      <div style={{}}>
            <img style={{ height: '600px', width: '1600px'}} src="images/techify.png" alt="a teacher with students" width="720px" />
       </div>
      <div style={{display: 'flex', margin: '3rem', justifyContent: 'space-between'}}>
        <div style={{width: '1200px', display: 'flex', flexDirection: 'column'}}>
            <h1 className={layoutStyles.heading1}> Techify Modern Learning </h1>
            <h3 className={layoutStyles.heading3}> Hello, We are a team of Techies who are here to techify our learning style with interactive quizzes, weekly blogs, Our courses</h3>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}