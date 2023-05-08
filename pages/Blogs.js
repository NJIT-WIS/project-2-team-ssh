import React from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'


export default function Blogs() {
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
        <p>Here at MyWebClass.org, we offer a wide range of courses in web development, DevOps, and management. Our expert instructors are passionate about their fields and are committed to helping you achieve your goals.</p>

    <div style={{ display: 'flex' }}>

      <div style={{ marginRight: '80px' }}>
      <div>
            <img style={{ height: '300px', width: '450px', border: "2px solid black" }} src="images/web dev.png" alt=" web development" width="720px" />
      </div>
      <div>
        <h2>Web Development Courses</h2>

        <p>Our web development courses cover a variety of topics, from HTML and CSS to JavaScript frameworks like React and Angular. Whether you're just starting out or looking to expand your skills, we have a course that's right for you.</p>

        <h3>Some of Our Most Popular Web Development Courses:</h3>
        <ul>
          <li>Web Development Fundamentals</li>
          <li>React Fundamentals</li>
          <li>Node.js and Express</li>
          <li>Advanced CSS Techniques</li>
        </ul>
        </div>
        </div>

       <div style={{ marginRight: '35px' }}>
       <div>
            <img style={{ height: '300px', width: '450px', border: "2px solid black"  }} src="images/devops.png" alt=" web development" width="720px" />
       </div>
       <div>
        <h2>DevOps Courses</h2>

        <p>Our DevOps courses are designed to help you master the tools and processes that are essential for building and deploying modern applications. From continuous integration and deployment to containerization and orchestration, we've got you covered.</p>

        <h3>Some of Our Most Popular DevOps Courses:</h3>
        <ul>
          <li>DevOps Fundamentals</li>
          <li>Continuous Integration and Deployment</li>
          <li>Containerization with Docker</li>
          <li>Orchestration with Kubernetes</li>
        </ul>
        </div>
        </div>

         <div style={{ marginLeft: '90px'}}>
         <div>
            <img style={{ height: '300px', width: '450px', border: "2px solid black" }} src="images/management.png" alt=" web development" width="720px" />
       </div>
       <div>
        <h2>Management Courses</h2>

        <p>Our management courses are perfect for anyone looking to develop their leadership skills and advance their careers. From project management and team leadership to strategic planning and business analysis, we offer a wide range of courses to help you achieve your goals.</p>

        <h3>Some of Our Most Popular Management Courses:</h3>
        <ul>
          <li>Project Management Fundamentals</li>
          <li>Agile and Scrum Methodologies</li>
          <li>Leadership and Team Management</li>
          <li>Strategic Planning and Business Analysis</li>
        </ul>
       </div>
       </div>
       </div>

        <h3>So whether you're interested in web development, DevOps, or management, we've got the courses you need to take your career to the next level. Browse our course catalog today and start your journey to success!</h3>
      </div>
    </Layout>
  );
};
