import React, { useState, useContext } from 'react'
import SearchForm from '../SearchForm'
import Modal from '../Modal'
import MovieFormWrapper from '../MovieFormWrapper'
import { movieContext } from '../../Utils/movieContext'
import MovieDetails from '../MovieDetails'
import MovieDetailsSwitch from '../MovieDetailsSwitch'

function Header() {
  const { currentMovie } = useContext(movieContext)

  const [showModal, setShowModal] = useState(false)

  const toggleModal = React.useCallback((modalState) => setShowModal(modalState), [showModal])
  const isMovieDetailsVisible = Object.keys(currentMovie).length !== 0

  return (
    <>
      <div className="bg-[url('/public/Header.png')] bg-cover bg-gray-600 pt-5 pb-10 px-10">
        <div className="max-w-screen-lg mx-auto flex flex-wrap items-center justify-between ">
          <h1 className="text-rose-400 text-xl">
            <span className="font-black">netflix</span>
            roulette
          </h1>
          <MovieDetailsSwitch {...{ isMovieDetailsVisible, toggleModal }} />
          {showModal && (
            <Modal title="Add movie" toggleModal={toggleModal}>
              <MovieFormWrapper toggleModal={toggleModal} />
            </Modal>
          )}
          {isMovieDetailsVisible ? <MovieDetails /> : <SearchForm />}
        </div>
      </div>
    </>
  )
}

export default Header
