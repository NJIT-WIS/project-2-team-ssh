import { useState } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

function Header({ title }) {
  return <h1>{title ? title : 'MyWebClass.org'}</h1>;
}

export default function HomePage() {
  const names = ['Suman S. Mhalsank', 'Srinivas Bojja', 'Harshith Reddy'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="MyWebClass.org" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
