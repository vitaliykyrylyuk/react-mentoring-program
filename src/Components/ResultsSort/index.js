import React, { useRef, useState, useContext, useEffect } from 'react'
import useModalHide from '../../Utils/useModalHide'
import { CaretIcon } from '../Icons'
import DropdownItem from '../DropdownItem'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../../Actions/fetchData'
import { FetchContext } from '../../Utils/fetchContext'

function ResultsSort() {
  const defaultStates = [
    {
      id: 'release_date',
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

  const dispatch = useDispatch()
  const { currentFetchParams, setCurrentFetchParams } = useContext(FetchContext)
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

    setCurrentFetchParams({ ...currentFetchParams, sortBy: id })
  }

  useEffect(() => {
    dispatch(fetchMovies(currentFetchParams))
  }, [currentFetchParams])

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
          <CaretIcon className="-mr-1 ml-2 h-5 w-3 text-rose-400" />
        </button>
      </div>
      {dropdownState && (
        <div
          className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-sm shadow-lg bg-gray-600 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1">
          <div className="py-1" role="none">
            {sortState
              .filter(({ isActive }) => !isActive)
              .map(({ id, label }) => (
                <DropdownItem key={id} onClick={() => handleSort(id)} text={label} />
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ResultsSort
