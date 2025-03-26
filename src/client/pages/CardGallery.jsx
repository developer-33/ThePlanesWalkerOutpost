import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

const CardGallery = () => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [rarity, setRarity] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      let query = [];

      if (search) query.push(search);
      if (color) query.push(`color:${color}`);
      if (type) query.push(`type:${type}`);
      if (rarity) query.push(`rarity:${rarity}`);

      const queryString = query.length ? query.join(" ") : "cmc<=2";

      const response = await axios.get(
        `https://api.scryfall.com/cards/search?q=${encodeURIComponent(
          queryString
        )}`
      );

      setCards(response.data.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-6 text-yellow-500">
        Magic: The Gathering Card Gallery
      </h1>
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        <input
          type="text"
          className="p-3 border border-yellow-500 rounded-lg bg-gray-800 text-white"
          placeholder="Search for a card..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-3 border border-yellow-500 rounded-lg bg-gray-800 text-white"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="">Any Color</option>
          <option value="W">White</option>
          <option value="U">Blue</option>
          <option value="B">Black</option>
          <option value="R">Red</option>
          <option value="G">Green</option>
        </select>

        <select
          className="p-3 border border-yellow-500 rounded-lg bg-gray-800 text-white"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Any Type</option>
          <option value="creature">Creature</option>
          <option value="instant">Instant</option>
          <option value="sorcery">Sorcery</option>
          <option value="artifact">Artifact</option>
          <option value="enchantment">Enchantment</option>
          <option value="planeswalker">Planeswalker</option>
        </select>

        <select
          className="p-3 border border-yellow-500 rounded-lg bg-gray-800 text-white"
          value={rarity}
          onChange={(e) => setRarity(e.target.value)}
        >
          <option value="">Any Rarity</option>
          <option value="common">Common</option>
          <option value="uncommon">Uncommon</option>
          <option value="rare">Rare</option>
          <option value="mythic">Mythic</option>
        </select>

        <button
          onClick={fetchCards}
          className="px-4 py-3 bg-red-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
        >
          Search
        </button>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div
              key={card.id}
              className="bg-black dark:bg-gray-700 p-4 rounded-lg shadow-lg transform hover:scale-105 transition cursor-pointer"
              onClick={() => setSelectedCard(card)}
            >
              <img
                src={card.image_uris?.normal}
                alt={card.name}
                className="w-full rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2 text-center">
                {card.name}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-yellow-500">
            No cards found.
          </p>
        )}
      </div>

      {selectedCard && (
        <Modal
          isOpen={!!selectedCard}
          onRequestClose={() => setSelectedCard(null)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg text-white">
            <h2 className="text-2xl font-bold mb-4">{selectedCard.name}</h2>
            <img
              src={selectedCard.image_uris?.large}
              alt={selectedCard.name}
              className="w-full rounded-md"
            />
            <button
              onClick={() => setSelectedCard(null)}
              className="mt-4 px-4 py-2 bg-green-500  text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CardGallery;
