import React from 'react'

function MovieForm(props) {
  return (
    <form action={props?.id ? `edit/${props?.id}` : '' } method="POST">
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-7 sm:col-span-4">
          <label htmlFor="title" className="block text-xs font-medium text-rose-400 mb-2 uppercase">
            TITLE
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Movie title"
            className="mt-1 p-2 bg-gray-600 text-neutral-300 focus:ring-rose-500 focus:border-rose-500 block w-full sm:text-sm border-rose-300 rounded-sm"
          />
        </div>
        <div className="col-span-7 sm:col-span-3">
          <label
            htmlFor="release-date"
            className="block text-xs font-medium text-rose-400 mb-2 uppercase">
            RELEASE DATE
          </label>
          <input
            type="text"
            name="release-date"
            id="release-date"
            placeholder="Select Date"
            className="mt-1 p-2 bg-gray-600 text-neutral-300 focus:ring-rose-500 focus:border-rose-500 block w-full sm:text-sm border-rose-300 rounded-sm"
          />
        </div>
        <div className="col-span-7 sm:col-span-4">
          <label
            htmlFor="movie-url"
            className="block text-xs font-medium text-rose-400 mb-2 uppercase">
            MOVIE URL
          </label>
          <input
            type="text"
            name="movie-url"
            id="movie-url"
            placeholder="Movie title"
            className="mt-1 p-2 bg-gray-600 text-neutral-300 focus:ring-rose-500 focus:border-rose-500 block w-full sm:text-sm border-rose-300 rounded-sm"
          />
        </div>
        <div className="col-span-7 sm:col-span-3">
          <label
            htmlFor="rating"
            className="block text-xs font-medium text-rose-400 mb-2 uppercase">
            RATING
          </label>
          <input
            type="text"
            name="rating"
            id="rating"
            placeholder="7.8"
            className="mt-1 p-2 bg-gray-600 text-neutral-300 focus:ring-rose-500 focus:border-rose-500 block w-full sm:text-sm border-rose-300 rounded-sm"
          />
        </div>
        <div className="col-span-7 sm:col-span-4">
          <label htmlFor="genre" className="block text-xs font-medium text-rose-400 mb-2 uppercase">
            genre
          </label>
          <select
            id="genre"
            name="genre"
            className="mt-1 block w-full p-2 text-neutral-300 border-rose-300 bg-gray-600 rounded-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm">
            <option>Select Genre</option>
          </select>
        </div>
        <div className="col-span-7 sm:col-span-3">
          <label
            htmlFor="runtime"
            className="block text-xs font-medium text-rose-400 mb-2 uppercase">
            RUNTIME
          </label>
          <input
            type="text"
            name="runtime"
            id="runtime"
            placeholder="minutes"
            className="mt-1 p-2 bg-gray-600 text-neutral-300 focus:ring-rose-500 focus:border-rose-500 block w-full sm:text-sm border-rose-300 rounded-sm"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="overview"
          className="block text-xs font-medium text-rose-400 mb-2 uppercase">
          OVERVIEW
        </label>
        <div className="mt-1">
          <textarea
            id="overview"
            name="overview"
            rows={3}
            className="mt-1 p-2 bg-gray-600 text-neutral-300 focus:ring-rose-500 focus:border-rose-500 block w-full sm:text-sm border-rose-300 rounded-sm"
            placeholder="Movie description"
            defaultValue={''}
          />
        </div>
      </div>
    </form>
  )
}

export default MovieForm
