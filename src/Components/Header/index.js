import React, { useState } from 'react'
import SearchForm from '../SearchForm'
import Modal from '../Modal'
import MovieForm from '../MovieForm'

function Header() {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = (modalState) => setShowModal(modalState)

  return (
    <>
      <div className="flex items-center justify-between bg-gray-600 pt-5 pb-10 px-10">
        <h1 className="font-semibold text-rose-400 text-xl">
          <span className="font-bold">netflix</span>
          roulette
        </h1>
        <button
          onClick={() => toggleModal(true)}
          className="hover:bg-gray-400 hover:text-gray-600 group rounded-sm flex items-center bg-gray-500 text-rose-400 text-sm font-medium pl-2 pr-3 py-2 uppercase">
          <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          add movie
        </button>
        {showModal && (
          <Modal title="Add movie" toggleModal={toggleModal}>
            <MovieForm />
          </Modal>
        )}
      </div>
      <SearchForm />
    </>
  )
}

export default Header
