import React from 'react'
import LatestDecks from './latestDecks'
import DeckDetails from './DeckDetails'
import BackButton from '../utils/BackButton'

const DeckPage = () => {
  return (
    <div>
      <LatestDecks />
      <DeckDetails /> 
      <div className="flex justify-center mt-4">
        <BackButton />
      </div>
    </div>
  )
}

export default DeckPage