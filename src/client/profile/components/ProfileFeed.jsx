import React from "react";

const posts = [
  {
    id: 1,
    username: "Liliana Vess",
    content: "Just summoned a terrifying demon to control the battlefield! 😈",
    date: "3 hours ago",
  },
  {
    id: 2,
    username: "Chandra Nalaar",
    content: "Burning through enemies with fireballs! 🔥🔥",
    date: "1 day ago",
  },
];

const ProfileFeed = () => {
  return (
    <div className="bg-gray-800 text-white rounded-xl p-6 shadow-lg mt-6">
      <h3 className="text-xl font-bold mb-4 text-red-500">Activity Feed</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-700 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold">{post.username}</h4>
              <span className="text-sm text-gray-400">{post.date}</span>
            </div>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileFeed;
