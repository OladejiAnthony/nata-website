// src/components/Footer.js
import React from 'react';
import './Footer.scss';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Eryeol. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
