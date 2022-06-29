import React, { useContext } from 'react'
import { MovieContext } from '../../Utils/MovieContext'

function MovieDetails() {
  const { currentMovie } = useContext(MovieContext)

  const {
    title,
    genres,
    poster_path: image,
    release_date: year,
    runtime: duration,
    overview: description,
    vote_average: rating
  } = currentMovie

  return (
    <div className="group relative w-full flex pt-12">
      <img
        className="w-1/3"
        src={image}
        alt={title}
        onError={(i) => (i.target.src = 'https://via.placeholder.com/400x600.png?text=NO+IMAGE')}
      />
      <div className="w-2/3 pl-12">
        <div className="flex items-center pt-4 font-light text-neutral-300 text-xl">
          <div className="text-4xl text-neutral-100 mr-5">{title}</div>
          <div className="inline-flex justify-center items-center text-2xl w-14 h-14 rounded-full border-2 border-opacity-30 border-white text-green-300">
            {rating}
          </div>
        </div>
        {genres.length && (
          <div className="py-2">
            <span className="inline-block text-sm text-gray-300">{genres.join(', ')}</span>
          </div>
        )}
        <div className="flex text-rose-400 text-xl">
          {year && <span className="py-5 mr-5">{parseInt(year)}</span>}
          {duration && <span className="py-5">{duration} min</span>}
        </div>
        {description && (
          <div className="py-2">
            <span className="inline-block text-sm text-white">{description}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieDetails
