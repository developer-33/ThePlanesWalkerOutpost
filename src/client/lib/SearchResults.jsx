import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import searchCards from "../utils/searchCards"; // Import the function

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      if (query) {
        const results = await searchCards(query);
        setCards(results);
      }
    };
    fetchCards();
  }, [query]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      {cards.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-gray-800 p-4 rounded-lg">
              <img
                src={card.image_uris?.normal || "/placeholder.jpg"}
                alt={card.name}
                className="w-full rounded-md"
              />
              <h3 className="text-white mt-2">{card.name}</h3>
              <p className="text-gray-400">{card.type_line}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
