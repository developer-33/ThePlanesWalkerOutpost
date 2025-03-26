import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Decks = () => {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching deck data
  const fetchDecks = async () => {
    try {
      const res = await fetch(
        "https://api.scryfall.com/cards/search?q=type:legendary"
      );
      const data = await res.json();
      console.log("API Response:", data); // Check what you get back
  
      if (data.data && data.data.length > 0) {
        setDecks(data.data);
      } else {
        setDecks([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching decks:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDecks();
  }, []);
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-redMana">
        Loading decks...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
        🃏 Available Decks
      </h1>

      {/* Deck Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {decks.map((deck) => (
          <div
            key={deck.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 transition transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-2">
              {deck.name}
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              {deck.description || "No description available."}
            </p>

            <Link
              to={`/decks/${deck.id}`}
              className="inline-block bg-redMana text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* No Decks Found */}
      {decks.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          No decks found. Check back later!
        </p>
      )}
    </div>
  );
};

export default Decks;
