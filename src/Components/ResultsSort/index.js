import React, { useRef, useState } from 'react'
import useModalHide from '../../Utils/useModalHide'

function ResultsSort() {
  const defaultStates = [
    {
      id: 'release-date',
      label: 'Release date',
      isActive: true
    },
    {
      id: 'rating',
      label: 'Rating',
      isActive: false
    },
    {
      id: 'title',
      label: 'Title',
      isActive: false
    }
  ]

  const toggleRef = useRef(null)
  const [sortState, setSortState] = useState(defaultStates)
  const [dropdownState, setDropdownState] = useModalHide(toggleRef, false)

  const handleDropdown = () => setDropdownState(!dropdownState)
  const handleSort = (id) => {
    const updatedSortState = defaultStates.map((item) => {
      item.isActive = item.id === id
      return item
    })
    setSortState(updatedSortState)
  }

  return (
    <div className="relative">
      <div className="flex p-1 text-neutral-100 text-sm py-3 px-3 uppercase">
        <span className="text-neutral-500 whitespace-nowrap">Sort by</span>

        <button
          type="button"
          className="inline-flex justify-center w-full px-4 text-sm font-medium uppercase text-neutral-100 hover:text-rose-400"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleDropdown}
          ref={toggleRef}>
          {sortState.find(({ isActive }) => isActive).label}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {dropdownState && (
        <div
          className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1">
          <div className="py-1" role="none">
            {sortState
              .filter(({ isActive }) => !isActive)
              .map(({ id, label }) => (
                <a
                  href="#"
                  key={id}
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                  onClick={() => handleSort(id)}>
                  {label}
                </a>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ResultsSort
