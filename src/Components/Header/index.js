import React, { useState, useContext } from 'react'
import SearchForm from '../SearchForm'
import Modal from '../Modal'
import MovieForm from '../MovieForm'
import Button from '../Button'

function Header(props) {
  // const contextData = useContext(MovieDetailContext)
  const [showModal, setShowModal] = useState(false)

  const toggleModal = React.useCallback(
    (modalState) => setShowModal(modalState),
    []
  )

  return (
    <>
      <div className="bg-[url('/public/Header.png')] bg-cover bg-gray-600 pt-5 pb-10 px-10">
        <div className="max-w-screen-lg mx-auto flex flex-wrap items-center justify-between ">
          <h1 className="text-rose-400 text-xl">
            <span className="font-black">netflix</span>
            roulette
          </h1>
          <Button theme={'secondary'} text={'+ add movie'} onClick={() => toggleModal(true)} />
          {showModal && (
            <Modal title="Add movie" toggleModal={toggleModal}>
              <MovieForm toggleModal={toggleModal} />
            </Modal>
          )}
          <SearchForm />
          {/*{contextData && <div> Details: {contextData}</div>}*/}
        </div>
      </div>
    </>
  )
}

export default Header
