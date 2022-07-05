import React, { useRef, useState } from 'react'
import Input from '../Input'
import kebabCase from '../../Utils/kebabCase'
import useModalHide from '../../Utils/useModalHide'

function GenresDropdown(props) {
  const genreDropdownRef = useRef(null)

  const [genres, setGenres] = useState([])
  const [dropdownState, setDropdownState] = useModalHide(genreDropdownRef, false)

  const handleGenreCheckbox = (e) => {
    if (e.target.checked) {
      setGenres([...genres, e.target.value])
    } else {
      setGenres(genres.filter((item) => item !== e.target.value))
    }
  }

  const onFocus = () => {
    setDropdownState(true)
  }

  return (
    <div className="relative" ref={genreDropdownRef}>
      <Input
        onFocus={() => onFocus()}
        value={genres.join(', ')}
        label="genre"
        type="text"
        name="genre"
        id="genre"
        placeholder="Select Genre"
      />
      {dropdownState && (
        <div
          className="origin-top-right absolute z-10 mt-1 left-0 w-full rounded-sm shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1">
          {props.availableGenres.map((item) => (
            <label
              htmlFor={kebabCase(item)}
              key={kebabCase(item)}
              className="flex items-center text-white block px-4 py-2 text-sm hover:bg-rose-400 cursor-pointer">
              <input
                key={kebabCase(item)}
                id={kebabCase(item)}
                onChange={(e) => handleGenreCheckbox(e)}
                type="checkbox"
                value={item}
                className="w-4 h-4 mr-2 border border-rose-300 rounded bg-gray-50 focus:ring-3 focus:ring-rose-300 accent-rose-400"
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default GenresDropdown
