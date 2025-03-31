import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import ProfileFeed from "../components/ProfileFeed";
import ScrollToTopButton from "../../utils/ScrollToTopButton";

const Profile = () => {
  const [user, setUser] = useState({
    profilePic: "../../assets/defaultProfilePic.png",
    name: "Guest",
    bio: "This is your bio!",
    username: "Guest",
  });
  const [showScroll, setShowScroll] = useState(false);
  const [editingBio, setEditingBio] = useState(false);
  const [newBio, setNewBio] = useState(user.bio);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    axios.get("/api/userProfile").then((response) => setUser(response.data));
  }, []);

  const handleBioChange = () => {
    setUser((prev) => ({ ...prev, bio: newBio }));
    setEditingBio(false);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUser((prev) => ({ ...prev, profilePic: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="sticky top-0 z-50 shadow-md">
        <ProfileHeader />
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.profilePic}
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full border-4 border-yellow-500 shadow-lg"
          />
          <input type="file" onChange={handleProfilePicChange} className="mt-2 text-white" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProfileStats />
          <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold text-black dark:text-white">Featured Deck</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Showcase your best Magic deck here.</p>
          </div>
          <li>
            <Link
              to="/"
              className={`block w-full text-center ${
                window.location.pathname === "/" ? "text-yellow-500" : "text-black dark:text-white"
              } hover:text-white dark:hover:text-blueMana transition-colors duration-300 p-2`}
            >
              Home
            </Link>
          </li>
        </div>

        <div className="mt-8">
          <ProfileFeed />
        </div>
      </div>

      {showScroll && <ScrollToTopButton />}
    </div>
  );
};

export default Profile;
