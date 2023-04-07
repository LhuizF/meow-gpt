import React from 'react';
import './styles.css';
import { FiSend } from 'react-icons/fi';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <div className="input_container">
      <input type="text" value={value} onChange={onChange} />
      <FiSend size={18} color={value ? '#fff' : '#7e7e7e'} />
    </div>
  );
};

export default Input;
