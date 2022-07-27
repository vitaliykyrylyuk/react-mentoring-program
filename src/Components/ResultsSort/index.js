import React, { useRef, useState, useEffect } from 'react'
import useModalHide from '../../Utils/useModalHide'
import { CaretIcon } from '../Icons'
import DropdownItem from '../DropdownItem'
import { useSearchParams } from 'react-router-dom'
import { useIsMount } from '../../Utils/useIsMount'

function ResultsSort() {
  const SORT_BY_ASCENDING = 'asc'
  const SORT_BY_DESCENDING = 'desc'
  const defaultSortStates = [
    {
      id: 'release_date',
      label: 'Release date',
      isActive: false
    },
    {
      id: 'rating',
      label: 'Rating',
      isActive: true
    },
    {
      id: 'title',
      label: 'Title',
      isActive: false
    }
  ]

  const isMount = useIsMount()
  const [searchParams, setSearchParams] = useSearchParams()
  const searchParamsValues = Object.fromEntries(searchParams)
  const { sortOrder, sortBy } = searchParamsValues

  if (sortBy) {
    defaultSortStates.forEach((item) => {
      item.isActive = item.id === sortBy
    })
  }

  const toggleRef = useRef(null)
  const [sortState, setSortState] = useState(defaultSortStates)
  const [dropdownState, setDropdownState] = useModalHide(toggleRef, false)
  const [orderState, setOrderState] = useState(sortOrder ?? SORT_BY_ASCENDING)
  const sortOrderCssClass = orderState === SORT_BY_ASCENDING ? 'rotate-0' : 'rotate-180'

  const handleDropdown = () => setDropdownState(!dropdownState)
  const handleSort = (id) => {
    const updatedSortState = defaultSortStates.map((item) => {
      item.isActive = item.id === id
      return item
    })
    setSortState(updatedSortState)
  }

  const toggleOrder = () => {
    orderState === SORT_BY_ASCENDING
      ? setOrderState(SORT_BY_DESCENDING)
      : setOrderState(SORT_BY_ASCENDING)
  }

  useEffect(() => {
    if (!isMount) {
      setSearchParams({
        ...searchParamsValues,
        sortBy: sortState.find(({ isActive }) => isActive).id,
        sortOrder: orderState
      })
    }
  }, [sortState, orderState])

  return (
    <div className="relative">
      <div className="flex p-1 text-neutral-100 text-sm py-3 px-3 uppercase">
        <span className="text-neutral-500 whitespace-nowrap">Sort by</span>

        <button
          type="button"
          className="inline-flex justify-center w-full px-4 text-sm font-medium uppercase text-neutral-100 hover:text-rose-400 whitespace-nowrap"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleDropdown}
          ref={toggleRef}>
          {sortState.find(({ isActive }) => isActive).label}
        </button>
        <button
          type="button"
          className={`${sortOrderCssClass} inline-flex justify-center w-full text-sm font-medium uppercase text-neutral-100 hover:text-rose-400`}
          onClick={toggleOrder}>
          <CaretIcon className="h-5 w-3 text-rose-400" />
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
