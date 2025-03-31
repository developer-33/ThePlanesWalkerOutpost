import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import ProfileFeed from "../components/ProfileFeed";
import ScrollToTopButton from "../../utils/ScrollToTopButton";
import BackButton from "../../utils/BackButton";

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
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isEditingProfilePic, setIsEditingProfilePic] = useState(false);
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

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  }
  const handleLogout = () => {
    // Implement logout logic here
    console.log("User logged out");
  };
  const handleEditProfile = () => {
    // Implement edit profile logic here
    console.log("Edit profile clicked");
  };
  const handleBack = () => {
    // Implement back logic here
    console.log("Back button clicked");
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };
  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className="sticky top-0 z-50 shadow-md">
        <ProfileHeader />
      </div>
      <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex items-center">
          <button
            onClick={handleBack}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Back
          </button>
          <button   

            onClick={handleEditProfile} 
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition ml-2" 
          > 
            Edit Profile
          </button>
        </div>
        <div className="flex items-center">
          <button
            onClick={handleLogout}  
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"    

        

      <div className="container mx-auto px-4 py-6">
        {/* <div className="flex flex-col items-center mb-6">
          <img
            src={user.profilePic}
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full border-4 border-yellow-500 shadow-lg"
          />
          <input type="file" onChange={handleProfilePicChange} className="mt-2 text-white" />
        </div> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProfileStats />
          {/* <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold text-black dark:text-white">Featured Deck</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Showcase your best Magic deck here.</p>
          </div> */}
        
        </div>
        {/* Bio */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-black dark:text-red-500 mb-2">Bio</h2>
          {editingBio ? (
            <div className="flex items-center">
              <textarea
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
                className="w-full p-2 bg-white dark:bg-gray-800 border-collapse text-black dark:text-red-400 border rounded-lg"
              />
              <button onClick={handleBioChange} className="ml-2 bg-blue-500 text-white p-2 rounded-lg">
                Save
              </button>
            </div>
          ) : (
            <p className="text-gray-700 dark:text-gray-300">{user.bio}</p>
          )}
          <button onClick={() => setEditingBio(!editingBio)} className="mt-2 text-blue-500">
            {editingBio ? "Cancel" : "Edit Bio"}
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-2">Recent Activity</h2>
          <p className="text-gray-700 dark:text-gray-300">View your recent activity here.</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-2">Friends</h2>
          <p className="text-gray-700 dark:text-gray-300">View your friends here.</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-2">Decks</h2>
          <p className="text-gray-700 dark:text-gray-300">View your decks here.</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-2">Cards</h2>
          <p className="text-gray-700 dark:text-gray-300">View your cards here.</p>
        </div>
        <div className="mt-8">
          <ProfileFeed />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-2">Recent Matches</h2>
          <p className="text-gray-700 dark:text-gray-300">View your recent matches here.</p>
        </div>
        <BackButton />
      </div>
     

      {showScroll && <ScrollToTopButton />}
    </div>
  );
};

export default Profile;
