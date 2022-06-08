import React from 'react'

function SearchForm () {
  return (
    <div className="bg-gray-600 pt-5 pb-24 px-10 md:px-32">
      <div className="text-4xl text-neutral-100 uppercase font-light mb-12">find your movie</div>
      <form className="group relative w-full flex flex-wrap">
        <input
          className="focus:ring-2 focus:ring-rose-300 focus:outline-none appearance-none flex-1 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-sm py-3 px-5"
          type="text" aria-label="Filter projects" placeholder="What do you want to watch?" />
        <button
          className="hover:bg-gray-400 hover:text-gray-600 group rounded-sm flex items-center bg-rose-400 text-neutral-100 text-sm font-medium py-3 px-16 ml-10 uppercase">
          search
        </button>
      </form>
    </div>
  )
}

export default SearchForm
