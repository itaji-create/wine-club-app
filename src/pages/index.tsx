import type { NextPage } from 'next';
import Nav from '../components/nav';
import React, { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  const [a, seta] = useState(0);
  return (
    <div>
      <Nav />
      <h1>Hello World { count }</h1>
      <button type='button' onClick={ () => setCount(count + 1) }></button>
    </div>
  )
}

export default Home
