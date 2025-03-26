import { useState } from "react";
import CardModal from "./CardModel"; // Make sure this is correctly imported

const CardSearch = () => {
  const [search, setSearch] = useState(""); 
  const [rarity, setRarity] = useState(""); 
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const fetchCards = async () => {
    const query = `q=${search}${rarity ? `+rarity:${rarity}` : ""}`;
    const response = await fetch(`https://api.scryfall.com/cards/search?${query}`);
    const data = await response.json();
    setCards(data.data);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card); 
  };

  const handleCloseModal = () => {
    setSelectedCard(null); 
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800">
      <div className="flex gap-4 mb-4">
        {/* Search Input */}
        <input
          type="text"
          className="border rounded p-2 flex-1 dark:bg-gray-700 dark:text-white"
          placeholder="Search for a card"
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />

        {/* Rarity Filter */}
        <select
          className="border rounded p-2 dark:bg-gray-700 dark:text-white"
          value={rarity}
          onChange={(e) => setRarity(e.target.value)} 
        >
          <option value="">All Rarities</option>
          <option value="common">Common</option>
          <option value="uncommon">Uncommon</option>
          <option value="rare">Rare</option>
          <option value="mythic">Mythic</option>
        </select>
        
        {/* Search Button */}
        <button
          onClick={fetchCards}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Card Modal */}
      {selectedCard && <CardModal card={selectedCard} onClose={handleCloseModal} />}

      {/* Display Cards */}
      <div className="mt-4">
        {cards.length > 0 ? (
          <ul>
            {cards.map((card) => (
              <li
                key={card.id}
                className="border p-2 mt-2 rounded cursor-pointer dark:bg-gray-700 dark:text-white"
                onClick={() => handleCardClick(card)}
              >
                <h3 className="font-bold">{card.name}</h3>
                <img src={card.image_uris?.normal} alt={card.name} className="w-32 h-48 object-cover" />
                <p>{card.type_line}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No cards found</p>
        )}
      </div>
    </div>
  );
};

export default CardSearch;

