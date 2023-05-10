import React from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

const About = () => {

  return (
    <Layout home>
        <Head>
            <title>MyWebClass.org | About</title>
        </Head>
        <section className={utilStyles.headingMd}>

          <div style={{display: 'flex',  margin: '0 600px', justifyContent: 'space-between', fontSize: '35px'}}>
          <h1 className="about-header"> Team Members</h1>
          </div>

          <div className="team-members" style={{ display: 'flex', justifyContent: 'space-between' }}>
            {[
              { name: 'Keith Williams', designation: 'Professor', photo: 'images/Keith.png'},
              { name: 'Suman S. Mhalsank', designation: 'Developer', photo: 'images/suman.png' },
              { name: 'Srinivas Bojja', designation: 'Project Manager', photo: '/images/srinivas.png' },
              { name: 'Harshith Reddy', designation: 'Tester', photo: 'images/harshith.png' },
            ].map((member) => (
              <div key={member.name} className="team-member" style={{ flex: '1', margin: '0 10px' }}>
                <img src={member.photo} alt={member.name} style={{ borderRadius: '50%', width: '200px', height: '200px', margin: '0 80px' }} />
                <div className="member-info" style={{ textAlign: 'center' }}>
                  <h2>{member.name}</h2>
                  <p>{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
   </Layout>
  );
};

export default About;