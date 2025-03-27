import React, { useEffect, useState } from "react";
import useTheme from "../componets/hooks/Dark"; // Fixed the typo

import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  const [darkMode, toggleTheme] = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // ✅ Apply dark mode to the body dynamically
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // ✅ Close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        toggleMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, toggleMenu]);

  // ✅ Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      {/* ✅ Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleMenu}
        />
      )}

      {/* ✅ Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-redMana dark:bg-gray-800 text-black dark:text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ✅ Sidebar Header */}
        <div className="p-4 border-b border-red-700 flex justify-between items-center">
          <Logo />
          <button
            onClick={toggleMenu}
            className="text-black dark:text-white hover:text-red-500 transition"
            aria-label="Close menu"
          >
            ✖
          </button>
        </div>

        {/* ✅ Search Bar */}
        <form onSubmit={handleSearch} className="relative flex items-center p-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cards..."
            className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-3 pr-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-4 text-black dark:text-white hover:text-redMana transition"
          >
            🔍
          </button>
        </form>

        {/* ✅ Navigation Links */}
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
                onClick={toggleMenu} // ✅ Close sidebar on link click
                className={`block w-full text-center rounded-lg p-2 transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "bg-red-500 text-white"
                    : "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Theme Switcher */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-red-700">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 transition"
          >
            {darkMode ? (
              <>
                🌙 <span className="ml-2">Dark Mode</span>
              </>
            ) : (
              <>
                ☀️ <span className="ml-2">Light Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
