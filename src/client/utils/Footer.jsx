import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <p>&copy; 2025 MTG Fan Page. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌐 Website
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          📸 Instagram
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐦 Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
