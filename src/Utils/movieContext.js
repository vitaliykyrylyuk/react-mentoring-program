import React, { createContext, useState } from 'react'

const movieContext = createContext({})

const MovieContextProvider = ({ children }) => {
  const [currentMovie, setCurrentMovie] = useState({})

  return (
    <movieContext.Provider value={{ currentMovie, setCurrentMovie }}>
      {children}
    </movieContext.Provider>
  )
}

export { movieContext, MovieContextProvider }
