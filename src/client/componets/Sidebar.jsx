import React, { useEffect, useState } from "react";
import useTheme from "../componets/hooks/Dark";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  const [darkMode, toggleTheme] = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Apply dark mode to the body class dynamically
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        toggleMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, toggleMenu]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-redMana dark:bg-gray-800 text-black dark:text-white transform transition-transform ease-in-out duration-300 z-10 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-red-700 flex justify-between items-center">
        <Logo />
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="relative flex items-center p-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search cards..."
          className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-3 pr-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-redMana"
        />
        <button
          type="submit"
          className="absolute right-5 text-black dark:text-white hover:text-redMana transition"
        >
          🔍
        </button>
      </form>

      {/* Close Button */}
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 bg-black text-white p-2 rounded-full hover:bg-red-500 transition"
        aria-label="Close menu"
      >
        ✖
      </button>

      {/* Navigation Links */}
      <ul className="flex flex-col p-4 space-y-6">
        {[
          { name: "Home", path: "/" },
          { name: "News", path: "/news" },
          { name: "Cards", path: "/cards" },
          { name: "Decks", path: "/decks" },
        ].map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`block w-full text-center ${
                location.pathname === item.path
                  ? "text-yellow-500"
                  : "text-black dark:text-white"
              } hover:text-white dark:hover:text-blueMana transition-colors duration-300 p-2`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Theme Switcher Button - Full Width, Pinned to Bottom */}
      <div className="absolute bottom-0 left-0 w-full p-4 border-t border-red-700">
        <button
          onClick={toggleTheme}
          className="w-full bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition text-center"
        >
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
