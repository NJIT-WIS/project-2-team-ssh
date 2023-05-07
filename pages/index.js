import { useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'


// Home Page with Google Analytics
function HomePage() {
  return (
    <div>
      <Head>
        <title>MyWebclass.org</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CXE9WXQFQG"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CXE9WXQFQG', { page_path: window.location.pathname });
          `,
          }}
        ></script>
      </Head>

      <main>
        <h1>Techify Modern Learning</h1>
        <p>Here you can find all sorts of resources for learning.</p>
        <ul>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/tutorials">Tutorials</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </main>
    </div>
  );
}

export default HomePage;
