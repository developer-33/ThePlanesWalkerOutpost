import React from "react";

const stats = [
  { name: "Games Played", value: 120 },
  { name: "Decks Created", value: 15 },
  { name: "Total Wins", value: 85 },
];

const ProfileStats = () => {
  return (
    <div className="bg-gray-800 text-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-yellow-400">Player Stats</h3>
      <div className="space-y-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="flex justify-between border-b border-gray-700 pb-2"
          >
            <span>{stat.name}</span>
            <span className="font-bold">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileStats;
