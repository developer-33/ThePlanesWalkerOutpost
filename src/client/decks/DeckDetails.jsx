import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeckDetails = () => {
  const { id } = useParams(); // Get card ID from URL params
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch(`https://api.scryfall.com/cards/${id}`);

        if (!res.ok) {
          throw new Error("Card not found");
        }

        const data = await res.json();
        setCard(data);
      } catch (error) {
        console.error("Error fetching card:", error);
        setError("Failed to fetch card details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!card) return <p className="text-red-500 text-center">Card not found!</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">{card.name}</h2>
      <p className="text-gray-500 text-center mb-4">{card.type_line}</p>

      <div className="flex justify-center">
        <img
          src={card.image_uris?.normal || card.image_uris?.small}
          alt={card.name}
          className="w-64 h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      <p className="mt-4 text-center text-gray-700 dark:text-gray-300">{card.oracle_text}</p>
    </div>
  );
};

export default DeckDetails;
