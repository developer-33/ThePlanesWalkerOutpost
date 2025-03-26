/* eslint-disable react/prop-types */
import { useState } from 'react';

const CardModal = ({ card, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center     ">
      <div className="bg-white dark:bg-gray-800 text-yellow-300 dark:text-white p-6 rounded-lg max-w-3xl max-h-[80vh] overflow-auto shadow-lg transform transition-all ease-in-out duration-300">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h3 className="font-semibold text-2xl text-gray-800 dark:text-gray-100">{card.name}</h3>
          <button 
            onClick={onClose} 
            className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
          >
            &times; Close
          </button>
        </div>

        {/* Card Image */}
        <div className="flex justify-center mb-4">
          <img 
            src={card.image_uris?.normal} 
            alt={card.name} 
            className="w-72 h-auto object-contain rounded-lg shadow-md" 
          />
        </div>

        {/* Card Details */}
        <div className="space-y-3">
          {/* Card Type */}
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{card.type_line}</p>
          
          {/* Card Description / Oracle Text */}
          {card.oracle_text && (
            <p className="text-sm text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Oracle Text:</span> {card.oracle_text}
            </p>
          )}

          {/* Set Information */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Set: </span>{card.set_name}
          </p>
          
          {/* Rarity */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Rarity: </span>{card.rarity.charAt(0).toUpperCase() + card.rarity.slice(1)}
          </p>

          {/* Card Link */}
          <div className="mt-4 text-center">
            <a 
              href={card.scryfall_uri} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
            >
              View this card on Scryfall
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;

