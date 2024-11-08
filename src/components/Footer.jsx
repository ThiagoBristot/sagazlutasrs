import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <h3>Siga-nos nas redes sociais</h3>
      <div className="social-icons">
        <a href="https://www.facebook.com/SagazLutasRS/" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/sagazlutasrs/" target="_blank" rel="noopener noreferrer" className="icon instagram">
          <FaInstagram />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
