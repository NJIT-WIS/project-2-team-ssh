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
     <div style={{marginLeft: '600px', justifyContent: 'space-between'}}>
  <h1 className="about-header">Team Members</h1>
  <div className="team-members">
    {[    { name: 'Keith Williams', designation: 'Professor', photo: '/john-doe.jpg' },
      { name: 'Suman S. Mhalsank', designation: 'Developer', photo: '/john-doe.jpg' },
      { name: 'Srinivas Bojja', designation: 'Project Manager', photo: '/jane-smith.jpg' },
        { name: 'Harshith Reddy', designation: 'Tester', photo: '/bob-johnson.jpg' },   ].map((member) => (
      <div key={member.name} className="team-member">
        <img src={member.photo} alt={member.name} />
        <div className="member-info">
          <h2>{member.name}</h2>
          <p>{member.designation}</p>
        </div>
      </div>
    ))}
  </div>
  </div>
</section>

      </Layout>
  );
};

export default About;