import React, { useState, useEffect } from "react";

import useTheme from "../componets/hooks/Dark";


const Navbar = () => {
  const [darkMode, toggleTheme] = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);





  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Site Title */}
        <div className="flex items-center space-x-3">
       
          <h1 className="text-2xl font-bold text-redMana dark:text-white">
          THe PlanesWalker Outpost
          </h1>
        </div>

        {/* Mobile Menu Button */}
        {/* <button
          onClick={toggleMenu}
          className="md:hidden text-black dark:text-white hover:text-redMana dark:hover:text-blueMana transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
        {/* <Link
          to="/">
          <span className="text-black dark:text-white hover:text-redMana dark:hover:text-blueMana transition-colors duration-300">
            Home
          </span>
        </Link>
          <Link 
            to="/cards">
            <span className="text-black dark:text-white hover:text-redMana dark:hover:text-blueMana transition-colors duration-300">
              Cards
            </span>
          </Link>
          <Link 
            to="/decks">
            <span className="text-black dark:text-white hover:text-redMana dark:hover:text-blueMana transition-colors duration-300">
              Decks
            </span>
          </Link>
      
          <Link 
            to="/profile">
            <span className="text-black dark:text-white hover:text-redMana dark:hover:text-blueMana transition-colors duration-300">
              Profile
            </span>
          </Link>
          <Link 
            to="/news">
            <span className="text-black dark:text-white hover:text-redMana dark:hover:text-blueMana transition-colors duration-300">
              news
            </span> 
          </Link>
        */}
          

       
          
          {/* Search Box */}
          <form
            onSubmit={handleSearch}
            className="relative flex items-center"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cards..."
              className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-2 rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-redMana"
            />
            <button
              type="submit"
              className="absolute right-2 text-black dark:text-white hover:text-redMana"
            >
              🔍
            </button>
          </form>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black dark:text-white focus:outline-none"
        >
          {isMenuOpen ? "✖" : ""}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-4 p-4">
            {["Home", "Cards", "Decks", "News,", "Profile",  "Sets"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-black dark:text-white hover:text-redMana dark:hover:text-blueMana transition-colors duration-300"
              >
                {item}
              </a>
            ))}

            {/* Search Box in Mobile Menu */}
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cards..."
                className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-redMana"
              />
              <button
                type="submit"
                className="text-black dark:text-white hover:text-redMana"
              >
                🔍
              </button>
            </form>

            {/* Theme Toggle in Mobile Menu */}
            <button
              onClick={toggleTheme}
              className="w-full mt-4 bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600 transition"
            >
              {darkMode ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
