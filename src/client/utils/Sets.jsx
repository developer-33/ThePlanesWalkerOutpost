import React, { useEffect, useState } from "react";

const Sets = () => {
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch sets from Scryfall API
  useEffect(() => {
    const fetchSets = async () => {
      try {
        const res = await fetch("https://api.scryfall.com/sets");
        if (!res.ok) {
          throw new Error("Failed to fetch sets");
        }

        const data = await res.json();

        if (data.data && data.data.length > 0) {
          setSets(data.data);
        } else {
          setSets([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sets:", error);
        setError("Failed to fetch sets.");
        setLoading(false);
      }
    };

    fetchSets();
  }, []);

  // Loading state
  if (loading) {
    return <p className="text-center text-gray-500">Loading sets...</p>;
  }

  // Error state
  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  // No sets found
  if (sets.length === 0) {
    return <p className="text-red-500 text-center">No sets found!</p>;
  }

  // Render sets list
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Magic: The Gathering Sets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sets.map((set) => (
          // Each set card
          // You can customize the styling as per your design

          <div
            key={set.id}
            onClick={() => window.open(set.search_uri, "_blank")}
            // Open set details in a new tab
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
            // Add hover effect
            // You can customize the styling as per your design
            className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"
          >
            <h3 className="text-xl font-bold">{set.name}</h3>
            <p className="text-gray-500">Released: {set.released_at || "N/A"}</p>
            <img
              src={set.icon_svg_uri}
              alt={`${set.name} icon`}
              className="w-12 h-12 mt-2"
            />
            <p className="mt-2 text-sm">{set.set_type.replace("_", " ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sets;
