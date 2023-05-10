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
            <img style={{ height: '600px', width: '1590px'}} src="images/techify.png" alt="a teacher with students" width="720px" />
       </div>
      <div style={{display: 'flex', margin: '1rem', justifyContent: 'space-between'}}>
        <div style={{width: '1500px', display: 'flex', flexDirection: 'column'}}>
            <div style={{marginLeft : '400px'}} >
            <h1 className={layoutStyles.heading1}> Techify Modern Learning </h1>
            </div>
            <div style={{marginLeft : '40px', justifyContent: 'space-between'}} >
            <h3 className={layoutStyles.heading3}>  We are a team of skilled professionals at MyWebclass.org who are dedicated to enhancing your learning experience. We offer a range of interactive quizzes, weekly blogs, and comprehensive courses in web development, devops, and management.

Our goal is to provide you with the necessary tools and resources to enhance your knowledge and skills, and we are committed to supporting you every step of the way. Whether you are an experienced professional or a beginner, our courses are designed to meet your unique needs and help you achieve your goals.

Join us today and discover the power of learning to Techify Modern Learning!</h3>
        </div>
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