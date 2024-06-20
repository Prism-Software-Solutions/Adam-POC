import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <a href="#home">MyLogo</a>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;