import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react'; // Importing Lucide menu icon
import NavBar from './pages/NavBar';
import Mainsection from './Mainsection';
import Sidebar from './componets/Sidebar'; // Fixed typo
import Footer from './utils/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-darkBlueMana min-h-screen text-red-500 dark:bg-gray-800 dark:text-white">
      <NavBar />

      {/* Header */}
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center"></div>
      </header>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-5 left-5 p-3 bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out dark:bg-blueMana dark:hover:bg-blue-700 text-white focus:ring-4 focus:ring-red-300 focus:ring-offset-2 focus:outline-none z-50"
        aria-label="Menu"
        title="Menu"
        role="button"
        aria-expanded={isMenuOpen}
        aria-controls="sidebar"
        aria-haspopup="true"
        tabIndex={6}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleMenu();
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <Menu size={28} />
      </button>

      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Mainsection />
      <Footer />

      {/* Scroll to Top Button */}
      {showScroll && <ScrollToTopButton />}
    </div>
  );
};

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-blueMana text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all"
    >
      ⬆️ Top
    </button>
  );
};

export default App;
