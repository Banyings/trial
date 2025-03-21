'use client'
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='bg-amber-300 max-h-1 gap-y-0.5 font-bold ml-20 items-center text-cyan-500'>
      <h1>HomePage</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
