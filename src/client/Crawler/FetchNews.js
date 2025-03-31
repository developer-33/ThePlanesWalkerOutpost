export const fetchMTGArticles = async () => {
  const API_KEY = 'b938c6873a89461fadbbb4f5ec5462cf'; // Replace with actual key
  const URL = `https://newsapi.org/v2/everything?q=magic%20the%20gathering&apiKey=${API_KEY}`;

  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

    const data = await response.json();
    console.log("API Response:", data); // Log response for debugging
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching MTG articles:", error);
    return [];
  }
};

export default fetchMTGArticles;




