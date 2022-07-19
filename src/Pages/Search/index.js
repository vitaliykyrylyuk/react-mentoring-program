import React from 'react'
import { MovieContextProvider } from '../../Utils/movieContext'
import Header from '../../Components/Header'
import Main from '../../Components/Main'
import Footer from '../../Components/Footer'

function Search() {
  return (
    <>
      <MovieContextProvider>
        <Header />
        <Main />
      </MovieContextProvider>
      <Footer />
    </>
  )
}

export default Search
