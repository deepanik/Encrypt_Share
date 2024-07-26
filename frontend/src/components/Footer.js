// // Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-300 to-purple-200 text-white -10 p-0 shadow-lg mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} EncryptShare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;