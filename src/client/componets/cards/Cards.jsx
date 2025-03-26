import React, { useState, useEffect } from "react";
import searchCards from "../../utils/searchCards";
import CardModal from "./CardModel";
import axios from "axios";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCards = async () => {
    try {
      const response = await axios.get("https://api.scryfall.com/cards");
      setCards(response.data.data); // Scryfall returns an object with a "data" property
    } catch (error) {
      console.error("Failed to fetch cards:", error);
      alert("Failed to fetch cards.");
    }
  };
  
  useEffect(() => {
    fetchCards(currentPage);
  }, [currentPage]);

  // Open Modal
  const openModal = (card) => {
    setSelectedCard(card);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedCard(null);
  };

  // Pagination Controls
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-blueMana mb-6">
        Browse Magic Cards
      </h2>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => openModal(card)}
          >
            <img
              src={card.image_uris?.normal || "/placeholder.jpg"}
              alt={card.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-black dark:text-white">
                {card.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {card.type_line}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-700 text-white rounded-lg ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-600"
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className="px-4 py-2 bg-blueMana text-white rounded-lg hover:bg-blue-500"
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {selectedCard && (
        <CardModal card={selectedCard} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Cards;
