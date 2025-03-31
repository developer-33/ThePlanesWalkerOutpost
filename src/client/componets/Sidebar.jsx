/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import useTheme from "./hooks/Dark"; // ✅ Fixed typo in import path

import Logo from "./Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
          className="fixed inset-0 bg-black bg-opacity-75 z-50"
          onClick={toggleMenu}
        />
      )}

      {/* ✅ Sidebar */}
      <div
        className={`fixed top-0 left-0 w-60 h-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white shadow-lg transform transition-transform duration-300
         ease-in-out
          overflow-y-auto z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
   
        {/* ✅ Sidebar Header */}
        <div className="p-4 border-b border-red-700 flex items-center justify-between">
          <Logo />
         
        </div>

        {/* ✅ Search Bar */}
        <form onSubmit={handleSearch} className="relative flex items-center p-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cards..."
            className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white p-3 pr-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-4 text-black dark:text-white hover:text-red-500 transition"
            aria-label="Search"
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
            { name: "Profile", path: "/profile" },
            { name: "login", path: "/login" },

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

        {/* ✅ Back Button */}
       

        {/* ✅ Theme Switcher */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-red-700">
        <div className="flex justify-center items-center p-4">
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" checked={darkMode} onChange={toggleTheme} className="sr-only peer" />
    <div className="w-14 h-7 bg-gray-300 dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-red-500 rounded-full peer dark:peer-focus:ring-gray-300 transition-all after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-7 peer-checked:bg-red-500"></div>
    <span className="ml-3 text-sm font-medium">{darkMode ? "Dark Mode" : "Light Mode"}</span>
  </label>
</div>

          {/* BackButtom   */}
          <div className="p-4">
          <button
            onClick={(toggleMenu)}
            className="w-full bg-red-500 text-white rounded-lg p-2 hover:bg-red-600 transition"
            aria-label="Back"
          >
            Back
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
