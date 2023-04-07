import React from 'react';
import './styles.css';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default MainContainer;
