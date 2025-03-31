import React from 'react';
import PropTypes from 'prop-types';
const ArticleList = ({ articles }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">MTG News Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-white">{article.title}</h3>
            <p className="text-gray-400 text-sm">
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-gray-300 mt-2">
              {article.description || "No description available."}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 inline-block"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
      {articles.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No articles found.</p>
      )}

        

    </div>
  );
};

export default ArticleList;
