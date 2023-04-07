import React from 'react';
import './styles.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';

const chats = [
  {
    title: 'Chat 1'
  },
  {
    title: 'Chat 2dasdasd asda sd a asd asd adasd'
  }
];

const Nav = () => {
  return (
    <nav className="nav">
      <button>
        <div className="icon">
          <AiOutlinePlus size={14} color="#fff" />
        </div>
        New chat
      </button>
      <div className="chat">
        {chats.map((chat, index) => (
          <div className="chat_item" key={index}>
            <div className="icon">
              <FiMessageSquare size={16} />
            </div>
            <div className="chat_item_title">{chat.title}</div>
            <span className="shadow" />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
