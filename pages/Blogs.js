import React from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import styles from '../styles/contact.module.css'
import Date from '../components/date'

export default function Blogs({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>MyWebClass.org | Blogs</title>
        <script id="mcjs" dangerouslySetInnerHTML={{
          __html: `
            !function(c,h,i,m,p){
              m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)
            }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/d7e6ee271d33e9808fc4971ea/087ba75587caa60bd84d010f2.js");
          `
        }} />

      </Head>
      <div>
        <h1>Welcome to Our Blog!</h1>
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
