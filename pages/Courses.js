import React from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import layoutStyles from '../components/layout.module.css';

export default function Courses() {
  return (
      <Layout home>
        <Head>
            <title>MyWebClass.org | Courses</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <h2 className={layoutStyles.heading2}>Welcome to MyWebclass.org, We have a variety of courses, you can scroll through</h2>
        </section>
        <h3 className={layoutStyles.heading3}>Here at MyWebClass.org, we offer a wide range of courses in web development, DevOps, and management. Our expert instructors are passionate about their fields and are committed to helping you achieve your goals.</h3>

    <div className='grid-container'>

      <div className="image1">
        <img style={{ height: '450px', width: '450px'}} src="images/web dev.png" alt="Web Development" width="720px" />
        <h3 className={layoutStyles.heading3}>Web Development Courses</h3>
        <h4 className={layoutStyles.heading4} >Our web development courses cover a variety of topics, from HTML and CSS to JavaScript frameworks like React and Angular. Whether you're just starting out or looking to expand your skills, we have a course that's right for you.</h4>
        <h3 className={layoutStyles.heading3}>Some of Our Most Popular Web Development Courses:</h3>
        <ul className={layoutStyles.courselist}>
          <li>Web Development Fundamentals</li>
          <li>React Fundamentals</li>
          <li>Node.js and Express</li>
          <li>Advanced CSS Techniques</li>
        </ul>
        </div>


       <div className="image2">
       <img style={{ height: '450px', width: '450px'}} src="images/devops.png" alt="DevOps Courses" width="720px" />
        <h3 className={layoutStyles.heading3}>DevOps Courses</h3>
        <h4 className={layoutStyles.heading4}>Our DevOps courses are designed to help you master the tools and processes that are essential for building and deploying modern applications. From continuous integration and deployment to containerization and orchestration, we've got you covered.</h4>
        <h3 className={layoutStyles.heading3}>Some of Our Most Popular DevOps Courses:</h3>
        <ul className={layoutStyles.courselist}>
          <li>DevOps Fundamentals</li>
          <li>Continuous Integration and Deployment</li>
          <li>Containerization with Docker</li>
          <li>Orchestration with Kubernetes</li>
        </ul>
        </div>


       <div className="image3">
       <img style={{ height: '450px', width: '450px'}} src="images/management.png" alt="Management Courses" width="720px" />
        <h3 className={layoutStyles.heading3}>Management Courses</h3>
        <h4 className={layoutStyles.heading4}>Our management courses are perfect for anyone looking to develop their leadership skills and advance their careers. From project management and team leadership to strategic planning and business analysis, we offer a wide range of courses to help you achieve your goals.</h4>
        <h3 className={layoutStyles.heading3}>Some of Our Most Popular Management Courses:</h3>
        <ul className={layoutStyles.courselist}>
          <li>Project Management Fundamentals</li>
          <li>Agile and Scrum Methodologies</li>
          <li>Leadership and Team Management</li>
          <li>Strategic Planning and Business Analysis</li>
        </ul>
       </div>

       </div>

       <div>
        <h3 className={layoutStyles.heading3}>So whether you're interested in web development, DevOps, or management, we've got the courses you need to take your career to the next level. Browse our course catalog today and start your journey to success!</h3>
       </div>
      </Layout>
  );
};