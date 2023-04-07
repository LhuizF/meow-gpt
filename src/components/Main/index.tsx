import React, { useState } from 'react';
import './styles.css';
import Input from '../Input';
import Card from '../Card';

const texts = [
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
  'Error fugit, mollitia ad recusandae omnis facilis saepe placeat?',
  'Eum ratione fuga non, nisi sit, facere minima placeat commodi aliquam, itaque sapiente',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
  'Error fugit, mollitia ad recusandae omnis facilis saepe placeat?',
  'Eum ratione fuga non, nisi sit, facere minima placeat commodi aliquam, itaque sapiente',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
  'Error fugit, mollitia ad recusandae omnis facilis saepe placeat?',
  'Eum ratione fuga non, nisi sit, facere minima placeat commodi aliquam, itaque sapiente',
];

const Main = () => {
  const [text, setText] = useState<string>('');

  return (
    <div className="container">
      <h1>Meow GPT</h1>
      <div className="card_container">
        {texts.map((text, index) => (
          <Card key={index} text={text} />
        ))}
      </div>
      <Input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default Main;
