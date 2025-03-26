import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center space-x-2 text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
    >
      <FontAwesomeIcon icon={faArrowLeft} /> {/* Back arrow icon */}
      <span>Back</span>
    </button>
  );
};

export default BackButton;
