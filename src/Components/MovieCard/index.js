import React, { useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import useModalHide from '../../Utils/useModalHide'
import Modal from '../Modal'
import MovieForm from '../MovieForm'
import DeleteForm from '../DeleteForm'
import { DotsIcon } from '../Icons'
import DropdownItem from '../DropdownItem'
import { MovieContext } from '../../Utils/MovieContext'

function MovieCard(props) {
  const { setCurrentMovie } = useContext(MovieContext)

  const { id, image, title, genre, year } = props.value

  const toggleRef = useRef(null)
  const [dropdownState, setDropdownState] = useModalHide(toggleRef, false)

  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const toggleEditModal = React.useCallback((modalState) => setShowEditModal(modalState), [])
  const toggleDeleteModal = React.useCallback((modalState) => setShowDeleteModal(modalState), [])

  const handleDropdown = () => setDropdownState(!dropdownState)
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="group relative">
      <img
        className="w-full cursor-pointer"
        src={image}
        alt={title}
        onClick={() => {
          setCurrentMovie(props.value)
          scrollTop()
        }}
      />
      <div
        className="w-10 h-10 hidden group-hover:flex absolute right-2 top-2 cursor-pointer rounded-full bg-opacity-80 bg-gray-900 text-white"
        onClick={handleDropdown}
        ref={toggleRef}>
        <DotsIcon />
      </div>

      {dropdownState && (
        <div
          className="origin-top-right absolute z-10 right-0 top-10 mt-2 w-56 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1">
          <div className="py-1" role="none">
            <DropdownItem onClick={() => toggleEditModal(true)} text={'Edit'} />
            <DropdownItem onClick={() => toggleDeleteModal(true)} text={'Delete'} />
          </div>
        </div>
      )}
      {showEditModal && (
        <Modal title="Edit movie" toggleModal={toggleEditModal}>
          <MovieForm id={id} toggleModal={toggleEditModal} />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal title="Delete movie" toggleModal={toggleDeleteModal}>
          <DeleteForm id={id} toggleModal={toggleDeleteModal} />
        </Modal>
      )}

      <div className="flex justify-between pt-4 font-semibold text-neutral-300 text-xl">
        <div
          className="cursor-pointer"
          onClick={() => {
            setCurrentMovie(props.value)
            scrollTop()
          }}>
          {title}
        </div>
        {year && (
          <div>
            <span className="px-2 py-1 border-2 rounded border-gray-700">{year}</span>
          </div>
        )}
      </div>
      {genre && (
        <div className="py-2">
          <span className="inline-block text-sm font-semibold text-gray-600">{genre}</span>
        </div>
      )}
    </div>
  )
}

MovieCard.defaultProps = {
  image: `https://api.lorem.space/image/movie?w=300&h=500&hash=${Math.random()}`,
  title: 'Default title'
}

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string,
  year: PropTypes.string
}

export default MovieCard
