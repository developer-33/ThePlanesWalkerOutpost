import React from "react";
import FeaturedCards from "../utils/FeaturedCards";
import LatestDecks from "../decks/latestDecks";

import SearchResults from "../lib/SearchResults";
import { useState } from "react";
// import CommunitySpotlight from "../components/CommunitySpotlight";
// import TournamentSection from "../components/TournamentSection";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/mtg-bg.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold">Welcome to the MTG Fan Page</h1>
            <p className="mt-2 text-lg">Discover, Build, and Compete with Fellow Planeswalkers!</p>
            <div className="mt-6">
            <form
            onSubmit={handleSearch}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cards..."
              className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-2 rounded-lg w-48 focus:outline-9 focus:ring-2 focus:ring-redMana"
            />
            <button
              type="submit"
              className="ml-2 p-2 rounded-lg   bg-gray-100 dark:bg-red-400 text-black dark:text-white hover:text-redMana"
            >
              🔍
            </button>
          </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Featured Cards
        </h2>
        
        <FeaturedCards />
      </section>

      {/* Latest Decks Section */}
      <section className="bg-gray-200 dark:bg-gray-800 py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Latest Decks & Strategies
        </h2>
        <LatestDecks />
      </section>

      {/* Tournament / Challenge Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Weekly Challenge
        </h2>
        {/* <TournamentSection /> */}
      </section>

      {/* Community Spotlight */}
      <section className="bg-gray-200 dark:bg-gray-800 py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Community Spotlight
        </h2>
        {/* <CommunitySpotlight /> */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 MTG Fan Page. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
