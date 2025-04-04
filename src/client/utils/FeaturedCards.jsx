import React, { useEffect, useState } from "react";
import axios from "axios";
import Model from "react-modal";

const FeaturedCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchFeaturedCards = async () => {
      try {
        const response = await axios.get(
          "https://api.scryfall.com/cards/search?q=type%3Acreature&order=edhrec"
        );
        setCards(response.data.data.slice(0, 5)); // Get top 5 cards
      } catch (error) {
        console.error("Error fetching featured cards:", error);
      }
    };

    fetchFeaturedCards();
  }, []);

  return (
    <div className="flex overflow-x-auto space-x
      
      mt-6 p-4">
      {cards.map((card) => (
        <div key={card.id} className="w-64
           
          
         text-black
         p-4
         rounded-lg shadow-md">
          {/* Card Image */}


          
          <div className="p-4 space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
  <div className="group">
    <img
      src={card.image_uris?.normal}
      alt={card.name}
      className="w-full h-72 object-cover rounded-t-lg shadow-md mb-4 group-hover:scale-105 transition-transform duration-300"
    />
    <img
      src={card.image_uris?.art_crop}
      alt={`Image of ${card.name}`}
      className="w-full h-72 object-cover rounded-t-lg shadow-md mb-4"
    />
  </div>
  {/* Card Type */}
  <p className="text-sm text-gray-500 dark:text-gray-400">{card.type_line}</p>

  {/* Card Set Symbol */}
  <img
    src={card.set_icon?.icon_svg_uri}
    alt={`${card.set_name} symbol`}
    className="w-8 h-8 mb-2"
  />
  {/* Card Rarity */}
  <p className="text-sm text-gray-500 dark:text-gray-400">{card.rarity}</p>

  {/* Card Color Identity */}
  <div className="flex space-x-2 mb-2">
    {card.color_identity.map((color) => (
      <span
        key={color}
        className={`w-4 h-4 rounded-full bg-${color}-500`}
      ></span>
    ))}
  </div>

  {/* Card Name */}
  <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">{card.name}</h3>

  {/* Card Details Section */}
  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
    <p className="font-medium">{card.set_name}</p>
    <p className="text-sm">{card.rarity}</p>
    <p className="text-red-600">{card.mana_cost}</p>
    <p className="text-blue-500">{card.power}/{card.toughness}</p>
    <p className="text-green-500">{card.loyalty}</p>
    <p className="italic text-gray-600">{card.text}</p>
    <p className="italic text-gray-600">{card.flavor_text}</p>
  </div>

  {/* Artist and Layout */}
  <div className="space-y-2">
    <p className="text-purple-500">{card.artist}</p>
    <p className="text-orange-500">{card.layout}</p>
  </div>

  {/* Additional Info */}
  <div className="space-y-2 text-sm text-gray-500">
    <p>Colors: <span className="text-blue-500">{card.colors.join(", ")}</span></p>
    <p>EDHREC Rank: {card.edhrec_rank}</p>
    <p>Prints: <a href={card.prints_search_uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Search Prints</a></p>
    <p><a href={card.scryfall_uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">View on Scryfall</a></p>
    <p>Released At: {card.released_at}</p>
    <p>Type: {card.type_line}</p>
  </div>
</div>

        </div>
      ))}
    </div>
  );
};

export default FeaturedCards;
