import React, { useState, useEffect } from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import ProfileFeed from "../components/ProfileFeed";

import { Link } from "react-router-dom";
import ScrollToTopButton from "../../utils/ScrollToTopButton";


const Profile = () => {
  // State to track scroll position for ScrollToTop
  const [showScroll, setShowScroll] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Sticky Profile Header */}
      <div className="sticky top-0 z-50 shadow-md">
        <ProfileHeader />
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Stats and Deck Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProfileStats />
     
          <div className="hidden lg:block">
            {/* Optional Slot for Future Widgets */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                Featured Deck
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Showcase your best Magic deck here.
              </p>
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
        </div>

        {/* Activity Feed with Infinite Scroll */}
        <div className="mt-8">
          <ProfileFeed />
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && <ScrollToTopButton />}

      {/* Footer */}

    </div>
  );
};

export default Profile;
