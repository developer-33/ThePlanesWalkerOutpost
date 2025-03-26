import React from "react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-blueMana text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all"
    >
      ⬆️ Top
    </button>
  );
};

export default ScrollToTopButton;
