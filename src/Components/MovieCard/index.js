import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import useModalHide from '../../Utils/useModalHide'
import Modal from '../Modal'
import DeleteForm from '../DeleteForm'
import { DotsIcon } from '../Icons'
import DropdownItem from '../DropdownItem'
import MovieFormWrapper from '../MovieFormWrapper'
import { useSearchParams } from 'react-router-dom'

function MovieCard(props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchParamsValues = Object.fromEntries(searchParams)

  const setMovieParam = (id) => {
    setSearchParams({
      ...searchParamsValues,
      movie: id
    })
  }

  const { id, poster_path: image, title, genres, release_date: year } = props.value

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
        onError={(i) => (i.target.src = 'https://via.placeholder.com/400x600.png?text=NO+IMAGE')}
        onClick={() => {
          setMovieParam(id)
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
          className="origin-top-right absolute z-10 right-0 top-10 mt-2 w-56 rounded-sm shadow-lg bg-gray-600 ring-1 ring-black ring-opacity-5 focus:outline-none"
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
          <MovieFormWrapper id={id} toggleModal={toggleEditModal} />
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
            setMovieParam(id)
            scrollTop()
          }}>
          {title}
        </div>
        {year && (
          <div>
            <span className="px-2 py-1 border-2 rounded border-gray-700">{parseInt(year)}</span>
          </div>
        )}
      </div>
      {genres.length && (
        <div className="py-2">
          <span className="inline-block text-sm font-semibold text-gray-600">
            {genres.join(', ')}
          </span>
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
