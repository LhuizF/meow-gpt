import React from 'react';
import './styles.css';

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <div className="card">
      <p>{text}</p>
    </div>
  );
};

export default Card;
