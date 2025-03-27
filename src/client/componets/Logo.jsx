import React from 'react'

const Logo = () => {
  return (
    <div>
          <div className="flex items-center space-x-3 mt-4 mb-8">
        <img
          src="https://via.placeholder.com/40"
          alt="MTG Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-3xl text-white font-extrabold tracking-wide"></h1>
      </div>
      <canvas id="canvas"></canvas>
    </div>
  )
}

export default Logo