import React from "react";
import { FaHeart, FaComment } from "react-icons/fa";

const posts = [
  {
    id: 1,
    username: "Liliana Vess",
    avatar: "https://via.placeholder.com/40", // Replace with real avatar URL
    content: "Just summoned a terrifying demon to control the battlefield! 😈",
    date: "3 hours ago",
  },
  {
    id: 2,
    username: "Chandra Nalaar",
    avatar: "https://via.placeholder.com/40",
    content: "Burning through enemies with fireballs! 🔥🔥",
    date: "1 day ago",
  },
];

const ProfileFeed = () => {
  return (
    <div className="bg-gray-800 text-white rounded-xl p-6 shadow-lg mt-6">
      <h3 className="text-2xl font-bold mb-5 text-red-500">Activity Feed</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-700 p-5 rounded-lg border border-gray-600 transition-transform hover:scale-105"
          >
            <div className="flex items-center space-x-3 mb-2">
              <img
                src={post.avatar}
                alt={post.username}
                className="w-10 h-10 rounded-full border border-gray-500"
              />
              <div>
                <h4 className="text-lg font-semibold">{post.username}</h4>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
            </div>
            <p className="mb-3">{post.content}</p>
            <div className="flex space-x-4 text-gray-400">
              <button className="flex items-center space-x-1 hover:text-red-400">
                <FaHeart />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-400">
                <FaComment />
                <span>Comment</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileFeed;
