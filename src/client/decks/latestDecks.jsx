import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation

const LatestDecks = () => {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestDecks = async () => {
      try {
        // Fetch mock decks for now (replace with real API later)
        const response = await axios.get("/api/decks/latest");
        console.log("Fetched decks:", response.data); // Log the response to check the structure
        
        if (Array.isArray(response.data)) {
          setDecks(response.data);
        } else {
          console.error("Expected an array of decks, but received:", response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching latest decks:", error);
        setLoading(false);
      }
    };

    fetchLatestDecks();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        Loading latest decks...
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Latest Decks & Strategies
      </h2>

      {/* Decks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {decks && Array.isArray(decks) && decks.length > 0 ? (
          decks.map((deck) => (
            <div
              key={deck.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Deck Image */}
              <img
                src={deck.image || "/images/default-deck.jpg"}
                alt={deck.name}
                className="w-full h-48 object-cover"
              />
              
              {/* Deck Details */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{deck.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {deck.format} • {deck.type}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {deck.description.slice(0, 100)}...
                </p>

                {/* View Deck Button */}
                <div className="mt-4">
                  <Link
                    to={`/decks/${deck.id}`} // Use Link for client-side navigation
                    className="block bg-red-600 text-white text-center py-2 rounded-lg hover:bg-red-700"
                  >
                    View Deck
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 py-8">
            No decks available
          </div>
        )}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <Link
          to="/" // Link to the home page
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
        >
          Explore More Decks
        </Link>
      </div>
    </div>
  );
};

export default LatestDecks;
