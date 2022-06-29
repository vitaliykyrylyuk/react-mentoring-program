import React, { createContext, useState } from 'react'

const MovieContext = createContext({})

const MovieContextProvider = ({ children }) => {
  const [currentMovie, setCurrentMovie] = useState({})

  return <MovieContext.Provider value={{ currentMovie, setCurrentMovie }}>
    {children}</MovieContext.Provider>
}

export { MovieContext, MovieContextProvider }
