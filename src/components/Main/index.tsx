import React, { useState } from 'react';
import './styles.css';
import Input from '../input';

const Main = () => {
  const [text, setText] = useState<string>('');

  return (
    <div className="container">
      <h1>Meow GPT</h1>
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
