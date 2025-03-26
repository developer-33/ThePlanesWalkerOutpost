// import CardSearch from "./componets/CardSearch"

// function App() {
//   return (
//     <div>
//       <h1>
//         <CardSearch />
//       </h1>
//     </div>
//   )
// }

// export default App

// src/App.js

import React, { useEffect, useState } from 'react';
import NavBar from './pages/NavBar';
import Mainsection from './Mainsection';
// import CardSearch from './componets/cards/CardSearch';
import Sidebar from './componets/Sidebar';
import Footer from './utils/Footer';


// import MTGFanpage from './pages/FanPage';
const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="bg-darkBlueMana min-h-screen text-red-500 dark:bg-gray-800 dark:text-white">
          <NavBar />
      
      {/* Header */}
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center">
    
    
        </div>
      </header>
      <button
        onClick={toggleMenu}
        className="fixed top-5 left-5  p-3 bg-blueMana text-white z-600  focus:outline-none"
      >
        <span className="text-2xl">&#9776;</span> {/* Hamburger icon */}
      </button>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
       
       <Mainsection />
      {/* Hero Section */}

      {/* About Section */} 
      {/* <MTGFanpage /> */}

      {/* Card Search */} 

  
      {/* Cards Showcase */}
      {/* <section className="container bg-white divide-amber-800 rounded-lg shadow-lg mx-auto p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Cards</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-
        4">
         <img src="https://via.placeholder.com/150" alt="" />
     {/* <CardSearch /> */}
          
      {/* Footer */}    
      <Footer />
    
    </div>
  );
};

export default App;

