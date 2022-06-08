import React from 'react'

function ResultsSort() {
  return (
    <div className="flex p-1 text-neutral-100 text-sm py-3 px-3 uppercase">
      <span className="text-neutral-500 whitespace-nowrap">Sort by</span>

      <button
        type="button"
        className="inline-flex justify-center w-full px-4 text-sm font-medium uppercase text-neutral-100 hover:text-rose-400"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true">
        release date
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
  )
}

export default ResultsSort
