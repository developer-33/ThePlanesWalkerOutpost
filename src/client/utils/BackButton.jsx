import React from 'react'
//  nm    ``
const BackButton = () => {
  return (
    <div>
     
         <button onClick={() => window.history.back()} className="bg-red-500 text-white font-bold py-2 px-4
            hover:bg-red-700 transition duration-300 ease-in-out rounded">
          
          Back
        </button>
    </div>
  )
}

export default BackButton