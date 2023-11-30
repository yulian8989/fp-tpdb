// pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Pricing/>
      {/* Add the rest of your home page content here */}
    </>
  );
};

export default Home;
