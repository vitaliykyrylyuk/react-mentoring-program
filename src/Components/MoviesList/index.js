import React from 'react'
import MovieCard from '../MovieCard'

function MoviesList({ item: { data } }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
      {data && data.map((movie) => <MovieCard key={movie.id} value={movie} />)}
    </div>
  )
}

export default MoviesList
