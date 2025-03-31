import React from "react";
import cover from "/src/assets/black.jpg"
import { useState } from "react";

const ProfileHeader = () => {
    const [user, setUser] = useState({
      profilePic: "../../assets/defaultProfilePic.png",
      name: "Guest",
      bio: "This is your bio!",
      username: "Guest",
    });

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUser((prev) => ({ ...prev, profilePic: reader.result }));
      reader.readAsDataURL(file);
    }
  };

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
           <div className="flex flex-col items-center mb-6">
          <img
            src={user.profilePic}
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full border-4 border-yellow-500 shadow-lg"
          />
          <input type="file" onChange={handleProfilePicChange} className="mt-2 text-white" />
        </div> 
        <div>
          <h1 className="text-white text-3xl font-bold">Jace Beleren</h1>
          <p className="text-gray-300">Planeswalker - Blue Mana Master</p>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Edit Profile
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition ml-2">
          Logout
        </button>
      </div>

    </div>
  );
};

export default ProfileHeader;
 