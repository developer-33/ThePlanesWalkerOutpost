import React, { useEffect, useState } from "react";
import  fetchMTGArticles  from "../Crawler/FetchNews";

const NewsStand = () => {
  const [articles, setArticles] = useState([]);  // Ensure default is an empty array
  const [error, setError] = useState(null);      // Track errors

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchMTGArticles();
        if (data && Array.isArray(data)) {
          setArticles(data);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        setError(err.message);
      }
    };
    getArticles();
  }, []);

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl text-indigo-700 dark:text-indigo-300">{article.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{article.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{article.publishedAt}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400">No articles found.</p>
      )}
    </div>
  );
};

export default NewsStand;
