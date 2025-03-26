import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CardGallery from './pages/CardGallery'
import DeckS from './pages/DeckShowcase'
import News from './pages/News'
import Profile from './profile/pages/Profile'
import SearchResults from './utils/SearchResults'
import Cards from './componets/cards/Cards'
import DeckDetails from './utils/DeckDetails'
import Sets from './utils/Sets'

const Mainsection = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<CardGallery />} />
        <Route path="/decks/:id" element={<DeckDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/cards/:id" element={<Cards />} />
        <Route path="/decks" element={<DeckS />} />
        <Route path="/sets" element={<Sets />} />
      </Routes>
    </div>
  )
}

export default Mainsection