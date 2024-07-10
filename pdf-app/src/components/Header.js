import React, { useState } from 'react';
import Modal from './Modal';
import './Header.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header>
      <div className="logo">MY PDF Tools</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#tools" onClick={toggleModal}>Tools</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <button>Login</button>
        <button>Sign-up for free</button>
      </div>
      <Modal show={showModal} onClose={toggleModal} />
    </header>
  );
};

export default Header;
