import React from "react";
import NewsStand from "../Crawler/ArticlePage"; // Import the NewsStand component

const News = () => {
  return (
    <div className="text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 via-yellow-700 to-orange-700 h-64 flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-4xl font-extrabold text-white">Latest News</h1>
          <p className="text-xl mt-4 text-white">
            Stay updated with the latest happenings in the world of Magic: The Gathering!
          </p>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-300">
            Latest Articles
          </h2>
          
          {/* Display the NewsStand Component */}
          <NewsStand />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 MTG Fan Page. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#home" className="text-indigo-400 hover:text-indigo-300 mx-4">
              Home
            </a>
            <a href="#about" className="text-indigo-400 hover:text-indigo-300 mx-4">
              About
            </a>
            <a href="#cards" className="text-indigo-400 hover:text-indigo-300 mx-4">
              Cards
            </a>
            <a href="#decks" className="text-indigo-400 hover:text-indigo-300 mx-4">
              Decks
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News;
