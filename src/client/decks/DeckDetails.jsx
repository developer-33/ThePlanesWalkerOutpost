// src/components/DeckDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeckDetails = () => {
  const { id } = useParams(); // Get deck ID from URL params
  const [deck, setDeck] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the selected deck details from Scryfall API
  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const res = await fetch(`https://api.scryfall.com/cards/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch deck details");
        }

        const data = await res.json();
        setDeck(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching deck:", error);
        setError("Failed to fetch deck details.");
        setLoading(false);
      }
    };

    fetchDeck();
  }, [id]);

  // Loading state
  if (loading) {
    return <p className="text-center text-gray-500">Loading deck details...</p>;
  }

  // Error state
  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  // Deck not found
  if (!deck) {
    return <p className="text-red-500 text-center">Deck not found!</p>;
  }

  // Render deck details
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">{deck.name}</h2>
      <p className="text-gray-500 text-center mb-4">Deck ID: {id}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deck.cards?.map((card) => (
          <div
            key={card.id}
            className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"
          >
            <img
              src={card.image_uris?.normal || card.image_uris?.small}
              alt={card.name}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-2">{card.name}</h3>
            <p className="text-gray-500">{card.type_line}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {Array.isArray(deck.data) &&
    deck.data.map((card) => (
      <div
        key={card.id}
        className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"
      >
        <img
          src={card.image_uris?.normal || card.image_uris?.small}
          alt={card.name}
          className="w-full h-56 object-cover rounded-lg"
        />
        <h3 className="text-xl font-bold mt-2">{card.name}</h3>
        <p className="text-gray-500">{card.type_line}</p>
      </div>
    ))}
</div>
    </div>
  );
};

export default DeckDetails;
