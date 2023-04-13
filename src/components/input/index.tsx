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
      <div className="send_button_container">
        <div className="send_button">
          <FiSend size={16} color={value ? '#fff' : '#7e7e7e'} />
        </div>
      </div>
    </div>
  );
};

export default Input;
