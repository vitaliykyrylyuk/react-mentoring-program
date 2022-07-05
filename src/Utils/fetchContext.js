import React, { createContext, useState } from 'react'

const FetchContext = createContext({})

const FetchContextProvider = ({ children }) => {
  const [currentFetchParams, setCurrentFetchParams] = useState({ sortOrder: 'asc' })

  return (
    <FetchContext.Provider value={{ currentFetchParams, setCurrentFetchParams }}>
      {children}
    </FetchContext.Provider>
  )
}

export { FetchContext, FetchContextProvider }
