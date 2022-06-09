import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import useModalHide from '../../Utils/useModalHide'

function MovieCard(props) {
  const { image, title, genre, year } = props.value

  const toggleRef = useRef(null)
  const [dropdownState, setDropdownState] = useModalHide(toggleRef, false)

  const handleDropdown = () => setDropdownState(!dropdownState)

  return (
    <div className="group relative">
      <img className="w-full" src={image} alt={title} />

      <svg
        className="hidden opacity-70 group-hover:flex absolute right-2 top-0 cursor-pointer"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleDropdown}
        ref={toggleRef}>
        <g>
          <circle cx="22" cy="22" r="18" fill="#2A202D" />
        </g>
        <circle cx="22" cy="15" r="2" fill="white" />
        <circle cx="22" cy="22.5" r="2" fill="white" />
        <circle cx="22" cy="30" r="2" fill="white" />
      </svg>
      {dropdownState && (
        <div
          className="origin-top-right absolute z-10 right-0 top-10 mt-2 w-56 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1">
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0">
              Edit
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0">
              Delete
            </a>
          </div>
        </div>
      )}

      <div className="flex justify-between pt-4 font-semibold text-neutral-300 text-xl">
        <div className="">{title}</div>
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
