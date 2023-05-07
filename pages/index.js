import { useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

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


const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/courses' activeStyle>
			Courses
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>

		<NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

