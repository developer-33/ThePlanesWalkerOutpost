import React from "react";
import magicLogo from "../../assets/Magic5.png"; // ✅ Corrected import

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 mb-8">
      <img
        src={magicLogo}
        alt="MTG Logo"
        className="w-50 h-50 p-2  object-cover
        rounded-full shadow-lg bg-white dark:bg-gray-800
        dark:shadow-gray-700
        border-4 border-red-500
        hover:shadow-xl transition-shadow duration-300 
      "
      />
  
    </div>
  );
};

export default Logo;
