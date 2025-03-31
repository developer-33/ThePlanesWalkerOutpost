import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CardGallery from './pages/CardGallery'
import DeckS from './decks/DeckShowcase'
import News from './pages/News'
import Profile from './profile/pages/Profile'
import SearchResults from './lib/SearchResults'
import Cards from './componets/cards/Cards'
import DeckDetails from './decks/DeckDetails'
import Login from './auth/Login'
import Sets from './utils/Sets'

const Mainsection = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Cards */}
        <Route path="/cards" element={<CardGallery />} />
        <Route path="/cards/:id" element={<Cards />} />
        {/* Decks */}
        <Route path="/decks/:id" element={<DeckDetails />} />
       <Route path="/decks" element={<DeckS />} />
        {/* Profile */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
   
   
        <Route path="/sets" element={<Sets />} />
      <Route path="/news" element={<News />} />


      </Routes>
    </div>
  )
}

export default Mainsection