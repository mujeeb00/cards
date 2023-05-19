import React from 'react';

const HeroSection = ({ image, text }) => {
  return (
    <section className="hero">
      <img src={image} alt="Hero" />
      <h1>{text}</h1>
    </section>
  );
};

export default HeroSection;
