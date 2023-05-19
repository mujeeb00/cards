import React from 'react';
import HeroSection from './HeroSection';
import CardsSection from './CardsSection';
import Navbar from './Navbar';
import Footer from './Footer';

const generateRandomCards = (count) => {
  const cards = [];

  for (let i = 0; i < count; i++) {
    cards.push({
      title: `Card ${i + 1}`,
      content: `This is the content for Card ${i + 1}`,
    });
  }

  return cards;
};

const App = () => {
  const heroImage =  'https://shorturl.at/bfEHZ'// Replace with your hero image URL
  const heroText = 'Welcome to our website';
  const footerText = '© 2023. All rights reserved.';

  const cards = generateRandomCards(4); // Generate 4 random cards within the main component

  return (
    <div>
      <Navbar title="My Website" />
      <HeroSection image={heroImage} text={heroText} />
      <CardsSection cards={cards} />
      <Footer text={footerText} />
    </div>
  );
};

export default App;
