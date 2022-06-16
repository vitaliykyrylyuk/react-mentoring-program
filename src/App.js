import React, { createContext, useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

const MovieDetailContext = createContext({})

function App () {
  const [movieName, setMovieName] = useState('Inception')

  return (
    <>
      <MovieDetailContext.Provider value={movieName}>
        <Header movieDetails={movieName}/>
        <Main movieDetails={movieName}/>
      </MovieDetailContext.Provider>
      <Footer/>
    </>
  )
}

export default App
