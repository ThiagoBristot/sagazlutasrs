import React, { useState } from 'react';
import sagazLogo from '../assets/sagazlogo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" style={{display: "inline-flex"}}>
        <div><img src={sagazLogo} alt="logo" className='logo-img'/></div>
        <h1 className='logotitle'>Sagaz Lutas</h1>
      </div>

      <div className="menu-icon" onClick={toggleMenu} style={{zIndex: "1000"}}>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li onClick={() => { scrollToSection('home'); if (menuOpen) toggleMenu(); }}>Início</li>
        <li onClick={() => { scrollToSection('about'); if (menuOpen) toggleMenu(); }}>Sobre</li>
        <li onClick={() => { scrollToSection('classes'); if (menuOpen) toggleMenu(); }}>Galeria</li>
        <button className="agendar-aula-btn" onClick={() => { scrollToSection('schedule'); if (menuOpen) toggleMenu(); }}>
          Agende sua Aula
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
