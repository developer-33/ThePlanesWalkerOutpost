import React, { useState, useEffect } from "react";

function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://api.scryfall.com/cards/search?q=+color:W')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch cards');
        }
        return response.json();
      })
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card) => (
        <div key={card.id} className="border p-4 rounded-md shadow-lg">
          <h3 className="text-lg font-bold">{card.name}</h3>
          <p>Color: {card.color}</p>
          <img src={card.image_url} alt={card.name} className="h-40 w-auto" />
          <p>{card.cardType}</p>
          <p>{card.manaCost}</p>
          <p>Power: {card.power}</p>
          <p>Toughness: {card.toughness}</p>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;
