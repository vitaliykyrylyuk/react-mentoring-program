import React, { createContext, useState, useContext } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { MovieContextProvider } from "./Utils/MovieContext";

function App () {
  const [movieName, setMovieName] = useState('Inception')

  return (
    <>
      <MovieContextProvider>
        <Header movieDetails={movieName}/>
        <Main movieDetails={movieName}/>
      </MovieContextProvider>
      <Footer/>
    </>
  )
}

export default App
