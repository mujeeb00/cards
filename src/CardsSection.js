import React from 'react';
import Card from './Card';

const CardsSection = ({ cards }) => {
  return (
    <section className="cards">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </section>
  );
};

export default CardsSection;
