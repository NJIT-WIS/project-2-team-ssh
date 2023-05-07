import React from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

export default function Courses() {
  return (
      <Layout home>
        <Head>
            <title>MyWebClass.org | Courses</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>Welcome to MyWebclass.org, We have a variety of courses, you can scroll through</p>
        </section>
      </Layout>
  )
}