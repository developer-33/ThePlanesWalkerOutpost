// const searchCards = async (searchQuery) => {
//     try {
//       const response = await fetch(
//         `https://api.scryfall.com/cards/search?q=${encodeURIComponent(searchQuery)}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch card data");
//       }
//       const data = await response.json();
//       return data.data; // Array of matching cards
//     } catch (error) {
//       console.error("Error fetching cards:", error);
//       return [];
//     }
//   };
  
//   export default searchCards;
import axios from "axios";

const BASE_URL = "https://api.scryfall.com/cards/search";

// Function to fetch cards using Scryfall API
const searchCards = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        q: query,
        page: page,
      },
    });

    // Return results if found
    if (response.data && response.data.data) {
      return response.data.data;
    }
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw new Error("Failed to fetch cards.");
  }
};

export default searchCards;
