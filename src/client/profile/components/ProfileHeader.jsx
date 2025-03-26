import React from "react";
import cover from "/src/assets/black.jpg"

const ProfileHeader = () => {
  return (
    <div className="relative w-full h-64">
      {/* Cover Image */}
      <img
        src={cover}
        alt="Profile Cover"
        className="w-full h-full object-cover"
      />
      {/* Profile Info */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute bottom-4 left-4 flex items-center space-x-4">
        {/* Avatar */}
        <img
          src="https://via.placeholder.com/100"
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full border-4 border-yellow-500"
        />
        <div>
          <h1 className="text-white text-3xl font-bold">Jace Beleren</h1>
          <p className="text-gray-300">Planeswalker - Blue Mana Master</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
