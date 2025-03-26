import React from "react";

const decks = [
  { id: 1, name: "Dimir Control", color: "Blue/Black" },
  { id: 2, name: "Mono Red Aggro", color: "Red" },
  { id: 3, name: "Selesnya Tokens", color: "Green/White" },
];

const DeckShowcase = () => {
  return (
    <div className="bg-gray-800 text-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-green-400">Deck Showcase</h3>
      <div className="space-y-4">
        {decks.map((deck) => (
          <div
            key={deck.id}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
          >
            <h4 className="text-lg font-semibold">{deck.name}</h4>
            <p className="text-sm text-gray-400">{deck.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeckShowcase;
