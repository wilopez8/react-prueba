import React from 'react';
import './Footer.css'; // Footer-specific styles

function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;